import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
   
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
  txtTitulo: {
      color: "blue",
      fontSize: 25,
      fontWeight: "bold",
      alignItems:'center',
      textAlign:'center',
      padding:30
    },
    input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
  },


});