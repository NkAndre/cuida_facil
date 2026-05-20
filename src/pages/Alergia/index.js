import React, { useState,useEffect } from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
//import da cores separando por nivel
import styles, { nivelCores } from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Alergia() {
  const navigation = useNavigation();

  const [alergia, setAlergia] = useState("");
  const [nivelAlergia, setNivelAlergia] = useState("");
  const [lista, setLista] = useState([]);

  const STORAGE_KEY = '@minhas_alergias';

  // Função para carregar os dados ao iniciar
  const carregarDados = async () => {
    try {
      const valor = await AsyncStorage.getItem(STORAGE_KEY);
      if (valor !== null) {
        setLista(JSON.parse(valor));
      }
    } catch (e) {
      Alert.alert("Erro", "Não foi possível carregar as alergias.");
    }
  };

  // Função para salvar os dados
  const salvarDados = async (novaLista) => {
    try {
      const jsonValue = JSON.stringify(novaLista);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      Alert.alert("Erro", "Não foi possível salvar os dados.");
    }
  };

  // useEffect que roda uma vez ao montar o componente
  useEffect(() => {
    carregarDados();
  }, []);

  // --- FIM DA LOGICA ASYNC STORAGE ---

  const adicionarAlergia = () => {
    if (!alergia.trim() || !nivelAlergia) {
      Alert.alert("Atenção", "Preencha o nome da alergia e selecione o nível!");
      return;
    }

    const novaAlergia = {
      id: Math.random().toString(),
      nome: alergia,
      nivel: nivelAlergia,
    };

   const novaLista = [...lista, novaAlergia];
    setLista(novaLista);
    salvarDados(novaLista);

    setAlergia("");
    setNivelAlergia("");
  };

  const removerAlergia = (id) => {
   const listaFiltrada = lista.filter((item) => item.id !== id);

    setLista(listaFiltrada);
    salvarDados(listaFiltrada); // atualiza os storage
  };

  // Função que renderiza cada item da lista com a cor dinâmica
  const renderItem = ({ item }) => {
    const corBorda = nivelCores[item.nivel] || nivelCores.padrao;

    return (
      <View style={[styles.cardAlergia, { borderLeftColor: corBorda }]}>
        <View style={{ flex: 1 }}>
          <Text style={styles.textoCard}>{item.nome}</Text>
          <Text style={[styles.textoNivel, { color: corBorda }]}>
            Nível: {item.nivel}
          </Text>
        </View>
        <Pressable onPress={() => removerAlergia(item.id)}>
          <Feather name="trash-2" size={22} color="#cc0000" />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 30 }}
     
        ListHeaderComponent={
          <>
            {/* HEADER */}
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Image
                  source={require("../../../assets/iconAlergia.png")}
                  style={styles.headerLogo}
                  resizeMode="contain"
                />
                <Text style={styles.headerText}>Alergias</Text>
              </View>
              <Pressable
                style={styles.btnLogout}
                onPress={() => navigation.navigate("Home")}
              >
                <Feather name="log-out" size={22} color="white" />
              </Pressable>
            </View>

            {/* INPUT NOME */}
            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                placeholder="Nome da alergia (ex: Glúten)"
                value={alergia}
                onChangeText={setAlergia}
              />
            </View>

            {/* PICKER NÍVEL */}
            <View style={styles.inputArea}>
              <Picker
                selectedValue={nivelAlergia}
                onValueChange={(itemValue) => setNivelAlergia(itemValue)}
                style={styles.picker}
                dropdownIconColor="#4A90E2"
              >
                <Picker.Item label="Selecione o nível" value="" color="#999" />
                <Picker.Item label="Leve" value="leve" />
                <Picker.Item label="Moderado" value="moderado" />
                <Picker.Item label="Grave" value="grave" />
              </Picker>
            </View>

            {/* BOTÃO ADICIONAR */}
            <View style={styles.viewBotao}>
              <Pressable style={styles.botao} onPress={adicionarAlergia}>
                <Text style={styles.botaoTexto}>Adicionar na lista</Text>
              </Pressable>
            </View>

            {lista.length > 0 && (
              <Text style={styles.tituloLista}>Minhas Alergias:</Text>
            )}
          </>
        }
      />
    </View>
  );
}