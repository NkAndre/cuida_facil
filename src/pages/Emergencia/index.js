import React from "react";
import { useState } from "react";
import { Text, View, ActivityIndicator, Pressable, Image,TextInput, Dimensions} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "./style";
import Feather from "@expo/vector-icons/Feather";

export default function Emergência() {
  const navigation = useNavigation();
  const [geo, setGeo] = useState("");
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require("../../../assets/iconEmergencia.png")}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <Text style={styles.headerText}>Emergência</Text>
        </View>
        <Pressable
          style={styles.btnLogout}
          onPress={() => navigation.navigate("Home")}
        >
          <Feather name="log-out" size={22} color="white" />
        </Pressable>
      </View>

      <View>
        <Text style={styles.txtTitulo}>Geocalização</Text>
      </View>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="digite ai "
            value={geo}
            onChangeText={setGeo}
          />
        </View>
     
      <StatusBar style="auto" />
    </View>
  );
}
