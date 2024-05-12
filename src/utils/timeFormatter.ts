export const timeFormatter = (value: string) => {
  const date = new Date(value);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Add leading zeros if necessary
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  const formattedTime = `${formattedHours}:${formattedMinutes}`;
  return formattedTime;
};
