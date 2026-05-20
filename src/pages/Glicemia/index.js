import React, { useState, useEffect } from "react";
import { Text, View, Modal, Image, Pressable, FlatList, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "./style";
import Feather from "@expo/vector-icons/Feather";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { classificarGlicemia, obterHorarioAtual, obterDataAtual } from "./script";

export default function Glicemia() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  
  const [valorInput, setValorInput] = useState("");
  const [tipoGli, setTipoGli] = useState("Casual");

  const [medicoes, setMedicoes] = useState([]);

  const STORAGE_KEY = '@minha_glicemia';

  // 1. Carregar os dados ao iniciar
  const carregarDados = async () => {
    try {
      const valor = await AsyncStorage.getItem(STORAGE_KEY);
      if (valor !== null) {
        // CORREÇÃO: Atualizar a lista de medições, não o valorInput
        setMedicoes(JSON.parse(valor));
      }
    } catch (e) {
      Alert.alert("Erro", "Não foi possível carregar as medições.");
    }
  };

  // 2. Função para salvar os dados
  const salvarDados = async (novaLista) => {
    try {
      const jsonValue = JSON.stringify(novaLista);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      Alert.alert("Erro", "Não foi possível salvar os dados.");
    }
  };

  // 3. useEffect para disparar a carga inicial
  useEffect(() => {
    carregarDados();
  }, []);

  const adicionarMedicao = () => {
    if (!valorInput || valorInput.trim() === "") {
      Alert.alert("Atenção", "Por favor, digite o valor da medição.");
      return;
    }

    const novaMedicao = {
      id: Math.random().toString(36).substr(2, 9),
      valor: valorInput,
      tipo: tipoGli,
      horario: obterHorarioAtual(),
      data: obterDataAtual(),
    };

    //  Atualiza estado e salva no Storage
    const listaAtualizada = [novaMedicao, ...medicoes];
    setMedicoes(listaAtualizada);
    salvarDados(listaAtualizada);

    setValorInput("");
    setTipoGli("Casual");
    setModalVisible(false);
  };

  const deletarMedicao = (id) => {
    Alert.alert(
      "Excluir Registro",
      "Tem certeza que deseja apagar esta medição?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Excluir", 
          style: "destructive", 
          onPress: () => {
            //  Filtrar e salvar a nova lista
            const listaFiltrada = medicoes.filter(item => item.id !== id);
            setMedicoes(listaFiltrada);
            salvarDados(listaFiltrada);
          } 
        }
      ]
    );
  };

 

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={require("../../../assets/iconGlicemia.png")} style={styles.headerLogo} resizeMode="contain" />
          <Text style={styles.headerText}>Glicemia</Text>
        </View>
        <Pressable style={styles.btnLogout} onPress={() => navigation.navigate("Home")}>
          <Feather name="log-out" size={22} color="white" />
        </Pressable>
      </View>

      {/* Botão para Abrir Modal */}
      <View style={styles.viewButton}>
        <Pressable style={styles.buttonMedir} onPress={() => setModalVisible(true)}>
          <View style={styles.roberto}>
            <Text style={styles.textStyle}>Medir Glicemia</Text>
            <Image source={require("../../../assets/medidor.png")} style={styles.medirLogo} resizeMode="contain" />
          </View>
        </Pressable>
      </View>

      {/* Modal de Cadastro */}
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.tituloModal}>Nova Medição</Text>
            <View style={styles.viewInput}>
              <Text style={styles.modalText}>Valor da medição (mg/dL)</Text>
              <View style={styles.inputArea}>
                <TextInput
                  style={styles.input}
                  placeholder="Ex: 110"
                  keyboardType="numeric"
                  value={valorInput}
                  onChangeText={setValorInput}
                />
              </View>
            </View>
            <View style={styles.viewInput}>
              <Text style={styles.modalText}>Momento da coleta</Text>
              <View style={styles.inputArea}>
                <Picker selectedValue={tipoGli} style={styles.picker} onValueChange={(itemValue) => setTipoGli(itemValue)}>
                  <Picker.Item label="Casual" value="Casual" />
                  <Picker.Item label="Pós-refeição" value="Pós-refeição" />
                  <Picker.Item label="Pós-jejum" value="Pós-jejum" />
                </Picker>
              </View>
            </View>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={adicionarMedicao}>
              <Text style={styles.textStyle}>Salvar Medição</Text>
            </Pressable>
            <Pressable style={{ marginTop: 15 }} onPress={() => setModalVisible(false)}>
              <Text style={{ color: '#718096' }}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Lista Dinâmica */}
      <FlatList
        data={medicoes}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 30 }}
        renderItem={({ item }) => {
          const classificacao = classificarGlicemia(item.valor, item.tipo);
          
          return (
            <View style={styles.card}>
              <View style={[styles.cardAccent, { backgroundColor: classificacao.style === 'nivelGliN' ? '#4AE266' : (classificacao.style === 'nivelGliPD' ? '#FFAE00' : '#E24A4D') }]} />
              
              <View style={styles.cardContent}>
              
            

                <Text style={styles.dataMedicao}>{item.data}</Text>
                
                <View style={styles.cardHeader}>
                  <View style={styles.centerText}>
                    <Text style={styles.medicaoValor}>{item.valor}</Text>
                    <Text style={styles[classificacao.style]}>{classificacao.label}</Text>
                  </View>
                  
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.tipoGli}>{item.tipo}</Text>
                    <Text style={styles.horarioMedicao}>{item.horario}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}