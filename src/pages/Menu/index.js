import React from "react";
import { Text, View, ActivityIndicator, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "./style";
import Feather from "@expo/vector-icons/Feather";
import { FontAwesome5 } from "@expo/vector-icons";
// Ícones
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function Menu() {
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
          <Text style={styles.headerText}>Menu</Text>
        </View>
        <Pressable
          style={styles.btnLogout}
          onPress={() => navigation.navigate("Home")}
        >
          <Feather name="log-out" size={22} color="white" />
        </Pressable>
      </View>

      <View style={styles.options}>
        <View style={styles.listaOptions}>
          <Pressable
            onPress={() => navigation.navigate("Perfil")}
            style={styles.pressOption}
          > 
            <FontAwesome5 name="user-circle" size={24} color="blue" />
            <Text style={styles.textOption}>Perfil</Text>
           
          </Pressable>

             <Pressable
            onPress={() => navigation.navigate("Sobre")}
            style={styles.pressOption}
          >
             <AntDesign name="code" size={24} color="blue" />
            <Text style={styles.textOption}>Sobre</Text>
           
          </Pressable>

       
          <Pressable
            onPress={() => navigation.navigate("Ajuda")}
            style={styles.pressOption}
          > 
            <Fontisto name="world-o" size={24} color="blue" />
            <Text style={styles.textOption}>Ajuda</Text>
           
          </Pressable>


             <Pressable
            onPress={() => navigation.navigate("Privacidade")}
            style={styles.pressOption}
          >
            <Entypo name="open-book" size={24} color="blue" />
            <Text style={styles.textOption}>Privacidade e Segurança</Text>
          </Pressable>


    

              <Pressable
            onPress={() => navigation.navigate("Configuracao")}
            style={styles.pressOption}
          >
            <FontAwesome name="gear" size={24} color="blue" />
            <Text style={styles.textOption}>Configuração</Text>
            
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Configuracao")}
            style={styles.pressOption}
          > 
            <AntDesign name="close-circle" size={24} color="blue" />
            <Text style={styles.textOption}>Sair</Text>
           
          </Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
