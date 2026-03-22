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

      viewBotoes:{
        flex: 1,
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding:25,
        
      },
      txtTitle:{
        fontWeight: 'bold',
        

      },

      viewBotao:{
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#87CEFA',
      },
});