import React from "react";
import { Text, View, ScrollView, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "./style";
import Feather from "@expo/vector-icons/Feather";
import { useTranslation } from "react-i18next";

export default function Privacidade(){
  const navigation = useNavigation();
  const { t } = useTranslation(); // Só precisamos do 't' aqui, o 'i18n' pode deixar guardado se não for usar

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
          {/* MODIFICADO: Título traduzido */}
          <Text style={styles.headerText}>{t("privacidade.titulo")}</Text>
        </View>
        <Pressable
          style={styles.btnLogout}
          onPress={() => navigation.navigate("Menu")}
        >
          <Feather name="log-out" size={22} color="white" />
        </Pressable>
      </View>
      {/*fim do hearder*/}

      {/* CONTEÚDO DE PRIVACIDADE E SEGURANÇA */}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* MODIFICADO: Texto de boas-vindas */}
        <Text style={styles.welcomeText}>
          {t("privacidade.boasVindas")}
        </Text>

        <View style={styles.helpItem}>
          {/* MODIFICADO: Título e Descrição de Dados */}
          <Text style={styles.topicTitle}>{t("privacidade.dadosTitulo")}</Text>
          <Text style={styles.topicDescription}>
            {t("privacidade.dadosDesc")}
          </Text>
        </View>

        <View style={styles.helpItem}>
          {/* MODIFICADO: Título e Descrição de Controle */}
          <Text style={styles.topicTitle}>{t("privacidade.controleTitulo")}</Text>
          <Text style={styles.topicDescription}>
            {t("privacidade.controleDesc")}
          </Text>
        </View>

        <View style={styles.helpItem}>
          {/* MODIFICADO: Título e Descrição de Permissões */}
          <Text style={styles.topicTitle}>{t("privacidade.permissoesTitulo")}</Text>
          <Text style={styles.topicDescription}>
            {t("privacidade.permissoesDesc")}
          </Text>
        </View>

        <View style={styles.helpItem}>
          {/* MODIFICADO: Título e Descrição de Exclusão */}
          <Text style={styles.topicTitle}>{t("privacidade.exclusaoTitulo")}</Text>
          <Text style={styles.topicDescription}>
            {t("privacidade.exclusaoDesc")}
          </Text>
        </View>

        <View style={styles.helpItem}>
          {/* MODIFICADO: Título e Descrição de Termos */}
          <Text style={styles.topicTitle}>{t("privacidade.termosTitulo")}</Text>
          <Text style={styles.topicDescription}>
            {t("privacidade.termosDesc")}
          </Text>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}