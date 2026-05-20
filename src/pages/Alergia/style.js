import { StyleSheet } from "react-native";

export const nivelCores = {
  leve: '#4CAF50',     // Verde ne pae
  moderado: '#FFC107', // Amarelo/Laranja
  grave: '#F44336',    // Vermelho
  padrao: '#87CEFA'    // Azul claro
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Header
  header: {
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
    marginBottom: 10, 
  },
  headerContent: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  headerLogo: {
    width: 45, 
    height: 45,
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
    padding: 8, 
    borderRadius: 12
  },

  // Inputs e Botões
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F8FF', 
    width: '90%',               
    height: 55,
    borderRadius: 15,
    marginTop: 15, // Espaçamento entre inputs
    alignSelf: 'center',        
    paddingHorizontal: 15,
    elevation: 2,               
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
  },
  picker: {
    flex: 1,                    
    height: '100%',
    color: '#333',
  },
  viewBotao: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20, // Garante que o botão não grude na lista
  },
  botao: {
    backgroundColor: '#4A90E2',
    width: '90%',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  botaoTexto: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // ESTILIZAÇÃO DA LISTA (O que estava apertado)
  tituloLista: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginLeft: '5%',
    marginTop: 10,
    marginBottom: 10,
  },
  listaAlergias: {
    paddingBottom: 40, // Espaço no final para não sumir atrás da navegação
  },
  cardAlergia: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 12,        // Espaço entre um card e outro
    width: '92%',            // Largura levemente menor que a tela
    alignSelf: 'center',     // Centraliza o card
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    backgroundColor: '#FFF', 
    borderLeftWidth: 10,     // Borda colorida mais grossa para destaque
  },
  textoCard: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  textoNivel: {
    fontSize: 13,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: 3,
  }
});