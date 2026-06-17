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

cardSom: {
  backgroundColor: '#4A90E2',
  margin: 25,
  borderRadius: 15,
  elevation: 5,
  overflow: 'hidden', 
},

imageBack: {
  width: '115%',       
  padding: 40,         
  alignItems: "center", 
  justifyContent: "center",
  justifyContent: "center",
},
    txtTitulo:{
      fontSize: 22, 
      fontWeight: "bold",
      color:'#fff'
    },
    modalContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0.5)",
},

modalContent: {
  width: "80%",
  height:"50%",
  backgroundColor: "#FFF",
  borderRadius: 20,
  padding: 25,
  alignItems: "center",
  justifyContent: "space-between",
},

modalTitulo: {
  fontSize: 22,
  fontWeight: "bold",
  marginBottom: 20,
  marginTop:10
},
   foneLogo: {
      width:60,
      height: 80,
    },

playerControls: {
  flexDirection: "row",
  gap: 40, 
  alignItems: 'center',
  justifyContent: 'center',
  padding:25
},

btnFechar: {
  marginTop: 25,
  marginBottom:3
},
    
});