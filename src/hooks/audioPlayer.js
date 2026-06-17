import { useState, useEffect } from "react";
import { Audio } from "expo-av";

export function useAudioPlayer() {
  const [sound, setSound] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [somSelecionado, setSomSelecionado] = useState(null);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  function abrirPlayer(som) {
    setSomSelecionado(som);
    setModalVisible(true);
  }

  async function tocarAudio() {
    if (!somSelecionado) return;

    try {
      if (sound) {
        await sound.playAsync();
      } else {
        const { sound: novoSound } = await Audio.Sound.createAsync(somSelecionado.arquivo);
        setSound(novoSound);
        await novoSound.playAsync();
      }
    } catch (error) {
      console.log("Erro ao tocar áudio:", error);
    }
  }

  // Função para Pausar
  async function pausarAudio() {
    if (sound) {
      await sound.pauseAsync();
    }
  }

  // Função para Reiniciar (Replay)
  async function reiniciarAudio() {
    if (sound) {
      await sound.setPositionAsync(0);
      await sound.playAsync();
    }
  }


  async function fecharPlayer() {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
    }
    setModalVisible(false);
    setSomSelecionado(null);
  }


  return {
    modalVisible,
    somSelecionado,
    abrirPlayer,
    tocarAudio,
    pausarAudio,
    reiniciarAudio,
    fecharPlayer,
  };

}