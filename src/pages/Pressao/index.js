import React, { useState, useEffect } from "react";
import { Text, View, Pressable, Image, Alert, TextInput, FlatList, Keyboard } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import Feather from "@expo/vector-icons/Feather";

import { classificarPressao, getHistoricoStorage, saveHistoricoStorage } from '../../utils/pressureHelper';
import CardHistorico from './CardHistorico';
export default function Pressao() {
  const navigation = useNavigation();

  const [sistolica, setSistolica] = useState("");
  const [diastolica, setDiastolica] = useState("");
  const [pulso, setPulso] = useState("");
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    (async () => {
      const dados = await getHistoricoStorage();
      setHistorico(dados);
    })();
  }, []);

  const adicionarMedicao = async () => {
    if (!sistolica || !diastolica || !pulso) {
      Alert.alert("Atenção", "Por favor, preencha todos os campos.");
      return;
    }

    const agora = new Date();
    const dataFormatada = `${agora.getDate().toString().padStart(2, '0')}/${(agora.getMonth() + 1).toString().padStart(2, '0')}/${agora.getFullYear()} - ${agora.getHours().toString().padStart(2, '0')}:${agora.getMinutes().toString().padStart(2, '0')}`;

    const classificacao = classificarPressao(sistolica, diastolica);

    const novaMedicao = {
      id: Math.random().toString(),
      sistolica,
      diastolica,
      pulso,
      data: dataFormatada,
      ...classificacao 
    };

    const novoHistorico = [novaMedicao, ...historico];
    setHistorico(novoHistorico);

    const salvoComSucesso = await saveHistoricoStorage(novoHistorico);
    if (!salvoComSucesso) {
      Alert.alert("Erro", "Falha ao salvar no dispositivo.");
    }

    setSistolica("");
    setDiastolica("");
    setPulso("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={require("../../../assets/iconPressao.png")} style={styles.headerLogo} resizeMode="contain" />
          <Text style={styles.headerText}>Pressão</Text>
        </View>
        <Pressable style={styles.btnLogout} onPress={() => navigation.navigate("Home")}>
          <Feather name="log-out" size={22} color="white" />
        </Pressable>
      </View>

      {/* ÁREA DOS INPUTS */}
      <View style={styles.containerInputs}>
        <Text style={styles.subtitulo}>Nova Medição</Text>
        <View style={styles.linhaInputs}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Sistólica</Text>
            <TextInput style={styles.input} placeholder="Ex: 12" keyboardType="numeric" value={sistolica} onChangeText={setSistolica} />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Diastólica</Text>
            <TextInput style={styles.input} placeholder="Ex: 8" keyboardType="numeric" value={diastolica} onChangeText={setDiastolica} />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Pulso</Text>
            <TextInput style={styles.input} placeholder="Ex: 75" keyboardType="numeric" value={pulso} onChangeText={setPulso} />
          </View>
        </View>
        <Pressable style={styles.btnAdicionar} onPress={adicionarMedicao}>
          <Feather name="plus" size={20} color="white" style={{ marginRight: 5 }} />
          <Text style={styles.textoBtnAdicionar}>Salvar Medição</Text>
        </Pressable>
      </View>

      {/* HISTÓRICO */}
      <View style={styles.containerHistorico}>
        <Text style={styles.subtitulo}>Histórico de Registros</Text>
        <FlatList
          data={historico}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CardHistorico item={item} />} // Chamando o componente isolado
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}