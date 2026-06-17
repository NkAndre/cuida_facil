import React from 'react';
import { View, Text } from 'react-native';
import Feather from "@expo/vector-icons/Feather";
 import styles from './style';// 

export default function CardHistorico({ item }) {
  return (
    <View style={styles.cardHistorico}>
      <View style={styles.cardDados}>
        <View style={styles.infoPressao}>
          <Text style={styles.valorPressao}>{item.sistolica}/{item.diastolica}</Text>
          <Text style={styles.unidadePressao}> mmHg</Text>
        </View>

        <View style={[styles.statusTag, { backgroundColor: item.cor }]}>
          <Text style={styles.statusTexto}>{item.status}</Text>
        </View>

        <View style={[styles.infoPulso, { marginLeft: 'auto' }]}>
          <Feather name="heart" size={14} color="#E63946" />
          <Text style={styles.valorPulso}> {item.pulso} bpm</Text>
        </View>
      </View>
      <Text style={styles.cardData}>{item.data}</Text>
    </View>
  );
}