import React, { useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import styles from "./style";

export default function Calorias() {
  const navigation = useNavigation();
  // Nss chave pix
  const API_KEY = "j6FWvN6Uunelv5Ugaa8vB3WaIZmx7nbxG0GUkgVQ";

  const [fruta, setFruta] = useState("");
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const buscarFruta = async () => {
    if (!fruta.trim()) {
      Alert.alert("Aviso", "Digite o nome de um alimento em inglês.");
      return;
    }

    setLoading(true);
    setErro("");
    setDados(null);

    try {
      // 1. Busca inicial para pegar o FDCID
      const searchUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(
        fruta
      )}&api_key=${API_KEY}`;
      const searchRes = await axios.get(searchUrl);

      if (!searchRes.data.foods || searchRes.data.foods.length === 0) {
        setErro("Alimento não encontrado (tente em inglês).");
        return;
      }

      const fdcId = searchRes.data.foods[0].fdcId;

      // 2. Busca detalhada
      const detailUrl = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${API_KEY}`;
      const response = await axios.get(detailUrl);
      const alimento = response.data;

      const extrairNutriente = (label) => {
        const n = alimento.foodNutrients.find((item) =>
          item.nutrient.name.toLowerCase().includes(label.toLowerCase())
        );
        return n ? `${n.amount} ${n.nutrient.unitName}` : "N/A";
      };
      //Nss nutrientes da frutas
      setDados({
        nome: alimento.description,
        calorias: extrairNutriente("Energy"),
        proteinas: extrairNutriente("Protein"),
        carboidratos: extrairNutriente("Carbohydrate"),
        fibras: extrairNutriente("Fiber"),
        gorduras: extrairNutriente("Total lipid"),
        calcio: extrairNutriente("Calcium"),
        vitaminaC: extrairNutriente("Vitamin C"),
      });
    } catch (error) {
      // DEBUG DETALHADO segundo o lucas p:
      if (error.response) {
        console.log("Erro da API:", error.response.status);
        setErro(`Erro ${error.response.status}: Verifique sua chave API.`);
      } else if (error.request) {
        // A requisição foi feita mas não houve resposta (Rede/DNS)
        console.log("Erro de Rede:", error.request);
        setErro("Erro de conexão: Verifique sua internet.");
      } else {
        setErro("Erro inesperado ao buscar.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      {/*HEADER*/}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require("../../../assets/iconDieta.png")}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <Text style={styles.headerText}>Dietas</Text>
        </View>
        <Pressable
          style={styles.btnLogout}
          onPress={() => navigation.navigate("Home")}
        >
          <Feather name="log-out" size={22} color="white" />
        </Pressable>
      </View>

      {/*aQUI COMECA  A BUSCA DOS NUTRIENTES */}

      <View style={{ padding: 40, paddingTop: 80 }}>
        <TextInput
          style={styles.input}
          placeholder="Ex: Apple, Banana, Rice..."
          value={fruta}
          onChangeText={setFruta}
        />

        <Pressable style={styles.botao} onPress={buscarFruta}>
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.botaoTexto}>Buscar Nutrientes</Text>
          )}
        </Pressable>

        {erro ? <Text style={styles.erro}>{erro}</Text> : null}

        {dados && (
          //exibição
          <View style={styles.card}>
            <Text style={styles.nome}>{dados.nome}</Text>
            <View style={styles.divider} />
            <Text style={styles.info}>🔥 Calorias: {dados.calorias}</Text>
            <Text style={styles.info}>💪 Proteínas: {dados.proteinas}</Text>
            <Text style={styles.info}>🍞 Carbos: {dados.carboidratos}</Text>
            <Text style={styles.info}>🥑 Gorduras: {dados.gorduras}</Text>
            <Text style={styles.info}>🍊 Vitamina C: {dados.vitaminaC}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
