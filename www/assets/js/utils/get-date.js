export default function getDate(inputDate) {
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
