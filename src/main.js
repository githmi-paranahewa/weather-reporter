import { fetchWeatherData } from './api.js';
import { updateCurrentWeather, renderForecast } from './ui.js';
import { elements } from './dom.js';
import { showLoading, hideLoading } from './loading.js';

let hasRetried = false;

async function updateWeather(city) {
  try {
    showLoading()
    const data = await fetchWeatherData(city);

    if (data.error) {
      alert(`API Error: ${data.error.message}`);
      return;
    }

    updateCurrentWeather(data);
    renderForecast(data.forecast.forecastday);
  } catch (err) {
    console.error(err);
    if (!hasRetried) {
      hasRetried = true;
      updateWeather('Colombo'); 
    } else {
      alert(`Failed to fetch weather data. Please try again later.`);
    }
  }finally{
    hideLoading()
  }
}

// Event listeners for search button and Enter key
elements.searchBtn.addEventListener('click', () => {
  const city = elements.citySearch.value.trim();
  if (city) {
    updateWeather(city);
    elements.citySearch.value = '';
    elements.citySearch.blur();
  }
});

elements.citySearch.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const city = elements.citySearch.value.trim();
    if (city) {
      updateWeather(city);
      elements.citySearch.value = '';
      elements.citySearch.blur();
    }
  }
});

// Initial load
updateWeather('Colombo');
