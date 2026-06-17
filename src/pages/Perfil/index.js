import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Alert, Pressable, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { FontAwesome5, Feather } from '@expo/vector-icons';
import styles from "./style";

export default function Perfil() {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- ESTADOS PARA EDIÇÃO ---
  const [editando, setEditando] = useState(false);
  const [nome, setNome] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    carregarPerfil();
  }, []);

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
      setNome(response.data.name);
      setAltura(response.data.altura ? String(response.data.altura) : "");
      setPeso(response.data.peso ? String(response.data.peso) : "");
    } catch (error) {
      console.log("Erro ao carregar perfil:", error);
      Alert.alert("Erro", "Sessão expirada. Faça login novamente.");
      navigation.navigate("Login");
    } finally {
      setLoading(false);
    }
  };

  const salvarAlteracoes = async () => {
    if (!nome.trim()) {
      Alert.alert("Atenção", "O nome não pode ficar em branco.");
      return;
    }

    setSalvando(true);
    try {
      const token = localStorage.getItem('userToken');

      const response = await axios.put("http://localhost:8000/api/perfil/editar", {
        name: nome,
        altura: altura ? parseFloat(altura.replace(",", ".")) : null,
        peso: peso ? parseFloat(peso.replace(",", ".")) : null
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      Alert.alert("Sucesso", "Perfil atualizado!");
      setUsuario(response.data.user);
      setEditando(false);
    } catch (error) {
      console.log("Erro ao atualizar perfil:", error);
      Alert.alert("Erro", "Não foi possível salvar as alterações.");
    } finally {
      setSalvando(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* --- CABEÇALHO --- */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/coracaoIcone.png')}
          style={styles.logoHeader}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Perfil</Text>

        <View style={styles.rightIcons}>
          <Pressable
            onPress={() => navigation.navigate('Perfil')}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, styles.iconSpace]}
          >
            <FontAwesome5 name="user-circle" size={24} color="white" />
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Home')}>
            <Feather name="log-out" size={24} color="white" />
          </Pressable>
        </View>
      </View>

      {/* --- CONTEÚDO --- */}
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator size="large" color="#4A90E2" />
        ) : (
          <View style={styles.card}>
            
            <View style={styles.cardHeaderArea}>
              <Text style={styles.title}>{editando ? "Editando Perfil" : "Meu Perfil"}</Text>
              
              {editando && (
                <Pressable onPress={() => setEditando(false)}>
                  <Feather name="x" size={22} color="red" />
                </Pressable>
              )}
            </View>

            {/* CAMPO: NOME */}
            <View style={styles.infoArea}>
              <Text style={styles.label}>Nome:</Text>
              {editando ? (
                <TextInput 
                  style={styles.valueInput}
                  value={nome}
                  onChangeText={setNome}
                />
              ) : (
                <Text style={styles.value}>{usuario?.name || "Não informado"}</Text>
              )}
            </View>

            {/* CAMPO: E-MAIL */}
            <View style={styles.infoArea}>
              <Text style={styles.label}>E-mail:</Text>
              <Text style={[styles.value, editando && styles.valueDesabilitado]}>
                {usuario?.email || "Não informado"}
              </Text>
            </View>

            {/* LINHA COM ALTURA E PESO */}
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.label}>Altura (m):</Text>
                {editando ? (
                  <TextInput 
                    style={styles.valueInput}
                    value={altura}
                    keyboardType="numeric"
                    onChangeText={setAltura}
                    placeholder="Ex: 1.75"
                  />
                ) : (
                  <Text style={styles.value}>{usuario?.altura || "0.00"} m</Text>
                )}
              </View>

              <View style={[styles.col, styles.colDataSpace]}>
                <Text style={styles.label}>Peso (kg):</Text>
                {editando ? (
                  <TextInput 
                    style={styles.valueInput}
                    value={peso}
                    keyboardType="numeric"
                    onChangeText={setPeso}
                    placeholder="Ex: 70"
                  />
                ) : (
                  <Text style={styles.value}>{usuario?.peso || "0"} kg</Text>
                )}
              </View>
            </View>

            {/* --- BOTÃO PRINCIPAL DINÂMICO --- */}
            <Pressable
              style={[styles.buttonSair, editando && styles.buttonSalvarVerde]}
              onPress={editando ? salvarAlteracoes : () => setEditando(true)}
              disabled={salvando}
            >
              <View style={styles.buttonContent}>
                <Feather 
                  name={salvando ? "loader" : editando ? "save" : "edit-3"} 
                  size={18} 
                  color="white" 
                  style={styles.buttonIconSpace}
                />
                <Text style={styles.buttonText}>
                  {salvando ? "Salvando..." : editando ? "Salvar Alterações" : "Editar Perfil"}
                </Text>
              </View>
            </Pressable>

          </View>
        )}
      </View>
    </View>
  );
}