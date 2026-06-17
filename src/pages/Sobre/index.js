import React from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Pressable,
  Image,
  StyleSheet,
  Linking,
  FlatList,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';

import { useExternalLinks } from "../../hooks/contato";

const INTEGRANTES = [
  {
    id: "1",
    nome: "André",
    foto: require("../../../assets/andreFoto.jpeg"),
    github: "NkAndre",
    instagram: "andree.xnj"
  },
  {
    id: "2",
    nome: "Lucas",
    foto: require("../../../assets/lucasPereira.jpeg"), // 
    github: "Lucas-Pereira-2008", 
    instagram: "lucas_pereir444" 
  }
];
export default function Sobre() {
  const navigation = useNavigation();
  const { abrirGithub, abrirInstagram, abrirLink } = useExternalLinks();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require("../../../assets/sobreIcone.png")}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <Text style={styles.headerText}>Sobre</Text>
        </View>
        <Pressable
          style={styles.btnLogout}
          onPress={() => navigation.navigate("Menu")}
        >
          <Feather name="log-out" size={22} color="white" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {INTEGRANTES.map((item) => (
          <View key={item.id} style={styles.cardIntegrante}>
         
            <Image
              source={item.foto}
              style={styles.img}
              resizeMode="cover"
            />
            
            {/* Nome do Integrante */}
            <Text style={styles.txtNome}>{item.nome}</Text>
            
            {/* Container dos Ícones Sociais */}
            <View style={styles.iconeUrl}>
              <Pressable onPress={() => abrirGithub(item.github)}>
                <AntDesign name="github" size={32} color="white" />
              </Pressable>
              
              <Pressable onPress={() => abrirInstagram(item.instagram)}>
                <Entypo name="instagram" size={32} color="white" />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
        
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#4A90E2",
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 8,
    height: 108,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    justifyContent: "space-between",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerLogo: {
    width: 32,
    height: 32,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  btnLogout: {
    padding: 6,
  },
  scrollContainer: {
    paddingBottom: 30,
    alignItems: "center",
  },
  cardIntegrante: {
    backgroundColor: "#4088CB", 
    width: "65%",
    padding: 20,
    borderRadius: 30, 
    marginTop: 25,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  img: {
    width: "100%",
    height: 280,
    borderRadius: 25, 
  },
  txtNome: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "center",
  },
  iconeUrl: {
    flexDirection: "row",
    gap: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  }
});
