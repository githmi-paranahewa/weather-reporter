export function changeDateFormat(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'short', day: '2-digit', month: 'short' };
  return date.toLocaleDateString('en-GB', options);
}



