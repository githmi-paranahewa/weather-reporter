const apiUrl = import.meta.env.VITE_WEATHER_API_URL;
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeatherData(city) {
  const url = `${apiUrl}?key=${apiKey}&q=${city}&days=8`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }
  return response.json();
}