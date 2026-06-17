import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, Pressable, Image, Modal, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import Feather from "@expo/vector-icons/Feather";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Sangue() {

  const navigation = useNavigation();
  const listaSangue = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const [modalVisivel, setModalVisivel] = useState(false)
  const [tipoSangue, setTipoSangue] = useState("Selecionar");

  const salvarTipoSangue=async(sangueSelecionado)=>{
    try{
      await AsyncStorage.setItem('@usuario_tipo_sangue', sangueSelecionado)
    }catch (erro){
      console.log("erro ao salva sangue" , erro)
    }
  }

    useEffect(() => {
    const carregarTipoSangue = async () => {
      try {
        const sangueSalvo = await AsyncStorage.getItem('@usuario_tipo_sangue');
        if (sangueSalvo !== null) {
          setTipoSangue(sangueSalvo); 
        }
      } catch (erro) {
        console.log("Erro ao carregar tipo de sangue:", erro);
      }
    };

    carregarTipoSangue();
  }, []);


  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require("../../../assets/iconSangue.png")}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <Text style={styles.headerText}>Sangue</Text>
        </View>
        <Pressable
          style={styles.btnLogout}
          onPress={() => navigation.navigate("Home")}
        >
          <Feather name="log-out" size={22} color="white" />
        </Pressable>
      </View>


      <View style={styles.imgBolsa}>
        <Image
          source={require("../../../assets/bolsaSangue.png")}
          resizeMode="contain"
        />
      </View>

     
        <View style={styles.tipoSangue}>
        <Pressable 
          style={styles.botaoRedondo} 
          onPress={() => setModalVisivel(true)}
        >
          <Text style={styles.textoBotao}>{tipoSangue}</Text>
        </Pressable>
        </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalContainerPrincipal}>
          <View style={styles.modalConteudo}>
            <Text style={styles.modalTitulo}>Escolha seu Tipo Sanguíneo</Text>
     
            <FlatList
              data={listaSangue}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Pressable 
                  style={styles.opcaoItem}
                  onPress={() => {
                    setTipoSangue(item); 
                    salvarTipoSangue(item);
                    setModalVisivel(false); 
                  }}
                >
                  <Text style={styles.opcaoTexto}>{item}</Text>
                </Pressable>
              )}
            />
            <Pressable 
              style={styles.btnFecharModal} 
              onPress={() => setModalVisivel(false)}
            >
              <Text style={styles.textoBtnFechar}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

