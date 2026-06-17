import React from "react";
import { useState } from "react";
import { Text, View, ActivityIndicator, Pressable, Image, Modal, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import Feather from "@expo/vector-icons/Feather";
import { Audio } from "expo-av";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
//import { ImageBackground } from "react-native-web";
import { useAudioPlayer } from "../../hooks/audioPlayer";

const LISTA_SONS = [
  {
    id: "1",
    titulo: "chuva",
    arquivo: require("../../../assets/sound/chuva.mp3"),
    imagem: require("../../../assets/chuva.jpg")
  },
  {
    id: "2",
    titulo: "oceano",
    arquivo: require("../../../assets/sound/oceano.mp3"),
    imagem: require("../../../assets/oceano.jpg")
  },
    {
    id: "3",
    titulo: "Fogo",
    arquivo: require("../../../assets/sound/fire.mp3"),
    imagem: require("../../../assets/fogo.jpg")
  },
      {
    id: "4",
    titulo: "Passaro",
    arquivo: require("../../../assets/sound/passaros.mp3"),
    imagem: require("../../../assets/passaro.jpg")
  },
     {
    id: "5",
    titulo: "Piano",
    arquivo: require("../../../assets/sound/piano.mp3"),
    imagem: require("../../../assets/piano.jpg")
  },


]
export default function Meditacao() {

  const navigation = useNavigation();

  const {
    modalVisible,
    somSelecionado,
    abrirPlayer,
    tocarAudio,
    pausarAudio,
    reiniciarAudio,
    fecharPlayer,
  } = useAudioPlayer();




  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require("../../../assets/pensar.png")}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <Text style={styles.headerText}>Meditação</Text>
        </View>
        <Pressable style={styles.btnLogout} onPress={() => navigation.navigate("Home")}>
          <Feather name="log-out" size={22} color="white" />
        </Pressable>
      </View>

      {/* LISTA DE SONS */}
      <ScrollView contentContainerStyle={styles.listaContainer}>
        {LISTA_SONS.map((item) => (
          <Pressable
            key={item.id}
            style={styles.cardSom}
            onPress={() => abrirPlayer(item)} 
          >
            <ImageBackground source={item.imagem} resizeMode="cover" style={styles.imageBack}
            imageStyle={{ justifyContent: 'flex-end', alignment: 'bottom' }}>
              <View style={styles.cardOverlay}>
                <Text style={styles.txtTitulo}>{item.titulo}</Text>
              </View>
            </ImageBackground>
          </Pressable>
        ))}
      </ScrollView>

      {/* MODAL DO PLAYER */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitulo}>
              Som de {somSelecionado?.titulo}
            </Text>

              <Image
            source={require("../../../assets/foneOuvido.png")}
            style={styles.foneLogo}
            resizeMode="contain"
          />

            <View style={styles.playerControls}>
              <Pressable onPress={tocarAudio}>
                <MaterialIcons name="play-arrow" size={55} color="#4A90E2" />
              </Pressable>

              <Pressable onPress={pausarAudio}>
                <MaterialIcons name="pause" size={55} color="#4A90E2" />
              </Pressable>

              <Pressable onPress={reiniciarAudio}>
                <MaterialIcons name="replay" size={45} color="#4A90E2" />
              </Pressable>
            </View>

            <Pressable style={styles.btnFechar} onPress={fecharPlayer}>
              <MaterialIcons name="cancel" size={35} color="#4A90E2" />
            </Pressable>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

