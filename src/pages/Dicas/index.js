import React, { useState, useRef } from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  Animated,
  Share,
  StyleSheet,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

//array de frases e cada mapeada por categoria
const frases = [
  { texto: "Porque para Deus nada é impossível", categoria: "fé" },
  
  { texto: "Josué 1:9", categoria: "fé" },

  { texto: "Nunca desista dos seus sonhos", categoria: "motivacao" },

  { texto: "Sempre haverá uma nova chance", categoria: "motivacao" },

  { texto: "Acredite em si próprio", categoria: "motivacao" },

  { texto: "Sorrir é o melhor remédio", categoria: "engracada" },

  {
    texto: "Minha cama me chama mais do que qualquer pessoa",
    categoria: "engracada",
  },

  {
    texto: "Essa semana eu tô dando orgulho! Orgulho pra clínica psiquiátrica",
    categoria: "engracada",
  },

  {
    texto:
      "Tenho medo de perguntar pra Deus onde eu errei e Ele não parar de falar…",
    categoria: "engracada",
  },
];

// mapeando por cor 
const temasCategoria = {
  fé: "#FFD700",
  motivacao: "#ADD8E6",
  engracada: "#90EE90",
};

export default function Dicas() {
  const navigation = useNavigation();
  const [frase, setFrase] = useState(frases[0]);
  const fadeAnim = useRef(new Animated.Value(1)).current;

    // function de gerar frases
  const gerarFrase = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
        //aqui vai aleatoriamente
      const indiceAleatorio = Math.floor(Math.random() * frases.length);
      setFrase(frases[indiceAleatorio]);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    });
  };


  // aqui opcao de share
  const compartilharFrase = async () => {
    try {
      await Share.share({
        message: `Olha essa frase que vi no app: \n\n"${frase.texto}"`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: temasCategoria[frase.categoria] },
      ]}
    >
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require("../../../assets/pensar.png")}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <Text style={styles.headerText}>Dicas</Text>
        </View>
        <Pressable
          style={styles.btnLogout}
          onPress={() => navigation.navigate("Home")}
        >
          <Feather name="log-out" size={22} color="white" />
        </Pressable>
      </View>

      <View style={styles.cardMain}> 
        <Text style={styles.textTitulo}>Frase do dia</Text>

        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <Text style={styles.aspas}>"</Text>
          <Text style={styles.textoFrase}>{frase.texto}</Text>
          <Text style={[styles.aspas, { textAlign: "right" }]}>"</Text>
        </Animated.View>
      </View>

      <View style={styles.areaBotoes}>
        <Pressable style={styles.botao} onPress={gerarFrase}>
          <Text style={styles.textoBotao}>Nova Frase</Text>
        </Pressable>

        <Pressable style={styles.botaoShare} onPress={compartilharFrase}>
          <Text style={styles.textoBotaoShare}>Compartilhar Frase</Text>
        </Pressable>
      </View>
    </View>
  );
}

// DEFINIÇÃO DOS ESTILOS NO MESMO ARQUIVO
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#4A90E2",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerLogo: {
    width: 45,
    height: 45,
    marginRight: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    letterSpacing: 0.5,
  },
  cardMain:{
    justifyContent: "center",
    alignItems: "center",
    padding:60
  },

  textTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    letterSpacing: 0.5,
    alignItems: "center",
    justifyContent: "center",
    padding:25
  },
  card: {
    padding: 30,
    borderRadius: 25,
    width: "90%",
    backgroundColor: "#FFFFFF",
    elevation: 5,
  },
  aspas: {
    fontSize: 40,
    color: "#ADD8E6",
  },
  textoFrase: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  areaBotoes: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  botao: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  textoBotao: {
    fontWeight: "bold",
  },
  botaoShare: {
    marginTop: 15,
  },
  textoBotaoShare: {
    textDecorationLine: "underline",
  },
});
