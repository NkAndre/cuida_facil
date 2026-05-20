import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Pressable,
  Image,
  TextInput,
  Modal,
  FlatList,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "./style";
import { Audio } from "expo-av";
import Feather from "@expo/vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import * as FileSystem from "expo-file-system/legacy";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Entypo from "@expo/vector-icons/Entypo"; 
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Remedios() {
  const navigation = useNavigation();

  const [nomeRemedio, setNomeRemedio] = useState("");
  const [unidade, setUnidade] = useState("");
  const [dosagem, setDosagem] = useState("");
  const [lista, setLista] = useState([]);

  const [imagemParaSalvar, setImagemParaSalvar] = useState(null); 
  const [imagem, setImagem] = useState(null); 
  const [modalVisible, setModalVisible] = useState(false);

  const [modalConfirmarVisible, setModalConfirmarVisible] = useState(false);
  const [modalSucessoVisible, setModalSucessoVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const STORAGE_KEY = "@minhas_alergias";

  const carregarDados = async () => {
    try {
      const valor = await AsyncStorage.getItem(STORAGE_KEY);
      if (valor !== null) {
        setLista(JSON.parse(valor));
      }
    } catch (e) {
      Alert.alert("Erro", "Não foi possível carregar os dados.");
    }
  };

  const salvarDados = async (novaLista) => {
    try {
      const jsonValue = JSON.stringify(novaLista);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      Alert.alert("Erro", "Não foi possível salvar os dados.");
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  const salvarImagemPermanente = async (uriTemporaria) => {
    try {
      const nomeDoArquivo = `${Date.now()}.jpg`; 
      const diretorioPermanente = `${FileSystem.documentDirectory}${nomeDoArquivo}`;

      await FileSystem.copyAsync({
        from: uriTemporaria,
        to: diretorioPermanente,
      });

      setImagem(diretorioPermanente);         
      setImagemParaSalvar(diretorioPermanente); 
      return diretorioPermanente;
    } catch (error) {
      Alert.alert("Erro", "Não foi possível guardar a foto localmente.");
      console.log(error);
      return null;
    }
  };

  const solicitarPermissoes = async () => {
    const camera = await ImagePicker.requestCameraPermissionsAsync();
    const galeria = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (camera.status !== "granted" || galeria.status !== "granted") {
      Alert.alert(
        "Permissão negada",
        "É necessário permitir acesso à câmera e galeria para continuar."
      );
      return false;
    }
    return true;
  };

  const tirarFoto = async () => {
    setModalVisible(false);
    const permissoes = await solicitarPermissoes();
    if (!permissoes) return;

    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes:["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!resultado.canceled) {
      const uriFinal = resultado.assets && resultado.assets[0] ? resultado.assets[0].uri : resultado.uri;
      await salvarImagemPermanente(uriFinal); 
    }
  };

  const escolherGaleria = async () => {
    setModalVisible(false);
    const permissoes = await solicitarPermissoes();
    if (!permissoes) return;

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!resultado.canceled) {
      const uriFinal = resultado.assets && resultado.assets[0] ? resultado.assets[0].uri : resultado.uri;
      await salvarImagemPermanente(uriFinal); 
    }
  };

  async function handlePreVisualizarRemedio() {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../../assets/sound/green.mp3")
      );
      await sound.playAsync();
    } catch (e) {
      console.log("Erro ao tocar som", e);
    }

    if (!nomeRemedio.trim() || !unidade.trim() || !dosagem.trim()) {
      Alert.alert("Aviso", "Por favor, preencha todos os campos.");
      return;
    }

    setModalConfirmarVisible(true);
  }

  async function handleConfirmarSalvar() {
    setModalConfirmarVisible(false);

    const novoRemedio = {
      id: Date.now().toString(),
      nome: nomeRemedio.trim(),
      unidade: unidade.trim(),
      dosagem: dosagem.trim(),
      foto: imagemParaSalvar, 
    };

    const novaLista = [...lista, novoRemedio];
    setLista(novaLista);
    await salvarDados(novaLista); 

    setModalSucessoVisible(true);
    
    setNomeRemedio("");
    setUnidade("");
    setDosagem("");
    setImagem(null);
    setImagemParaSalvar(null); 

    setTimeout(() => {
      setModalSucessoVisible(false);
    }, 2000);
  }

  const handleDeletarRemedio = async (id) => {
    const listaFiltrada = lista.filter(item => item.id !== id);
    setLista(listaFiltrada);
    await salvarDados(listaFiltrada);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require("../../../assets/iconRemedio.png")}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <Text style={styles.headerText}>Remédios</Text>
        </View>
        <Pressable
          style={styles.btnLogout}
          onPress={() => navigation.navigate("Home")}
        >
          <Feather name="log-out" size={22} color="white" />
        </Pressable>
      </View>

      {/* Container do Avatar */}
      <View style={{ marginVertical: 20 }}>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={[styles.avatarContainer, !imagem && { backgroundColor: '#E1E1E1' }]}
        >
          <Image
            source={
              imagem
                ? { uri: imagem }
                : require("../../../assets/remedioFoto2.png")
            }
            style={styles.imagem}
          />
          <View style={styles.cameraIconContainer}>
            <Entypo name="camera" size={20} color="#000" />
          </View>
        </Pressable>

        {/* Modal de Escolha de Foto */}
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setModalVisible(false)}
          >
            <View style={styles.viewModal}>
              <Text style={styles.modalTitle}>Foto do remédio</Text>
              <Text style={styles.modalSubtitle}>
                Escolha como deseja adicionar a foto do remédio
              </Text>

              <Pressable style={styles.inputModal} onPress={tirarFoto}>
                <View style={[styles.modalIconBox, styles.modalIconBoxCamera]}>
                  <MaterialIcons name="photo-camera" size={22} color="#185FA5" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.buttonModalText}>Câmera</Text>
                  <Text style={styles.modalSubtitle}>Tirar uma nova foto</Text>
                </View>
                <MaterialIcons name="chevron-right" size={20} color="#bbb" />
              </Pressable>

              <Pressable style={styles.inputModal} onPress={escolherGaleria}>
                <View style={[styles.modalIconBox, styles.modalIconBoxGaleria]}>
                  <MaterialIcons name="photo-library" size={22} color="#3B6D11" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.buttonModalText}>Galeria</Text>
                  <Text style={styles.modalSubtitle}>Escolher da biblioteca</Text>
                </View>
                <MaterialIcons name="chevron-right" size={20} color="#bbb" />
              </Pressable>

              <Pressable style={styles.modalCancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalCancelText}>Cancelar</Text>
              </Pressable>
            </View>
          </Pressable>
        </Modal>
      </View>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Remédio"
          value={nomeRemedio}
          onChangeText={setNomeRemedio}
        />
      </View>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Insira a Unidade"
          value={unidade}
          onChangeText={setUnidade}
        />
      </View>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Insira a Dosagem"
          value={dosagem}
          onChangeText={setDosagem}
        />
      </View>

      <View style={styles.viewBotao}>
        <Pressable onPress={handlePreVisualizarRemedio} style={styles.botao}>
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </Pressable>
      </View>

      {/* MODAL 1: Confirmação */}
      <Modal
        transparent={true}
        visible={modalConfirmarVisible}
        animationType="slide"
        onRequestClose={() => setModalConfirmarVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.viewModal, styles.modalConfirmContent]}>
            <Text style={[styles.modalTitle, { fontSize: 18, marginBottom: 10 }]}>Confirmar Dados</Text>
            
            <Image 
              source={imagem ? { uri: imagem } : require("../../../assets/remedioFoto2.png")} 
              style={styles.modalConfirmImage} 
            />
            
            <View style={styles.modalConfirmDataBox}>
              <Text style={styles.modalConfirmText}>
                <Text style={styles.modalConfirmLabel}>Nome:</Text> {nomeRemedio}
              </Text>
              <Text style={styles.modalConfirmText}>
                <Text style={styles.modalConfirmLabel}>Unidade:</Text> {unidade}
              </Text>
              <Text style={styles.modalConfirmText}>
                <Text style={styles.modalConfirmLabel}>Dosagem:</Text> {dosagem}
              </Text>
            </View>

            <View style={styles.modalConfirmButtonsRow}>
              <Pressable 
                style={[styles.modalCancelButton, styles.modalConfirmBtnFlex]} 
                onPress={() => setModalConfirmarVisible(false)}
              >
                <Text style={styles.modalCancelText}>Corrigir</Text>
              </Pressable>
              
              <Pressable 
                style={[styles.botao, styles.modalConfirmBtnSalvar]} 
                onPress={handleConfirmarSalvar}
              >
                <Text style={styles.botaoTexto}>Salvar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* MODAL 2: Sucesso */}
      <Modal transparent={true} visible={modalSucessoVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.viewModal, styles.modalSucessoBox]}>
            <View style={styles.modalSucessoIconCircle}>
              <Feather name="check-circle" size={42} color="#3B6D11" />
            </View>
            <Text style={[styles.modalTitle, { textAlign: 'center', fontSize: 18, color: '#3B6D11' }]}>Salvo com Sucesso!</Text>
          </View>
        </View>
      </Modal>

      {/* Listagem */}
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.cardRemedio}>
            <Image 
              source={item.foto ? { uri: item.foto } : require("../../../assets/remedioFoto2.png")} 
              style={styles.cardRemedioImage} 
            />
            <View style={styles.cardRemedioInfo}>
              <Text style={styles.cardRemedioNome}>{item.nome}</Text>
              <Text style={styles.cardRemedioDetalhes}>Dosagem: {item.dosagem} | Unid: {item.unidade}</Text>
            </View>
            <Pressable onPress={() => handleDeletarRemedio(item.id)} style={styles.cardRemedioBtnDelete}>
              <Feather name="trash-2" size={20} color="#D9534F" />
            </Pressable>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}