function placeholder(len) {
  return Array(len).join('█');
}

export default function getInterval(inputStartDate, inputEndDate) {
  if (!inputStartDate || !inputEndDate) {
    return `${placeholder(2)}:${placeholder(2)} - ${placeholder(2)}:${placeholder(2)}`;
  }

  const startDate = new Date(`${inputStartDate}+01:00`);
  const endDate = new Date(`${inputEndDate}+01:00`);

  const startHours = `${(startDate.getHours() < 10) ? '0' : ''}${startDate.getHours()}`;
  const startMinutes = `${(startDate.getMinutes() < 10) ? '0' : ''}${startDate.getMinutes()}`;

  const endHours = `${(endDate.getHours() < 10) ? '0' : ''}${endDate.getHours()}`;
  const endMinutes = `${(endDate.getMinutes() < 10) ? '0' : ''}${endDate.getMinutes()}`;

  return `${startHours}:${startMinutes} - ${endHours}:${endMinutes}`;
}
