import { StyleSheet } from "react-native";

export const nivelCores = {
  padrao: "#4A90D9",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  // HEADER
  header: {
    backgroundColor: "#4A90E2",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerLogo: {
    width: 45,
    height: 45,
    marginRight: 12,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  btnLogout: {
    padding: 6,
  },

  // IMAGEM DO COPO
  viewCopo: {
    alignItems: "center",
    marginVertical: 20,
  },
  copo: {
    width: 120,
    height: 120,
  },

  // RESUMO
  resumoArea: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  totalTexto: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4A90D9",
    textAlign: "center",
  },
  metaTexto: {
    textAlign: "center",
    color: "#888",
    marginBottom: 10,
  },
  barraFundo: {
    height: 12,
    backgroundColor: "#ddd",
    borderRadius: 6,
    overflow: "hidden",
  },
  barraProgresso: {
    height: 12,
    borderRadius: 6,
  },
  metaAtingida: {
    textAlign: "center",
    color: "#27ae60",
    marginTop: 8,
    fontWeight: "bold",
  },

  // BOTÕES
  viewBotao: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#4A90D9",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
  },
  botaoTexto: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  // LISTA
  listaConteudo: {
    paddingBottom: 30,
  },
  textoVazio: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 10,
  },
  cabecalhoLista: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 16,
  },
  tituloLista: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  limparTexto: {
    color: "#cc0000",
    fontSize: 13,
  },

  // CARD
  cardAgua: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    padding: 14,
    borderLeftWidth: 4,
    borderLeftColor: "#4A90D9",
  },
  textoCard: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  textoHora: {
    fontSize: 13,
    color: "#888",
    marginTop: 2,
  },


 
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalConteudo: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  botaoOpcao: {
    flexDirection: "row",
    backgroundColor: "#4A90D9",
    width: "100%",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  copoIcone: {
    width: 40,
    height: 30,
    marginRight: 10,
    tintColor: "#fff", 
  },
  botaoOpcaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  botaoCancelar: {
    marginTop: 10,
    padding: 5,
  },
  textoCancelar: {
    color: "#cc0000",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;