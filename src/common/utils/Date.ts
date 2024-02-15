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
