function placeholder(len) {
  return Array(len).join('█');
}

export default function getDate(inputDate) {
  if (!inputDate) {
    return `${placeholder(3)} ${placeholder(8)} ${placeholder(4)}`;
  }

  const startDate = new Date(inputDate);
  const year = startDate.getFullYear();
  const date = startDate.getDate();
  const month = [
    'januar',
    'februar',
    'marts',
    'april',
    'maj',
    'juni',
    'juli',
    'august',
    'september',
    'oktober',
    'november',
    'december',
  ][startDate.getMonth()];
  return `${date}. ${month} ${year}`;
}
