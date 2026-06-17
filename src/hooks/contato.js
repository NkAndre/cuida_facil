import { Linking } from "react-native";


export function useExternalLinks() {
 
  async function abrirLink(url) {
    try {
      const suportado = await Linking.canOpenURL(url);

      if (suportado) {
        await Linking.openURL(url);
      } else {
        console.log(`Não foi possível abrir a URL: ${url}`);
      }
    } catch (error) {
      console.log("Erro ao tentar abrir o link:", error);
    }
  }
  function abrirGithub(usuario) {
    abrirLink(`https://github.com/${usuario}`);
  }

  function abrirInstagram(usuario) {
    abrirLink(`https://www.instagram.com/${usuario}/`);
  }

  return {
    abrirLink,
    abrirGithub,
    abrirInstagram,
  };
}