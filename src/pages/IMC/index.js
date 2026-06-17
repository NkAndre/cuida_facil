import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  Alert,
  Platform,
  ActivityIndicator,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "./style";



// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function IMC() {
  const navigation = useNavigation();

  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  
  useEffect(() => {
    buscarDadosAtuais();
  }, []);

  const exibirAlerta = (titulo, mensagem) => {
    if (Platform.OS === "web") {
      window.alert(`${titulo}: ${mensagem}`);
    } else {
      Alert.alert(titulo, mensagem);
    }
  };

  const buscarDadosAtuais = async () => {
    try {
      const token = localStorage.getItem('userToken'); 
  
      if (!token) {
        setErro("Usuário não autenticado.");
        setCarregando(false);
        return;
      }
  
      const urlAmbiente = Platform.OS === "web" 
        ? "http://localhost:8000/api/imc" 
        : "http://10.0.2.2:8000/api/imc";
  
      const response = await fetch(urlAmbiente, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setDados(data);
      } else {
        setErro("Não foi possível carregar os dados.");
      }
    } catch (error) {
      setErro("Erro de conexão com o servidor.");
    } finally {
      setCarregando(false);
    }
  };

  if (carregando) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#4A90D9" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <FlatList
        data={[]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={null}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={
          <View>
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

            {/* DADOS ATUAIS DO BANCO */}
            <View style={styles.formContainer}>
              <Text style={styles.secaoTitulo}>Dados do seu Perfil</Text>
              
              <Text style={styles.inputLabel}>
                Peso Atual: <Text style={{ fontWeight: "normal" }}>{dados?.peso ? `${dados.peso} kg` : "Não cadastrado"}</Text>
              </Text>
              
              <Text style={styles.inputLabel}>
                Altura Atual: <Text style={{ fontWeight: "normal" }}>{dados?.altura ? `${dados.altura} cm` : "Não cadastrada"}</Text>
              </Text>
            </View>

            {/* EXIBIÇÃO APENAS DO IMC */}
            <View style={styles.resultadoCard}>
              <Text style={styles.labelText}>O seu IMC atual é de:</Text>
              <Text style={styles.imcText}>
                {dados ? dados.imc : "0,0"}
              </Text>
              
              {dados && dados.classificacao_imc && (
                <Text style={styles.classificacao}>
                  {dados.classificacao_imc}
                </Text>
              )}

              {erro ? <Text style={{ color: "red", marginTop: 10 }}>{erro}</Text> : null}
            </View>
          </View>
        }
      />
    </View>
  );
}