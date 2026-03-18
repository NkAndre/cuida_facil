import React, { useState, useEffect } from "react";

import { Text, View, Image, TextInput, Pressable, Alert, Platform , Keyboard,KeyboardAvoidingView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'; 
import styles from './style'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';


export default function Home(){
  const navigation = useNavigation();
  
  return(
    
    <View style={styles.header}>
    
            <Image
              source={require('../../../assets/coracaoIcone.png')}
              style={{ width: 50, height: 50 }} // Tamanho fixo para o topuuuu
              resizeMode="contain"
            />
            <Text style={styles.headerText}>Home</Text>


            <View style={styles.iconeLogout}>

            <Pressable onPress={()=> navigation.navigate('Login')}>
              <Feather name="log-out" size={24} color="white"/>
            </Pressable>

            </View>
    </View>

  );
}