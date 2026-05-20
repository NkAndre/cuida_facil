import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1, // Isso faz a tela ocupar o espaço todo
    backgroundColor: '#fff',
  },

    // Header
    header: {
      width:'100%',
        backgroundColor: '#4A90E2',
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      headerContent: {
        flexDirection: 'row', alignItems:
          'center'
      },
      headerLogo: {
        width: 45, height: 45,
        marginRight: 12
      },
      medirLogo: {
        width: 85,
        height: 85,
        marginRight: 12
      },

      headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        letterSpacing: 0.5
      },
      btnLogout: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: 8, borderRadius: 12
      },
      titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2E7D32",
        marginBottom: 20,
      },
      input: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 14,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ddd",
        marginBottom: 15,
      },
      botao: {
        backgroundColor: "#4A90E2",
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 12,
        marginBottom: 20,
         alignItems:"center",
        textAlign:"center",
        fontWeight:"bold"
      },
      botaoTexto: {
        color: "#fff",
        fontSize: 22.5,
        fontWeight: "bold",
      },
      card: {
        width: "100%",
        backgroundColor: "#4A90E2",
        borderRadius: 20,
        padding: 20,
        elevation: 4,
        marginTop: 20,
      },
      nome: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 15,
        textAlign: "center",
      },
      info: {
        fontSize: 22.5,
        color: "#fff",
        margin: 16,
        fontWeight:"bold"
      },
      erro: {
        color: "red",
        fontSize: 16,
        marginTop: 10,
        fontWeight: "bold",
      },
      
});