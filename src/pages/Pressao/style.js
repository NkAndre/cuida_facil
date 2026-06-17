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

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 15,
  },
  containerInputs: {
    backgroundColor: '#FFF',
    margin: 15,
    padding: 15,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  linhaInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputGroup: {
    width: '31%', // Distribui os 3 inputs na mesma linha
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F1F3F5',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  btnAdicionar: {
    backgroundColor: '#4A90E2', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    borderRadius: 10,
  },
  textoBtnAdicionar: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerHistorico: {
    flex: 1,
    marginHorizontal: 15,
  },
  cardHistorico: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 5,
    borderLeftColor: '#E63946', 
    elevation: 1,
  },
  cardDados: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  infoPressao: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  valorPressao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  unidadePressao: {
    fontSize: 12,
    color: '#888',
  },
  infoPulso: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valorPulso: {
    fontSize: 15,
    color: '#555',
    fontWeight: '500',
  },
  cardData: {
    fontSize: 12,
    color: '#999',
  },
});