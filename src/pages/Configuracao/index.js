import React from "react";
import { useState } from "react";
import { Text, View, ActivityIndicator, Pressable, Image, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "./style";
import Feather from "@expo/vector-icons/Feather";
import { FontAwesome5 } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";

// 1. IMPORTAR O HOOK DE TRADUÇÃO
import { useTranslation } from "react-i18next";

export default function Configuracao() {
    const navigation = useNavigation();

    // 2. INICIALIZAR A FUNÇÃO 't' E A INSTÂNCIA DO i18n
    const { t, i18n } = useTranslation();

    const [som, setSom] = useState(true);
    const [notificacaoRemedio, setNotificacaoRemedio] = useState(true);
    const [notificacaoAgua, setNotificacaoAgua] = useState(false);

    // 3. FUNÇÃO PARA ALTERNAR O IDIOMA NO SWITCH
    const toggleIdioma = (valor) => {
        const novoIdioma = valor ? "pt" : "en";
        i18n.changeLanguage(novoIdioma);
    };

    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image
                        source={require("../../../assets/configIcone.png")}
                        style={styles.headerLogo}
                        resizeMode="contain"
                    />
                    {/* USANDO A TRADUÇÃO */}
                    <Text style={styles.headerText}>{t("configuracao")}</Text>
                </View>
                <Pressable
                    style={styles.btnLogout}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Feather name="log-out" size={22} color="white" />
                </Pressable>
            </View>

            <View style={styles.options}>
                <View style={styles.listaOptions}>
                    <View style={styles.pressOption}>
                        <FontAwesome name="language" size={24} color="blue" />
                        {/* USANDO A TRADUÇÃO */}
                        <Text style={styles.textOption}>{t("idioma")}</Text>

                        <Switch
                            // 1. O Switch fica ATIVO (true) se o idioma começar com "pt"
                            value={i18n.language?.startsWith("pt")}

                            // 2. Chama a função que criamos para alternar o idioma
                            onValueChange={toggleIdioma}

                            // 3. Cores de fundo do Switch (Opcional - ajuste como preferir)
                            trackColor={{ false: "#14171c", true: "#0d1019" }}

                            // 4. CORRIGIDO: A cor da bolinha agora depende se o idioma é português ou não
                            thumbColor={i18n.language?.startsWith("pt") ? "#ff3939" : "#003d87"}
                        />
                    </View>

                    <View style={styles.pressOption}>
                        <View style={styles.leftSide}>
                            <AntDesign name="sound" size={24} color="blue" />
                            {/* USANDO A TRADUÇÃO */}
                            <Text style={styles.textOption}>{t("som")}</Text>
                        </View>

                        <View style={styles.rightSide}>
                            <Switch
                                value={som}
                                onValueChange={setSom}
                            />
                        </View>
                    </View>

                    <View style={styles.pressOption}>
                        <View style={styles.leftSide}>
                            <Ionicons name="notifications" size={24} color="blue" />
                            {/* USANDO A TRADUÇÃO */}
                            <Text style={styles.textOption}>{t("notificacaoRemedio")}</Text>
                        </View>

                        <View style={styles.rightSide}>
                            <Switch
                                value={notificacaoRemedio}
                                onValueChange={setNotificacaoRemedio}
                            />
                        </View>
                    </View>

                    <Pressable style={styles.pressOption}>
                        <Ionicons name="notifications" size={24} color="blue" />
                        {/* USANDO A TRADUÇÃO */}
                        <Text style={styles.textOption}>{t("notificacaoAgua")}</Text>
                    </Pressable>

                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}