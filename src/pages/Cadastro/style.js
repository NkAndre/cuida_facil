import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  avatarContainer: {
    alignSelf: 'center',
    marginBottom: 10,
    position: 'relative', 
  },
  cameraIconContainer: {
  position: 'absolute',
  bottom: 0,
  right: 0,
  backgroundColor: '#87CEFA',
  borderRadius: 20,
  width: 32,
  height: 32,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: '#fff',
},

  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50, // Deixa redonda
    alignSelf: 'center',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 60,
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
    fontWeight: 'bold',
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
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },

 // Overlay escuro ao fundo
modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.55)',
  justifyContent: 'center',
  alignItems: 'center',
},

// Card do modal
viewModal: {
  backgroundColor: '#fff',
  padding: 28,
  paddingBottom: 20,
  borderRadius: 24,
  width: '88%',
  gap: 10,
},

modalTitle: {
  fontSize: 16,
  fontWeight: '600',
  color: '#111',
  marginBottom: 2,
},

modalSubtitle: {
  fontSize: 13,
  color: '#888',
  marginBottom: 14,
},

// Cada linha (câmera / galeria)
inputModal: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 14,
  paddingVertical: 14,
  paddingHorizontal: 16,
  borderRadius: 14,
  borderWidth: 0.5,
  borderColor: '#ddd',
  backgroundColor: '#fff',
},

// Ícone com fundo colorido
modalIconBox: {
  width: 42,
  height: 42,
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
},

modalIconBoxCamera: {
  backgroundColor: '#E6F1FB',
},

modalIconBoxGaleria: {
  backgroundColor: '#EAF3DE',
},

// Texto dentro de cada opção
buttonModalText: {
  fontSize: 15,
  fontWeight: '600',
  color: '#111',
},

buttonModalSubtext: {
  fontSize: 12,
  color: '#888',
},

// Botão cancelar
modalCancelButton: {
  paddingVertical: 13,
  borderRadius: 14,
  borderWidth: 0.5,
  borderColor: '#ddd',
  backgroundColor: '#f5f5f5',
  alignItems: 'center',
  marginTop: 4,
},

modalCancelText: {
  fontSize: 15,
  fontWeight: '500',
  color: '#666',
},
});