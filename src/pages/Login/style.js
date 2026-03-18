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
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30, 
     paddingTop: 100,
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  instructionText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  illustration: {
    width: 220, 
    height: 180,
    marginBottom: 20, 
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#87CEFA', 
    width: '100%',
    height: 55,
    borderRadius: 15, 
    paddingHorizontal: 15,
    marginBottom: 20, 
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  footerText: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  linkText: {
    color: '#00BFFF',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#87CEFA',
    width: '70%',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { 
        width: 0, height: 2 
                },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
});