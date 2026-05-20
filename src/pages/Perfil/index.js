import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Alert, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { FontAwesome5, Feather } from '@expo/vector-icons';
import styles from "./style";

export default function Perfil() {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarPerfil = async () => {
      try {
        const token = localStorage.getItem('userToken');

        if (!token) {
          Alert.alert("Erro", "Você não está logado!");
          navigation.navigate("Login");
          return;
        }

        const response = await axios.get("http://localhost:8000/api/perfil", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUsuario(response.data);
      } catch (error) {
        console.log("Erro ao carregar perfil:", error);
        Alert.alert("Erro", "Sessão expirada. Faça login novamente.");
        navigation.navigate("Login");
      } finally {
        setLoading(false);
      }
    };

    carregarPerfil();
  }, []);

  return (
    <View style={styles.container}>
      {/* --- CABEÇALHO (Fixo no topo) --- */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/coracaoIcone.png')}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Perfil</Text>

        <View style={styles.rightIcons}>
          <Pressable
            onPress={() => navigation.navigate('Perfil')}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1, marginRight: 15 }]}
          >
            <FontAwesome5 name="user-circle" size={24} color="white" />
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Home')}>
            <Feather name="log-out" size={24} color="white" />
          </Pressable>
        </View>
      </View>
 
      
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator size="large" color="#4A90E2" />
        ) : (
          <View style={styles.card}>
            <Text style={styles.title}>Meu Perfil</Text>

            <View style={styles.infoArea}>
              <Text style={styles.label}>Nome:</Text>
              <Text style={styles.value}>{usuario?.name || "Não informado"}</Text>
            </View>

            <View style={styles.infoArea}>
              <Text style={styles.label}>E-mail:</Text>
              <Text style={styles.value}>{usuario?.email || "Não informado"}</Text>
            </View>

            <View style={styles.row}>
              <View style={styles.infoArea}>
                <Text style={styles.label}>Altura:</Text>
                <Text style={styles.value}>{usuario?.altura || "0.00"} m</Text>
              </View>
              <View style={styles.infoArea}>
                <Text style={styles.label}>Peso:</Text>
                <Text style={styles.value}>{usuario?.peso || "0"} kg</Text>
              </View>
            </View>

            <Pressable
              style={styles.buttonSair}
              onPress={() => {
                localStorage.removeItem('userToken');
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.buttonText}>Voltar para Home</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}