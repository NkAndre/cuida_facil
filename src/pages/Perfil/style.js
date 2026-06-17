import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: '#4A90E2',
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 8,
    height: 108,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    flex: 1,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',    
    padding: 20,
  },
  card: {
    backgroundColor: "#FFF",
    width: "100%",
    maxWidth: 400,
    borderRadius: 15,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  infoArea: {
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 14,
    color: "#888",
    marginBottom: 2,
  },
  value: {
    fontSize: 18,
    color: "#333",
    fontWeight: "500",
  },
  buttonSair: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  // --- NOVOS ESTILOS ADICIONADOS PARA LIMPAR O CÓDIGO ---
  logoHeader: {
    width: 50,
    height: 50,
  },
  iconSpace: {
    marginRight: 15,
  },
  cardHeaderArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  valueInput: {
    fontSize: 18,
    color: "#333",
    borderBottomWidth: 1,
    borderColor: "#4A90E2",
    paddingVertical: 2,
    fontWeight: "500",
  },
  valueDesabilitado: {
    color: "#999",
  },
  col: {
    flex: 1,
  },
  colDataSpace: {
    marginLeft: 20,
  },
  buttonSalvarVerde: {
    backgroundColor: "#28a745",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIconSpace: {
    marginRight: 8,
  },
});