export const getHour = () => {
  const now = new Date();
  const hour = now.getHours();
  return hour;
};

export const getDayOfWeek = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  return dayOfWeek;
};
