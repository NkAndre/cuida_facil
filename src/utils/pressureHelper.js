import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@historico_pressao';

export const classificarPressao = (sisStr, diaStr) => {
    let sis = parseFloat(sisStr);
    let dia = parseFloat(diaStr);

    if (sis < 30) sis *= 10;
    if (dia < 30) dia *= 10;

    if (sis >= 140 || dia >= 90)
        return { status: "Hipertensão", cor: "#800080" };
    if (sis < 90 || dia < 60) return {
        status:
    "Hipotensão", cor: "#1E90FF"
    };
    if (sis >= 130 || dia >= 85) return { status: "Limítrofe", cor: "#FF8C00" };
    return { status: "Normal", cor: "#2E8B57" };
};

export const getHistoricoStorage = async () => {
    try {
        const dados = await AsyncStorage.getItem(STORAGE_KEY);
        return dados ? JSON.parse(dados) : [];
    } catch {
        return [];
    }
};

export const saveHistoricoStorage = async (novoHistorico) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novoHistorico));
        return true;
    } catch {
        return false;
    }
};