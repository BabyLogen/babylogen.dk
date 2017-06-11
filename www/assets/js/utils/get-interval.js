export default function getInterval(inputStartDate, inputEndDate) {
  const startDate = new Date(inputStartDate);
  const endDate = new Date(inputEndDate);

  const startHours = `${(startDate.getHours() < 10) ? '0' : ''}${startDate.getHours()}`;
  const startMinutes = `${(startDate.getMinutes() < 10) ? '0' : ''}${startDate.getMinutes()}`;

  const endHours = `${(endDate.getHours() < 10) ? '0' : ''}${endDate.getHours()}`;
  const endMinutes = `${(endDate.getMinutes() < 10) ? '0' : ''}${endDate.getMinutes()}`;

  return `${startHours}:${startMinutes} - ${endHours}:${endMinutes}`;
}
