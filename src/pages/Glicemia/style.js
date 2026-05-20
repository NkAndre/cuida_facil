import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC'
  },


  // Header
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
  },
  headerContent: {
    flexDirection: 'row', alignItems:
      'center'
  },
  headerLogo: {
    width: 45, height: 45,
    marginRight: 12
  },
  medirLogo: {
    width: 85,
    height: 85,
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
    padding: 8, borderRadius: 12
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 65,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  viewButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloModal: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#000',
  letterSpacing: 0.5
  },
  buttonMedir: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 16,
    elevation: 3,
    gap: 8,
    margin: 20
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7DD8FF',
    paddingVertical: 12,
    borderRadius: 16,
    elevation: 3,
    height: 58,
    width: 232,
    marginTop: 20,
    marginBottom: 0,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    gap: 8
  },
  buttonOpen: {
    backgroundColor: '#7DD8FF',
  },
  buttonClose: {
    backgroundColor: '#7DD8FF',
  },
  picker: {
    height: 50,
    width: 200,
    backgroundColor: '#7DD8FF',
    border: 0,
    fontWeight: '100',
    fontSize: 17,
    color: '#444'
  },
  viewInput: {
    marginTop: 25,
    marginBottom: 0,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:15
  },
  modalText: {
    marginBottom: 0,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },


  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#87CEFA', 
    width: '100%',
    height: 55,
    borderRadius: 15, 
    paddingHorizontal: 15,
    marginBottom: 0, 
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },









  filterIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain'
  },
  filterText: {
    fontWeight: '700',
    color: '#4A5568',
    fontSize: 14
  },

  filterTextActive: { color: '#FFF' },
  // Card
  card: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    marginBottom: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    width: 350
  },
  cardAccent: {
    width: 6
  },

  cardContent: {
    flex: 1,
    padding: 18,
    position: 'relative'
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  centerText: {

    alignItems: 'center'
  },
  dataMedicao: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '700',
    margin: 4
  },


  medicaoValor: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2D3748'
  },

  nivelGliN: {
    fontSize: 14,
    color: '#4AE266',
    fontWeight: '700',
    margin: 10
  },
  nivelGliPD: {
    fontSize: 14,
    color: '#FFAE00',
    fontWeight: '700',
    margin: 10
  },
  nivelGliD: {
    fontSize: 14,
    color: '#E24A4D',
    fontWeight: '700',
    margin: 10
  },

  tipoGli: {
    fontSize: 18,
    color: '#4A90E2',
    fontWeight: '700',
    margin: 10
  },
  horarioMedicao: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2D3748',
    margin: 10
  },



});