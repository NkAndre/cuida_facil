  import React, { useState } from "react";
  import {
    Text,
    View,
    Image,
    TextInput,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    Alert,
    ActivityIndicator,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import { StatusBar } from "expo-status-bar";
  import styles from "./style";
  import { MaterialIcons } from "@expo/vector-icons";
  import axios from "axios";

  export default function Login() {
    const navigation = useNavigation();

    //state ne pai
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);

    

    const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: email,
        password: senha,
      });

      // 1. Desestruturamos tudo o que o Laravel mandou
      const { token, user } = response.data;

      // 2. Se quiser ver o token no console para testar:
      console.log("Token:", token);
      localStorage.setItem('userToken', token);

      console.log("Token salvo no navegador!");

      // 3. Usamos o 'user.nome' que veio do Laravel
      Alert.alert("Bem-vindo", `Olá, ${user.nome}!`);
      
      navigation.navigate("Home");

    } catch (error) {
      console.log(error);
      const msgErro = error.response?.data?.error || "E-mail ou senha incorretos.";
      Alert.alert("Erro", msgErro);
    } finally {
      setLoading(false);
    }
  };

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <StatusBar style="dark" />

        <View style={styles.content}>
          <Text style={styles.welcomeText}>Bem vindo ao Cuida Fácil!</Text>
          <Text style={styles.instructionText}>Faça seu login.</Text>

          <Image
            source={require("../../../assets/iconeCuida.png")}
            style={styles.illustration}
            resizeMode="contain"
          />

          <View style={styles.inputArea}>
            <MaterialIcons
              name="email"
              size={20}
              color="#333"
              style={styles.icon}
            />
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
            <MaterialIcons
              name="lock"
              size={20}
              color="#333"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
          </View>

          <Text style={styles.footerText}>
            Não tem uma conta? Faça seu{" "}
            <Text
              style={styles.linkText}
              onPress={() => navigation.navigate("Cadastro")}
            >
              Cadastro
            </Text>
            .
          </Text>

          <Pressable
            onPress={handleLogin}
            style={[styles.button, loading && { opacity: 0.7 }]}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Entrar</Text>
            )}
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    );
  }
