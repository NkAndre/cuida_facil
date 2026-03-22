import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },

      header: {
        backgroundColor: '#87CEFA', 
        height: 108, 
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: 40, 
      },
      headerText: {
        fontSize: 28, 
        fontWeight: 'bold',
        marginLeft: 10,
      },

      iconeLogout:{
        padding:10,
        paddingLeft:190,
        height:'auto',
        width:'auto'
      },
})