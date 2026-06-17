import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scroll: {
    paddingBottom: 40,
  },
  listContainer: {
    paddingBottom: 30,
  },
  loading: {
    marginTop: 60,
  },

  // HEADER
  header: {
    backgroundColor: "#4A90D9",
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerLogo: {
    width: 32,
    height: 32,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  btnLogout: {
    padding: 6,
  },

  // FORMULÁRIO (Adicionado para funcionar com os inputs de Peso e Altura)
  formContainer: {
    padding: 20,
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: "#ddd",
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#e3e3e3",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#4A90D9",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  // RESULTADO
  resultadoCard: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 14,
    padding: 24,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#ddd",
  },
  labelText: {
    fontSize: 16,
    color: "#888",
    marginBottom: 4,
  },
  imcText: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#333",
  },
  classificacao: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },
  divisor: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#ddd",
    marginVertical: 20,
  },
  secaoTitulo: {
    fontSize: 15,
    color: "#555",
    marginBottom: 16,
  },

  // ÁGUA
  aguaRow: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  aguaCard: {
    flex: 1,
    backgroundColor: "#f0f7ff",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    gap: 4,
  },
  aguaValor: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90D9",
  },
  aguaDesc: {
    fontSize: 11,
    color: "#888",
    textAlign: "center",
  },

  // VAZIO
  textoVazio: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 60,
    paddingHorizontal: 40,
    fontSize: 15,
  },
});

export default styles;