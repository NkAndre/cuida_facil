import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
   
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
      padding:16,
           
    },
    leftSide: {
  flexDirection: "row",
  alignItems: "center",
  gap:3
 
},
rightSide: {
    padding:80,
    
    
},
    textOption: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 2,
      padding:10
    },
});