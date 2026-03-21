import React, { useState } from "react";

import { Text, View, Image, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Cadastro(){
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
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
        <Text style={styles.headerText}>Cadastro</Text>
      </View>


      {/*txts de entrada*/}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bem vindo ao Cuida Fácil!</Text>
        <Text style={styles.instructionText}>Faça seu .</Text>

        {/* Imagem Central (Logo do Aplicativo) */}
        <Image
          source={require('../../../assets/iconeCuida.png')}
          style={styles.illustration}
          resizeMode="contain"
        />

        {/* Campo Nome */}
        <View style={styles.inputArea}>
        <MaterialIcons name="person" size={20} color="#333" style={styles.icon} />

          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            autoCapitalize="none"
          />
        </View>

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

        {/* Campo Confirme a Senha */}
                <View style={styles.inputArea}>
          <MaterialIcons name="lock" size={20} color="#333" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confime a Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
        </View>

        <Text style={styles.footerText}>
          Já tem uma conta? Faça seu{' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
            Login
          </Text>.
        </Text>

        {/* Botãonnn Entrar */}
        <Pressable onPress={() => navigation.navigate('Login')}
          style={styles.button} >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
    <View style={styles.container}> 
        <Text>Hello world</Text>
        <StatusBar style="auto"/>
    </View>
  );
}