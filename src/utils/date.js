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

export const lessThan24Hours = (date) => {
  const leftHours = milisecondsToHours(new Date() - new Date(date));
  return leftHours < 24 ? true : false;
};

export const milisecondsToHours = (miliseconds) => {
  return Math.floor(miliseconds / (60000 * 60));
};

const milisecondsToMinutes = (miliseconds) => {
  return Math.floor(miliseconds / 60000);
};
