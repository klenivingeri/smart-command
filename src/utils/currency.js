import numeral from "numeral";
import "numeral/locales/pt-br";

numeral.locale("pt-br");

export const formatCurrency = (value) => {
  if (!value) return "";
  
  const num = Number(value.toString().replace(/\D/g, "")) / 100;

  return numeral(num).format("$ 0,0.00");
};

export const parseCurrency = (value) => {
  if (!value) return 0;

  // Remove tudo que não for número ou ponto decimal
  const num = Number(value.replace(/[^0-9,.-]/g, "").replace(",", "."));

  return Math.round(num * 100); // Converte para centavos
};