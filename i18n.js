// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  pt: {
    translation: {
      configuracao: "Configuração",
      idioma: "Idioma",
      som: "Som",
      notificacaoRemedio: "Notificação de Remédio",
      notificacaoAgua: "Notificação de Água",


    privacidade: {
        titulo: "Privacidade",
        boasVindas: "Sua privacidade é nossa prioridade. garantimos que as suas informações de saúde estejam sempre protegidas.",
        dadosTitulo: "🔒 Proteção de Dados",
        dadosDesc: "Todas as suas informações de saúde (como glicemia, IMC e exames) são armazenadas de forma segura e criptografada.",
        controleTitulo: "🕵️‍♂️ Controle Total",
        controleDesc: "Os dados pertencem exclusivamente a você. O aplicativo não compartilha suas informações médicas com terceiros sem sua autorização expressa.",
        permissoesTitulo: "📱 Permissões do Aplicativo",
        permissoesDesc: "Solicitamos acesso à sua localização apenas para a função de Emergência (ajudando a encontrar postos de saúde próximos) e notificações para os lembretes de remédios e água.",
        exclusaoTitulo: "🧼 Exclusão de Conta",
        exclusaoDesc: "Você tem a liberdade de apagar seu perfil e todos os seus registros do nosso banco de dados a qualquer momento, diretamente pelas configurações.",
        termosTitulo: "📜 Termos de Uso",
        termosDesc: "Ao utilizar o Cuida Fácil, você concorda com nossas diretrizes de uso responsável e focado no bem-estar e monitoramento pessoal."
      }}
  },
  en: {
    translation: {
      configuracao: "Settings",
      idioma: "Language",
      som: "Sound",
      notificacaoRemedio: "Medicine Notification",
      notificacaoAgua: "Water Notification"
    ,

    privacidade: {
        titulo: "Privacy",
        boasVindas: "Your privacy is our priority. We ensure that your health information is always protected.",
        dadosTitulo: "🔒 Data Protection",
        dadosDesc: "All your health information (such as blood glucose, BMI, and tests) is securely stored and encrypted.",
        controleTitulo: "🕵️‍♂️ Total Control",
        controleDesc: "The data belongs exclusively to you. The app does not share your medical information with third parties without your express authorization.",
        permissoesTitulo: "📱 App Permissions",
        permissoesDesc: "We request access to your location only for the Emergency function (helping to find nearby health centers) and notifications for medicine and water reminders.",
        exclusaoTitulo: "🧼 Account Deletion",
        exclusaoDesc: "You have the freedom to delete your profile and all your records from our database at any time, directly through the settings.",
        termosTitulo: "📜 Terms of Use",
        termosDesc: "By using Cuida Fácil, you agree to our guidelines for responsible use focused on well-being and personal monitoring."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // 
    }
  });

export default i18n;