import React from "react";
import { Text, View, ScrollView, Pressable, Image } from "react-native"; // Adicionado ScrollView
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "./style";
import Feather from "@expo/vector-icons/Feather";

export default function Ajuda(){
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require("../../../assets/configIcone.png")}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <Text style={styles.headerText}>Ajuda</Text>
        </View>
        <Pressable
          style={styles.btnLogout}
          onPress={() => navigation.navigate("Menu")}
        >
          <Feather name="log-out" size={22} color="white" />
        </Pressable>
      </View>

      {/* CONTEÚDO DE AJUDA */}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.textOption}>
             Aqui você pode gerenciar sua saúde de forma simples rápida. Conheça as nossas funções:
        </Text>

        <View style={styles.helpItem}>
          <Text style={styles.topicTitle}>🩸 Sangue</Text>
          <Text style={styles.topicDescription}>Guarde seus exames de sangue e acompanhe a evolução dos seus indicadores de saúde.</Text>
        </View>

        <View style={styles.helpItem}>
          <Text style={styles.topicTitle}>💧 Água</Text>
          <Text style={styles.topicDescription}>Monitore o seu consumo diário de água e receba lembretes para se manter hidratado.</Text>
        </View>

        <View style={styles.helpItem}>
          <Text style={styles.topicTitle}>💊 Remédios</Text>
          <Text style={styles.topicDescription}>Cadastre seus medicamentos, horários e dosagens para nunca esquecer de tomar.</Text>
        </View>

        <View style={styles.helpItem}>
          <Text style={styles.topicTitle}>🦠 Alergias</Text>
          <Text style={styles.topicDescription}>Mantenha uma lista atualizada de suas alergias a alimentos, medicamentos ou substâncias.</Text>
        </View>

        <View style={styles.helpItem}>
          <Text style={styles.topicTitle}>🩸 Glicemia</Text>
          <Text style={styles.topicDescription}>Registre seus níveis de açúcar no sangue e acompanhe gráficos de controle diário.</Text>
        </View>

        <View style={styles.helpItem}>
          <Text style={styles.topicTitle}>🩺 Pressão</Text>
          <Text style={styles.topicDescription}>Acompanhe a sua pressão arterial anotando as medições de sístole e diástole.</Text>
        </View>

        <View style={styles.helpItem}>
          <Text style={styles.topicTitle}>🏃 IMC</Text>
          <Text style={styles.topicDescription}>Calcule o seu Índice de Massa Corporal e veja se o seu peso está ideal para sua altura.</Text>
        </View>

        <View style={styles.helpItem}>
          <Text style={styles.topicTitle}>💉 Vacinas</Text>
          <Text style={styles.topicDescription}>Sua carteira de vacinação digital. Registre as doses tomadas e as próximas datas.</Text>
        </View>

        <View style={styles.helpItem}>
          <Text style={styles.topicTitle}>🧘 Meditação</Text>
          <Text style={styles.topicDescription}>Encontre um momento de paz com exercícios guiados de respiração e relaxamento.</Text>
        </View>

        <View style={styles.helpItem}>
          <Text style={styles.topicTitle}>🥗 Dieta</Text>
          <Text style={styles.topicDescription}>Organize suas refeições diárias e planeje uma alimentação balanceada.</Text>
        </View>

        <View style={styles.helpItem}>
          <Text style={styles.topicTitle}>💡 Dicas</Text>
          <Text style={styles.topicDescription}>Acesse artigos rápidos e informações confiáveis para melhorar sua qualidade de vida.</Text>
        </View>

        <View style={styles.helpItem}>
          <Text style={styles.topicTitle}>🚨 Emergência</Text>
          <Text style={styles.topicDescription}>Acesso rápido a contatos de emergência e informações médicas vitais para casos urgentes.</Text>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}