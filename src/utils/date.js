const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
export const getMonthName = (month) => {
  return months[month];
};

export const getTommorrow = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date;
};

export const getDateFormated = (date) => {
  return `${date.getUTCDate()} de ${getMonthName(
    date.getMonth()
  )} del ${date.getFullYear()}`;
};
