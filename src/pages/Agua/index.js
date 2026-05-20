import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  Alert,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "./style";
import * as Notifications from 'expo-notifications';

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


  useEffect(() => {
    const configurarNotificacoes = async () => {
      try {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert("Atenção", "Você não deu permissão para notificações.");
          return;
        }

        
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });

        console.log("Canal de notificações configurado!");
      } catch (error) {
        console.log("Erro no setup:", error);
      }
    };

    configurarNotificacoes();
  }, []);

  
  const agendaDataHora = async () => {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Hora de beber água! 💧",
          body: "Seu lembrete de saúde de 5 segundos.",
          sound: true,
        },
        trigger: { 
          type: "timeInterval",
          seconds: 5, 
          repeats: false,
        },
      });

      Alert.alert("Sucesso", "Lembrete agendado para daqui a 5 segundos!");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Falha ao agendar.");
    }
  };


  const totalBebido = registros.reduce((acc, item) => acc + item.ml, 0);
  const progressoPct = Math.min((totalBebido / metaMl) * 100, 100);

  const adicionarCopo = () => {
    const novoRegistro = {
      id: Math.random().toString(),
      ml: COPO_ML,
      hora: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setRegistros((prev) => [novoRegistro, ...prev]);
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
          <Text style={styles.textoVazio}>
            Nenhum registro ainda. Adicione um copo!
          </Text>
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
                    {
                      width: `${progressoPct}%`,
                      backgroundColor: progressoPct >= 100 ? "#27ae60" : "#4A90D9",
                    },
                  ]}
                />
              </View>

              {progressoPct >= 100 && (
                <Text style={styles.metaAtingida}>Meta atingida! 🎉</Text>
              )}
            </View>

            <View style={styles.viewBotao}>
              <Pressable style={styles.botao} onPress={adicionarCopo}>
                <Text style={styles.botaoTexto}>+ 1 copo (250ml)</Text>
              </Pressable>
              
              <Pressable 
                style={[styles.botao, { marginTop: 10, backgroundColor: '#f39c12' }]} 
                onPress={agendaDataHora}
              >
                <Text style={styles.botaoTexto}>Agendar Lembrete (5s)</Text>
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
    </View>
  );
}