import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "./style";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import axios from "axios";
import * as FileSystem from 'expo-file-system';

export default function Cadastro() {
  const navigation = useNavigation();

  // Estados dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [imagem, setImagem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
  };

  const escolherGaleria = async () => {
    setModalVisible(false);
    const permissoes = await solicitarPermissoes();
    if (!permissoes) return;

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
  };

  const handleCadastro = async () => {
  if (!nome || !email || !senha || !altura || !peso) {
    Alert.alert("Erro", "Por favor, preencha todos os campos!");
    return;
  }

  if (senha !== confirmarSenha) {
    Alert.alert("Erro", "As senhas não coincidem!");
    return;
  }

  setLoading(true);

  try {
    let fotoBase64 = null;

    if (imagem) {
      const base64 = await FileSystem.readAsStringAsync(imagem, {
        encoding: FileSystem.EncodingType.Base64,
      });
      fotoBase64 = `data:image/jpeg;base64,${base64}`;
    }

    const response = await axios.post("http://localhost:8000/api/cadastro", {
      name:     nome,
      email:    email,
      password: senha,
      altura:   altura,
      peso:     peso,
      foto:     fotoBase64, // null se não selecionou foto
    });

    Alert.alert("Sucesso", "Usuário cadastrado com sucesso!", [
      { text: "OK", onPress: () => navigation.navigate("Login") },
    ]);
  } catch (error) {
    const erroMsg = error.response?.data?.error || "Erro ao conectar ao servidor.";
    Alert.alert("Erro", erroMsg);
  } finally {
    setLoading(false);
  }
};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.welcomeText}>Bem vindo ao Cuida Fácil!</Text>

            {/* Container do Avatar */}
            <View style={{ marginVertical: 20 }}>
              <Pressable onPress={() => setModalVisible(true)} style={styles.avatarContainer}>
                <Image
                  source={imagem ? { uri: imagem } : require("../../../assets/iconePerfil.png")}
                  style={styles.imagem}
                />
                <View style={styles.cameraIconContainer}>
                  <Entypo name="camera" size={24} color="#FFF" />
                </View>
              </Pressable>

              {/* Modal de Escolha */}
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
                    <Text style={styles.modalTitle}>Foto de perfil</Text>
                    <Text style={styles.modalSubtitle}>Escolha como deseja adicionar sua foto</Text>

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

            {/* Inputs */}
            <View style={styles.inputArea}>
              <MaterialIcons name="person" size={20} color="#333" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
              />
            </View>

            <View style={styles.inputArea}>
              <MaterialIcons name="email" size={20} color="#333" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputArea}>
              <MaterialIcons name="height" size={20} color="#333" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Altura (ex: 1.75)"
                value={altura}
                onChangeText={setAltura}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputArea}>
              <MaterialIcons name="fitness-center" size={20} color="#333" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Peso (ex: 70.5)"
                value={peso}
                onChangeText={setPeso}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputArea}>
              <MaterialIcons name="lock" size={20} color="#333" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
              />
            </View>

            <View style={styles.inputArea}>
              <MaterialIcons name="lock" size={20} color="#333" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Confirme a Senha"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry
              />
            </View>

            <Text style={styles.footerText}>
              Já tem uma conta? Faça seu{" "}
              <Text style={styles.linkText} onPress={() => navigation.navigate("Login")}>
                Login
              </Text>.
            </Text>

            <Pressable
              onPress={handleCadastro}
              style={[styles.button, loading && { opacity: 0.7 }]}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Text style={styles.buttonText}>Cadastrar</Text>
              )}
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}