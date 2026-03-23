import React, { useState } from "react";
import { Text, View, Image, Pressable, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import Feather from '@expo/vector-icons/Feather';


import iconHomem from '../../../assets/iconeHomem.png';
import iconMulher from '../../../assets/iconeMulher.png';

const TODAS_AS_VACINAS = [
    { id: '1', nome: 'BCG', dose: 'Dose única', publico: 'todos', descricao: 'Protege contra formas graves de tuberculose.' },
    { id: '2', nome: 'Hepatite B', dose: '3 doses', publico: 'todos', descricao: 'Previne a infecção do fígado.' },
    { id: '3', nome: 'Penta', dose: '3 doses', publico: 'todos', descricao: 'Difteria, tétano, coqueluche, etc.' },
    { id: '4', nome: 'HPV', dose: '2 doses', publico: 'mulher', descricao: 'Previne câncer do colo do útero.' },
    { id: '5', nome: 'HPV', dose: '2 doses', publico: 'homem', descricao: 'Previne câncer de pênis e garganta.' },
    { id: '6', nome: 'Dupla Adulta', dose: 'Reforço 10/10 anos', publico: 'todos', descricao: 'Difteria e Tétano.' },
    { id: '7', nome: 'Febre Amarela', dose: 'Dose única', publico: 'todos', descricao: 'Indicada para áreas de risco.' },
    { id: '8', nome: 'Gripe (Influenza)', dose: 'Anual', publico: 'todos', descricao: 'Proteção contra vírus sazonais.' },
];

export default function Vacinas() {
    const navigation = useNavigation();
    const [filtro, setFiltro] = useState('todos');

    const icones = {
        homem: iconHomem,
        mulher: iconMulher
    };

    // Lógica para filtrar a listaaaa
    const vacinasFiltradas = TODAS_AS_VACINAS.filter(v => {
        if (filtro === 'todos') return true;
        return v.publico === filtro || v.publico === 'todos';
    });

    
    const handleFiltro = (tipo) => {
        setFiltro(prev => prev === tipo ? 'todos' : tipo);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            
           
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image
                        source={require('../../../assets/iconVacinas.png')}
                        style={styles.headerLogo}
                        resizeMode="contain"
                    />
                    <Text style={styles.headerText}>Vacinas</Text>
                </View>

                <Pressable style={styles.btnLogout} onPress={() => navigation.navigate('Home')}>
                    <Feather name="log-out" size={22} color="white" />
                </Pressable>
            </View>

            {/* 2. FILTROS */}
            <View style={styles.filterContainer}>
                {['homem', 'mulher'].map((tipo) => (
                    <Pressable
                        key={tipo}
                        onPress={() => handleFiltro(tipo)}
                        style={[
                            styles.filterBtn,
                            filtro === tipo && (tipo === 'homem' ? styles.filterBtnActiveHomem : styles.filterBtnActiveMulher)
                        ]}
                    >
                        <Image 
                            source={icones[tipo]} 
                            style={[styles.filterIcon, filtro === tipo && { tintColor: '#FFF' }]} 
                        />
                        <Text style={[styles.filterText, filtro === tipo && styles.filterTextActive]}>
                            {tipo === 'homem' ? 'Masculino' : 'Feminino'}
                        </Text>
                    </Pressable>
                ))}
            </View>

            {/* 3. LISTA DE CARDS */}
            <FlatList
                data={vacinasFiltradas}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={[styles.cardAccent, 
                            item.publico === 'mulher' ? {backgroundColor: '#FF85A1'} : 
                            item.publico === 'homem' ? {backgroundColor: '#4A90E2'} : 
                            {backgroundColor: '#A0AEC0'}]} 
                        />
                        <View style={styles.cardContent}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.vacinaNome}>{item.nome}</Text>
                                <View style={[styles.badge, 
                                    item.publico === 'mulher' ? styles.badgeMulher : 
                                    item.publico === 'homem' ? styles.badgeHomem : styles.badgeTodos]}>
                                    <Text style={styles.badgeText}>{item.publico.toUpperCase()}</Text>
                                </View>
                            </View>
                            <Text style={styles.vacinaDose}>{item.dose}</Text>
                            <Text style={styles.vacinaDesc}>{item.descricao}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}