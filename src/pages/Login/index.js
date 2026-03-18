import React, { useState, useEffect } from "react";

import { Text, View, Image, TextInput, Pressable, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'; 
import styles from './style';

export default function Login(){
  const navigation = useNavigation();
  
  return(

    <View style={styles.container}> 
        <Text>Hello world</Text>
        <StatusBar style="auto"/>
    </View>
  );
}