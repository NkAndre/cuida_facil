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

    options:{
      display:'flex',
      justifyContent:'center',
      paddingTop:45,
      
    },
    pressOption: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F0F8FF', 
      width: '90%',               
      height: 70,
      borderRadius: 15,
      marginTop: 30, 
      alignSelf: 'center',        
      paddingHorizontal: 15,
      elevation: 2,               
    },
    textOption: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 2,
      padding:10
    },
});