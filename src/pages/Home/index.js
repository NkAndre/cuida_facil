import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
// Ícones
import Feather from "@expo/vector-icons/Feather";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// Estilos
import styles from "./style";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* --- CABEÇALHO (HEADER) --- */}
      <View style={styles.header}>
        <Image
          source={require("../../../assets/coracaoIcone.png")}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Home</Text>

        {/* Container para agrupar os botões da direita */}
        <View style={styles.rightIcons}>
          {/*Pressable de configuracao*/}
          <Pressable
            onPress={() => navigation.navigate("Menu")}
            style={({ pressed }) => [{ padding: 20 }]}
          >
            <MaterialIcons name="menu-book" size={24} color="white" />{" "}
          </Pressable>

          {/*Pressable dpra voltar pra tela de login*/}
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Feather name="log-out" size={24} color="white" />
          </Pressable>
        </View>
      </View>

      {/* --- GRID DE BOTÕES --- */}

      <View style={styles.viewBotoes}>
        {/* Sangue */}
        <View style={styles.viewBotao}>
          <Pressable onPress={() => navigation.navigate("Sangue")}>
            <Image
              source={require("../../../assets/iconSangue.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Sangue</Text>
          </Pressable>
        </View>

        {/* Água */}
        <View style={styles.viewBotao}>
          <Pressable onPress={() => navigation.navigate("Agua")}>
            <Image
              source={require("../../../assets/iconAgua.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Àgua</Text>
          </Pressable>
        </View>

        {/* Remédios */}
        <View style={styles.viewBotao}>
          <Pressable onPress={() => navigation.navigate("Remedios")}>
            <Image
              source={require("../../../assets/iconRemedio.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Remédios</Text>
          </Pressable>
        </View>

        {/* Alergias */}
        <View style={styles.viewBotao}>
          <Pressable onPress={() => navigation.navigate("Alergia")}>
            <Image
              source={require("../../../assets/iconAlergia.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Alergias</Text>
          </Pressable>
        </View>

        {/* Glicemia */}
        <View style={styles.viewBotao}>
          <Pressable onPress={() => navigation.navigate("Glicemia")}>
            <Image
              source={require("../../../assets/iconGlicemia.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Glicemia</Text>
          </Pressable>
        </View>

        {/* Pressão */}
        <View style={styles.viewBotao}>
          <Pressable onPress={() => navigation.navigate("Pressao")}>
            <Image
              source={require("../../../assets/iconPressao.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Pressão</Text>
          </Pressable>
        </View>

        {/* IMC */}
        <View style={styles.viewBotao}>
          <Pressable onPress={() => navigation.navigate("IMC")}>
            <Image
              source={require("../../../assets/iconCorpo.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>IMC</Text>
          </Pressable>
        </View>

        {/* Vacinas */}
        <View style={styles.viewBotao}>
          <Pressable onPress={() => navigation.navigate("Vacinas")}>
            <Image
              source={require("../../../assets/iconVacinas.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Vacinas</Text>
          </Pressable>
        </View>

        {/* Meditação */}
        <View style={styles.viewBotao}>
          <Pressable onPress={() => navigation.navigate("Meditacao")}>
            <Image
              source={require("../../../assets/icoMeditar.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Meditação</Text>
          </Pressable>
        </View>

        {/* Dieta */}
        <View style={styles.viewBotao}>
          <Pressable onPress={() => navigation.navigate("Calorias")}>
            <Image
              source={require("../../../assets/iconDieta.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Dieta</Text>
          </Pressable>
        </View>

        {/* Dicas */}
        <View style={styles.viewBotao}>
          <Pressable onPress={() => navigation.navigate("Dicas")}>
            <Image
              source={require("../../../assets/iconDicas.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Dicas</Text>
          </Pressable>
        </View>

        {/* Emergência */}
        <View style={styles.viewBotao}>
          <Pressable onPress={() => navigation.navigate("Emergencia")}>
            <Image
              source={require("../../../assets/iconEmergencia.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Emergência</Text>
          </Pressable>
        </View>
      </View>
      {/* Fim da viewBotoes */}

      {/**
   * 
   * 
   *     <View style={styles.viewPin} >
        <Pressable onPress={() => navigation.navigate
          ('Ubs')
        }>
          <Image source={require('../../../assets/iconePin.png')} style={{ height: 100, width: 100 }} resizeMode="contain" />
        </Pressable>

      </View>
   */}
    </View>
  );
}
