// script.js

export const classificarGlicemia = (valor, tipo) => {
  const v = parseFloat(valor);
  
  if (tipo === "Pós-jejum") {
    if (v < 100) return { label: "Normal", style: "nivelGliN" };
    if (v >= 100 && v < 126) return { label: "Pré-diabética", style: "nivelGliPD" };
    return { label: "Diabética", style: "nivelGliD" };
  } 
  
  
  if (v < 140) return { label: "Normal", style: "nivelGliN" };
  if (v >= 140 && v < 200) return { label: "Pré-diabética", style: "nivelGliPD" };
  return { label: "Diabética", style: "nivelGliD" };
};

export const obterHorarioAtual = () => {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  return `${horas}:${minutos}`;

  
};

export const obterDataAtual = () => {
  const agora = new Date();
  return agora.toLocaleDateString('pt-BR'); // Retorna "31/03/2026"
};