import numeral from "numeral";
import "numeral/locales/pt-br";

numeral.locale("pt-br");

export const formatCurrency = (value) => {
  if (!value) return "";
  
  const num = Number(value.toString().replace(/\D/g, "")) / 100;

  return numeral(num).format("$ 0,0.00");
};