import React from "react";
import { Text, View , ActivityIndicator} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'; 
import styles from './style'; 
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}> 
        <Text>Carregando Cuida Fácil...</Text>
        <StatusBar style="auto"/>
    </View>
  );
}
