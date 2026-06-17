import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
   
  },

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
    imgBolsa:{
      alignContent:'center',
      padding:50,
      marginBottom:20,
      alignItems:'center'
    },
    botaoRedondo: {
  width: 120,
  height: 100,
  borderRadius: 50, 
 backgroundColor: '#E53935',  
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 10,
  shadowColor: '#000', 
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
},
textoBotao: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},
modalContainerPrincipal: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)', 
},
modalConteudo: {
  width: '80%',
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 20,
  alignItems: 'center',
},
modalTitulo: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 15,
},
opcaoItem: {
  padding: 15,
  borderBottomWidth: 1,
  borderBottomColor: '#eee',
  width: 200,
  alignItems: 'center',
},
opcaoTexto: {
  fontSize: 18,
},
btnFecharModal: {
  marginTop: 15,
  padding: 10,
  
 
},
textoBtnFechar: {
  color: 'red',
  fontWeight: 'bold',
},
tipoSangue: {
  alignItems: 'center',       
  justifyContent: 'center',
  marginTop: 30,  
  padding:60         
},

    
});