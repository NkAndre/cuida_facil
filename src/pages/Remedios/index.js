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
  Platform
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
import * as Notifications from 'expo-notifications';
import DateTimePicker from "@react-native-community/datetimepicker";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

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

  // ─── Estados para data & hora 
  const [dataNotificacao, setDataNotificacao] = useState(new Date());

 
  const [pickerMode, setPickerMode] = useState(null);

  
  const [modalPickerVisible, setModalPickerVisible] = useState(false);


  const STORAGE_KEY = "@minhas_alergias";

  useEffect(() => {
    carregarDados();
    solicitarPermissoes();
    solicitarPermissaoNotificacao();
  }, []);

  //fuction soliciar permissao
  const solicitarPermissaoNotificacao = async () => {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      Alert.alert("Aviso", "As notificações estão desativadas. Você não receberá os lembretes.");
    }
  };

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

  //functiou salva os dados
  const salvarDados = async (novaLista) => {
    try {
      const jsonValue = JSON.stringify(novaLista);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      Alert.alert("Erro", "Não foi possível salvar os dados.");
    }
  };

  //funcao de agedar as notificacao
  const agendarNotificacao = async (nome, dose) => {
    if (dataNotificacao <= new Date()) {
      Alert.alert("Aviso", "A data/hora selecionada já passou. A notificação não será agendada.");
      return null;
    }

    try {
      const idNotificacao = await Notifications.scheduleNotificationAsync({
        content: {
          title: `Hora do Remédio: ${nome}`,
          body: `Está na hora de tomar sua dose de ${dose}.`,
          sound: true,
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DATE,
          date: dataNotificacao.getTime(),
        },
      });
      return idNotificacao;
    } catch (error) {
      console.log("Erro ao agendar notificação", error);
      return null;
    }
  };

  //function salva img permanente
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

  //function tirar foto
  const tirarFoto = async () => {
    setModalVisible(false);
    const permissoes = await solicitarPermissoes();
    if (!permissoes) return;

    const resultado = await ImagePicker.launchCameraAsync({
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

  //clica no btn e sai som
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


  //fucntio de confirmar se vai querer salva
  async function handleConfirmarSalvar() {
    setModalConfirmarVisible(false);

    const notificacaoId = await agendarNotificacao(nomeRemedio.trim(),
     `${dosagem.trim()}
      ${unidade.trim()}`);

    const novoRemedio = {
      id: Date.now().toString(),
      nome: nomeRemedio.trim(),
      unidade: unidade.trim(),
      dosagem: dosagem.trim(),
      foto: imagemParaSalvar, 
      notificacaoId: notificacaoId,
      dataAlerta: dataNotificacao.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })
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
    setDataNotificacao(new Date());

    setTimeout(() => {
      setModalSucessoVisible(false);
    }, 2000);
  }

  const handleDeletarRemedio = async (item) => {
    if (item.notificacaoId) {
      try {
        await Notifications.cancelScheduledNotificationAsync(item.notificacaoId);
      } catch (error) {
        console.log("Erro ao cancelar notificação:", error);
      }
    }
    const listaFiltrada = lista.filter(i => i.id !== item.id);
    setLista(listaFiltrada);
    await salvarDados(listaFiltrada);
  };

  

 
  const abrirDatePicker = () => {
    setPickerMode("date");
    if (Platform.OS === "ios") {
      setModalPickerVisible(true);
    }
  };


  const onChangeDateAndroid = (event, selectedDate) => {
    setPickerMode(null); 
    if (event.type === "dismissed" || !selectedDate) return;

    const atual = new Date(dataNotificacao);
    atual.setFullYear(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    setDataNotificacao(atual);


    setPickerMode("time");
  };

  const onChangeTimeAndroid = (event, selectedTime) => {
    setPickerMode(null); 
    if (event.type === "dismissed" || !selectedTime) return;

    const atual = new Date(dataNotificacao);
    atual.setHours(selectedTime.getHours(), selectedTime.getMinutes(), 0);
    setDataNotificacao(atual);
  };

  const onChangeIOS = (event, selectedValue) => {
    if (!selectedValue) return;

    if (pickerMode === "date") {
      const atual = new Date(dataNotificacao);
      atual.setFullYear(selectedValue.getFullYear(), selectedValue.getMonth(), selectedValue.getDate());
      setDataNotificacao(atual);
    } else {
      const atual = new Date(dataNotificacao);
      atual.setHours(selectedValue.getHours(), selectedValue.getMinutes(), 0);
      setDataNotificacao(atual);
    }
  };

  
  const handleIOSPickerNext = () => {
    if (pickerMode === "date") {
      setPickerMode("time"); 
    } else {
      setModalPickerVisible(false);
      setPickerMode(null);
    }
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

      
      <View style={styles.inputArea}>
        <Pressable 
          style={[styles.input, { justifyContent: 'center' }]} 
          onPress={abrirDatePicker}
        >
          <Text style={{ color: '#333' }}>
            🔔 Alerta: {dataNotificacao.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })}
          </Text>
        </Pressable>
      </View>

     
      {Platform.OS === "android" && pickerMode === "date" && (
        <DateTimePicker
          value={dataNotificacao}
          mode="date"
          display="default"
          minimumDate={new Date()}
          onChange={onChangeDateAndroid}
        />
      )}
      {Platform.OS === "android" && pickerMode === "time" && (
        <DateTimePicker
          value={dataNotificacao}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChangeTimeAndroid}
        />
      )}

  
      {Platform.OS === "ios" && (
        <Modal
          transparent={true}
          visible={modalPickerVisible}
          animationType="slide"
          onRequestClose={() => { setModalPickerVisible(false); setPickerMode(null); }}
        >
          <View style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}>
            <View style={{
              backgroundColor: '#fff',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingBottom: 30,
            }}>
              {/* Cabeçalho do modal */}
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingVertical: 14,
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
              }}>
                <Pressable onPress={() => { setModalPickerVisible(false); setPickerMode(null); }}>
                  <Text style={{ color: '#D9534F', fontSize: 16 }}>Cancelar</Text>
                </Pressable>

                <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#333' }}>
                  {pickerMode === "date" ? "Selecionar Data" : "Selecionar Hora"}
                </Text>

                <Pressable onPress={handleIOSPickerNext}>
                  <Text style={{ color: '#185FA5', fontSize: 16, fontWeight: 'bold' }}>
                    {pickerMode === "date" ? "Próximo" : "Confirmar"}
                  </Text>
                </Pressable>
              </View>

              {/* O picker em si */}
              <DateTimePicker
                value={dataNotificacao}
                mode={pickerMode === "date" ? "date" : "time"}
                display="spinner"
                is24Hour={true}
                minimumDate={pickerMode === "date" ? new Date() : undefined}
                onChange={onChangeIOS}
                style={{ height: 200 }}
                locale="pt-BR"
              />
            </View>
          </View>
        </Modal>
      )}

      <View style={styles.viewBotao}>
        <Pressable onPress={handlePreVisualizarRemedio} style={styles.botao}>
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </Pressable>
      </View>

    
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
            <Image source={item.foto ? { uri: item.foto } : require("../../../assets/remedioFoto2.png")} style={styles.cardRemedioImage} />
            <View style={styles.cardRemedioInfo}>
              <Text style={styles.cardRemedioNome}>{item.nome}</Text>
              <Text style={styles.cardRemedioDetalhes}>Dosagem: {item.dosagem} | Unid: {item.unidade}</Text>
              {item.dataAlerta && (
                <Text style={[styles.cardRemedioDetalhes, { color: '#185FA5', fontWeight: 'bold' }]}>
                  ⏰ {item.dataAlerta}
                </Text>
              )}
            </View>
            <Pressable onPress={() => handleDeletarRemedio(item)} style={styles.cardRemedioBtnDelete}>
              <Feather name="trash-2" size={20} color="#D9534F" />
            </Pressable>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}