import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  Alert,
  Platform,
  Modal,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "./style";
import * as Notifications from "expo-notifications";
import DateTimePicker from "@react-native-community/datetimepicker";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const COPO_ML = 250;

export default function Agua() {
  const navigation = useNavigation();
  const [registros, setRegistros] = useState([]);
  const [metaMl] = useState(2500);
  const [dataAgendada, setDataAgendada] = useState(new Date());
  const [pickerMode, setPickerMode] = useState(null);
  const [modalPickerVisible, setModalPickerVisible] = useState(false);

  const [modalCopoVisible, setModalCopoVisible] = useState(false);

  useEffect(() => {
    const configurarNotificacoes = async () => {
      try {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Atenção", "Você não deu permissão para notificações.");
          return;
        }

        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      } catch (error) {
        console.log("Erro no setup:", error);
      }
    };

    configurarNotificacoes();
  }, []);

  const agendaDataHora = async (data) => {
    if (data <= new Date()) {
      Alert.alert("Aviso", "A data/hora selecionada já passou.");
      return;
    }
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Hora de beber água! 💧",
          body: "Não esqueça de se hidratar!",
          sound: true,
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DATE,
          date: data.getTime()
        },
      });
      Alert.alert("Sucesso", `Lembrete agendado para ${data.toLocaleString("pt-BR")}`);
    } catch (error) {
      Alert.alert("Erro", "Falha ao agendar.");
    }
  };

  const abrirDatePicker = () => {
    setPickerMode("date");
    if (Platform.OS === "ios") setModalPickerVisible(true);
  };

  const onChangeDateAndroid = (event, selectedDate) => {
    setPickerMode(null);
    if (event.type === "dismissed" || !selectedDate) return;

    const atual = new Date(dataAgendada);
    atual.setFullYear(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    setDataAgendada(atual);
    setPickerMode("time");
  };

  const onChangeTimeAndroid = (event, selectedTime) => {
    setPickerMode(null);
    if (event.type === "dismissed" || !selectedTime) return;

    const atual = new Date(dataAgendada);
    atual.setHours(selectedTime.getHours(), selectedTime.getMinutes(), 0);
    setDataAgendada(atual);
    agendaDataHora(atual);
  };

  const onChangeIOS = (event, selectedValue) => {
    if (!selectedValue) return;
    const atual = new Date(dataAgendada);
    if (pickerMode === "date") {
      atual.setFullYear(selectedValue.getFullYear(), selectedValue.getMonth(), selectedValue.getDate());
    } else {
      atual.setHours(selectedValue.getHours(), selectedValue.getMinutes(), 0);
    }
    setDataAgendada(atual);
  };

  const handleIOSPickerNext = () => {
    if (pickerMode === "date") {
      setPickerMode("time");
    } else {
      setModalPickerVisible(false);
      setPickerMode(null);
      agendaDataHora(dataAgendada);
    }
  };

  const totalBebido = registros.reduce((acc, item) => acc + item.ml, 0);
  const progressoPct = Math.min((totalBebido / metaMl) * 100, 100);

  const adicionarCopo = (mlSelecionado) => {
    const novoRegistro = {
      id: Math.random().toString(),
      ml: mlSelecionado,
      hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    };
    setRegistros((prev) => [novoRegistro, ...prev]);
    setModalCopoVisible(false); // Fecha o modal após adicionar
  };

  const removerRegistro = (id) => {
    setRegistros((prev) => prev.filter((item) => item.id !== id));
  };

  const limparTudo = () => {
    Alert.alert("Limpar registros", "Deseja apagar todos os registros de hoje?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Limpar", style: "destructive", onPress: () => setRegistros([]) },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cardAgua}>
      <Feather name="droplet" size={20} color="#4A90D9" style={{ marginRight: 10 }} />
      <View style={{ flex: 1 }}>
        <Text style={styles.textoCard}>{item.ml} ml</Text>
        <Text style={styles.textoHora}>{item.hora}</Text>
      </View>
      <Pressable onPress={() => removerRegistro(item.id)}>
        <Feather name="trash-2" size={22} color="#cc0000" />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <FlatList
        data={registros}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listaConteudo}
        ListEmptyComponent={
          <Text style={styles.textoVazio}>Nenhum registro ainda. Adicione um copo!</Text>
        }
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Image
                  source={require("../../../assets/iconAgua.png")}
                  style={styles.headerLogo}
                  resizeMode="contain"
                />
                <Text style={styles.headerText}>Água</Text>
              </View>
              <Pressable style={styles.btnLogout} onPress={() => navigation.navigate("Home")}>
                <Feather name="log-out" size={22} color="white" />
              </Pressable>
            </View>

            <View style={styles.viewCopo}>
              <Image
                source={require("../../../assets/copo.png")}
                style={styles.copo}
                resizeMode="contain"
              />
            </View>

            <View style={styles.resumoArea}>
              <Text style={styles.totalTexto}>{totalBebido} ml</Text>
              <Text style={styles.metaTexto}>
                meta: {metaMl} ml ({progressoPct.toFixed(0)}%)
              </Text>
              <View style={styles.barraFundo}>
                <View
                  style={[
                    styles.barraProgresso,
                    { width: `${progressoPct}%`, backgroundColor: progressoPct >= 100 ? "#27ae60" : "#4A90D9" },
                  ]}
                />
              </View>
              {progressoPct >= 100 && (
                <Text style={styles.metaAtingida}>Meta atingida! 🎉</Text>
              )}
            </View>

            <View style={styles.viewBotao}>
              {/* Antes era onPress={adicionarCopo} */}
              <Pressable style={styles.botao} onPress={() => setModalCopoVisible(true)}>
                <Text style={styles.botaoTexto}>+ Adicionar Água</Text>
              </Pressable>
              <Pressable
                style={[styles.botao, { marginTop: 10, backgroundColor: "#f39c12" }]}
                onPress={abrirDatePicker}
              >


                {/* Modal de seleção de quantidade de água */}
                <Modal transparent visible={modalCopoVisible} animationType="fade">
                  <View style={styles.modalContainer}>
                    <View style={styles.modalConteudo}>
                      <Text style={styles.modalTitulo}>
                        Selecione o tamanho do copo
                      </Text>

                      {[150, 250, 350, 500].map((quantidade) => (
                        <Pressable
                          key={quantidade}
                          style={styles.botaoOpcao}
                          onPress={() => adicionarCopo(quantidade)}
                        >
                          <Image
                            source={require("../../../assets/copo.png")}
                            style={styles.copoIcone}
                            resizeMode="contain"
                          />
                          <Text style={styles.botaoOpcaoTexto}>{quantidade} ml</Text>
                        </Pressable>
                      ))}

                      <Pressable
                        style={styles.botaoCancelar}
                        onPress={() => setModalCopoVisible(false)}
                      >
                        <Text style={styles.textoCancelar}>Cancelar</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
                <Text style={styles.botaoTexto}>Agendar Lembrete</Text>
              </Pressable>
            </View>

            {registros.length > 0 && (
              <View style={styles.cabecalhoLista}>
                <Text style={styles.tituloLista}>Registros de hoje:</Text>
                <Pressable onPress={limparTudo}>
                  <Text style={styles.limparTexto}>Limpar tudo</Text>
                </Pressable>
              </View>
            )}
          </>
        }
      />

      {/* Pickers Android */}
      {Platform.OS === "android" && pickerMode === "date" && (
        <DateTimePicker
          value={dataAgendada}
          mode="date"
          display="default"
          minimumDate={new Date()}
          onChange={onChangeDateAndroid}
        />
      )}
      {Platform.OS === "android" && pickerMode === "time" && (
        <DateTimePicker
          value={dataAgendada}
          mode="time"
          is24Hour
          display="default"
          onChange={onChangeTimeAndroid}
        />
      )}

      {/* Modal picker iOS */}
      {Platform.OS === "ios" && (
        <Modal transparent visible={modalPickerVisible} animationType="slide">
          <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.4)" }}>
            <View style={{ backgroundColor: "#fff", borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingBottom: 30 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 16, borderBottomWidth: 1, borderBottomColor: "#eee" }}>
                <Pressable onPress={() => { setModalPickerVisible(false); setPickerMode(null); }}>
                  <Text style={{ color: "#D9534F", fontSize: 16 }}>Cancelar</Text>
                </Pressable>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  {pickerMode === "date" ? "Selecionar Data" : "Selecionar Hora"}
                </Text>
                <Pressable onPress={handleIOSPickerNext}>
                  <Text style={{ color: "#185FA5", fontSize: 16, fontWeight: "bold" }}>
                    {pickerMode === "date" ? "Próximo" : "Confirmar"}
                  </Text>
                </Pressable>
              </View>
              <DateTimePicker
                value={dataAgendada}
                mode={pickerMode === "date" ? "date" : "time"}
                display="spinner"
                is24Hour
                minimumDate={pickerMode === "date" ? new Date() : undefined}
                onChange={onChangeIOS}
                style={{ height: 200 }}
                locale="pt-BR"
              />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}