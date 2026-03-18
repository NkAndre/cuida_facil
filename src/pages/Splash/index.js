import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'; 
import styles from './style'; 

export default function Splash() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}> 
        <Text>Carregando Cuida Fácil...</Text>
        <StatusBar style="auto"/>
    </View>
  );
}