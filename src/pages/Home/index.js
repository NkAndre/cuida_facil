import React, { useState, useEffect } from "react";

import { Text, View, Image, TextInput, Pressable, Alert, Platform, Keyboard, KeyboardAvoidingView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/coracaoIcone.png')}
          style={{ width: 50, height: 50 }} // Tamanho fixo para o topuuuu
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Home</Text>


        <View style={styles.iconeLogout}>

          <Pressable onPress={() => navigation.navigate('Login')}>
            <Feather name="log-out" size={24} color="white" />
          </Pressable>

        </View>
      </View>

      <View style={styles.viewBotoes}>

        <View style={styles.viewBotao}>
          <Pressable>
            <Image
              source={require('../../../assets/iconSangue.png')}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Sangue</Text>
          </Pressable>
        </View>

        <View style={styles.viewBotao}>
          <Pressable>
            <Image
              source={require('../../../assets/iconAgua.png')}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Água</Text>
          </Pressable>
        </View>

        <View style={styles.viewBotao}>
          <Pressable>
            <Image
              source={require('../../../assets/iconRemedio.png')}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Remédios</Text>
          </Pressable>
        </View>

        <View style={styles.viewBotao}>
          <Pressable>
            <Image
              source={require('../../../assets/iconAlergia.png')}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Alergias</Text>
          </Pressable>
        </View>

        <View style={styles.viewBotao}>
          <Pressable>
            <Image
              source={require('../../../assets/iconGlicemia.png')}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Glicemia</Text>
          </Pressable>
        </View>

        <View style={styles.viewBotao}>
          <Pressable>
            <Image
              source={require('../../../assets/iconPressao.png')}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Pressão</Text>
          </Pressable>
        </View>

        <View style={styles.viewBotao}>
          <Pressable>
            <Image
              source={require('../../../assets/iconCorpo.png')}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>IMC</Text>
          </Pressable>
        </View>

        <View style={styles.viewBotao}>
          <Pressable onPress={() => navigation.navigate('Vacinas')}>
            <Image
              source={require('../../../assets/iconVacinas.png')}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Vacinas</Text>
          </Pressable>
        </View>

        <View style={styles.viewBotao}>
          <Pressable>
            <Image
              source={require('../../../assets/icoMeditar.png')}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Meditação</Text>
          </Pressable>
        </View>

        <View style={styles.viewBotao}>
          <Pressable>
            <Image
              source={require('../../../assets/iconDieta.png')}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Dieta</Text>
          </Pressable>
        </View>

        <View style={styles.viewBotao}>
          <Pressable>
            <Image
              source={require('../../../assets/iconDicas.png')}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>Dicas</Text>
          </Pressable>
        </View>

        <View style={styles.viewBotao}>
          <Pressable>
            <Image
              source={require('../../../assets/iconEmergencia.png')}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text>Emergência</Text>
          </Pressable>
        </View>

      </View>

    </View>
  );
}