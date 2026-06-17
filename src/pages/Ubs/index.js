{/*import React from "react";
import { Text, View, ActivityIndicator, Pressable, Image, TextInput, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "./style";
import Feather from "@expo/vector-icons/Feather";
import { FontAwesome5 } from "@expo/vector-icons";
// Ícones
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useGeolocation } from "../../hooks/useGeolocation";

import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";

const POSTOS_DE_SAUDE = [
    { id: 1, nome: "UBS Central", latitude: -23.55052, longitude: -46.633308 },
    { id: 2, nome: "UBS Vila Maria", latitude: -23.55552, longitude: -46.639308 },
    { id: 3, nome: "Posto de Saúde Bairro Novo", latitude: -23.54552, longitude: -46.627308 },
];

export default function Ubs() {
    const navigation = useNavigation();
    const [geo, setGeo] = useState(""); 

    const [regiao, setRegiao] = useState({
        latitude: -23.55052,
        longitude: -46.633308,
        latitudeDelta: 0.015, 
        longitudeDelta: 0.015,
    });

 const buscarEndereco = async () => {
    if (geo.trim() === "") {
        alert("Por favor, digite um CEP ou endereço!");
        return;
    }

    try {
        // 1. Força o aplicativo a pedir a permissão na hora do clique
        let { status } = await Location.requestForegroundPermissionsAsync();
        
        // Se mesmo assim o usuário não aceitar ou o sistema bloquear
        if (status !== "granted") {
            alert("O app precisa da permissão de localização para buscar o endereço. Ative-a nas configurações do seu celular.");
            return;
        }

        // 2. Se estiver autorizado, transforma o CEP em coordenadas
        let resultado = await Location.geocodeAsync(geo);

        if (resultado.length > 0) {
            const { latitude, longitude } = resultado[0];

            // 3. Move o mapa para o local encontrado
            setRegiao({
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.015,
            });
        } else {
            alert("Endereço ou CEP não encontrado. Tente digitar o nome da rua e cidade.");
        }
    } catch (error) {
        console.log(error);
        alert("Erro ao buscar o endereço. Verifique se o GPS e a internet estão ligados.");
    }
};

    return (
        <View style={styles.container}>
     
     {/       <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image
                        source={require("../../../assets/iconEmergencia.png")}
                        style={styles.headerLogo}
                        resizeMode="contain"
                    />
                    <Text style={styles.headerText}>UBS</Text>
                </View>
                <Pressable
                    style={styles.btnLogout}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Feather name="log-out" size={22} color="white" />
                </Pressable>
            </View>

            <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                <Text style={styles.txtTitulo}>Geolocalização</Text>
            </View>

            <View style={localStyles.buscaContainer}>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Digite seu endereço... "
                    value={geo}
                    onChangeText={setGeo} // Corrigido para setGeo
                />
                <Pressable style={localStyles.btnBuscar} onPress={buscarEndereco}>
                    <Feather name="search" size={20} color="white" />
                </Pressable>
            </View>

            <View style={localStyles.mapaContainer}>
                <MapView 
                    style={localStyles.mapa} 
                    region={regiao}
                    onRegionChangeComplete={(region) => setRegiao(region)}
                >
                    {POSTOS_DE_SAUDE.map((posto) => (
                        <Marker
                            key={posto.id}
                            coordinate={{ latitude: posto.latitude, longitude: posto.longitude }}
                            title={posto.nome}
                            description="Posto de Saúde Próximo"
                            pinColor="red"
                        />
                    ))}
                </MapView>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

// Estilos locais criados para organizar o layout do mapa e botão de busca
const localStyles = StyleSheet.create({
    buscaContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    btnBuscar: {
        backgroundColor: "#007bff",
        padding: 12,
        borderRadius: 8,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    mapaContainer: {
        flex: 1, 
        backgroundColor: "#e5e5e5",
    },
    mapa: {
        width: Dimensions.get("window").width,
        height: "100%",
    },
});*/}