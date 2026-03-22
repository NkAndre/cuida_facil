import React, { useState } from "react";

import { Text, View, Image, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

import { MaterialIcons } from '@expo/vector-icons';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style="dark" />

      {/* Cabeçalho Azul com Logo */}
      <View style={styles.header}>

        <Image
          source={require('../../../assets/coracaoIcone.png')}
          style={{ width: 50, height: 50 }} // Tamanho fixo para o topuuuu
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Login</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bem vindo ao Cuida Fácil!</Text>
        <Text style={styles.instructionText}>Faça seu login.</Text>

        {/* Imagem Central (Ilustração do Médico) */}
        <Image
          source={require('../../../assets/iconeCuida.png')}
          style={styles.illustration}
          resizeMode="contain"
        />

        {/* Campo E-mail */}
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

        {/* Campo Senha */}
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

        <Text style={styles.footerText}>
          Não tem uma conta? Faça seu {' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('Cadastro')}>
            Cadastro
          </Text>.
        </Text>

        {/* Botãonnn Entrar */}
        <Pressable onPress={() => navigation.navigate('Home')}
          style={styles.button} >
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}