import React, { useState } from "react";
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


export default function IMC() {
  const navigation = useNavigation();

  const [alergia, setAlergia] = useState("");
  const [nivelAlergia, setNivelAlergia] = useState("");
  const [lista, setLista] = useState([]);

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

    setLista([...lista, novaAlergia]);
    setAlergia("");
    setNivelAlergia("");
  };

  const removerAlergia = (id) => {
    setLista(lista.filter((item) => item.id !== id));
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
                  source={require("../../../assets/iconCorpo.png")}
                  style={styles.headerLogo}
                  resizeMode="contain"
                />
                <Text style={styles.headerText}>IMC</Text>
              </View>
              <Pressable
                style={styles.btnLogout}
                onPress={() => navigation.navigate("Home")}
              >
                <Feather name="log-out" size={22} color="white" />
              </Pressable>
            </View>

            {/*VALOR IMC*/}
            <View style={styles.view}>
                <Text style={styles.labelText}>O seu IMC é de:</Text>
                <Text style={styles.imcText}>0,0</Text>
            </View>
          </>
        }
      />
    </View>
  );
}