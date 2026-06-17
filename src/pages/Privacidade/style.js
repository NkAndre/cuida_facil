import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  // Contentor principal da tela
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
   // HEADER
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
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white', 
    marginLeft: 10,
    flex: 1, 
  },
  
    btnLogout: {
      padding: 6,
    },

  // Área de conteúdo com Scroll
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  
  // Texto introdutório de boas-vindas
  welcomeText: {
    fontSize: 15,
    color: '#555555',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
  },

  // Cards de cada tópico (Ajuda ou Privacidade)
  helpItem: {
    backgroundColor: '#F4F9FF', // Azul extremamente claro para o fundo do card
    padding: 16,
    borderRadius: 15,
    marginBottom: 16,
    borderLeftWidth: 5,
    borderLeftColor: '#4A90E2', // Borda esquerda com o azul principal do app
    
    // Sombra leve para dar profundidade (estilo Material Design)
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  
  // Título de cada tópico / funcionalidade
  topicTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 6,
  },
  
  // Descrição detalhada do tópico
  topicDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  }
});