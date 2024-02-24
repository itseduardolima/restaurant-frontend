export const formatDateTime = (dateTimeString: string) => {
  const dateTime = new Date(dateTimeString);
  dateTime.setHours(dateTime.getHours() + 4);
  const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "2-digit",
      month: "long",
      hour: "2-digit",
      minute: "2-digit"
  };
  const formattedDateTime = dateTime.toLocaleString("pt-BR", options);
  return formattedDateTime;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedDay}/${formattedMonth}/${year} ás ${formattedHours}:${formattedMinutes}`;
};




