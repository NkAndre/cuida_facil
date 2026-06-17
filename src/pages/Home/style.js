import { StyleSheet } from "react-native";

export default StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
  btnLogout: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 8, borderRadius: 12

  },


  iconeLogout: {
    padding: 10,
    paddingLeft: 190,
    height: 'auto',
    width: 'auto'
  },

  viewBotoes: {
    flex: 1,
    marginTop: 87,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 25,
    
  },
  txtTitle: {
    fontWeight: 'bold',


  },

  viewBotao: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
  },
  viewPin:{
    position:'absolute',
    alignSelf:'center',
    bottom:50
  }
});