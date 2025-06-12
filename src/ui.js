import { changeDateFormat } from './utils.js';
import { elements } from './dom.js';


export function updateCurrentWeather(weatherData) {
  elements.cityTxt.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
  elements.currentDateTxt.textContent = changeDateFormat(weatherData.location.localtime.split(' ')[0]);
  elements.weatherSummaryImg.src = `https:${weatherData.current.condition.icon}`.replace('64x64', '128x128');
  elements.weatherSummaryImg.alt = weatherData.current.condition.text;
  elements.tempTxt.textContent = `${weatherData.current.temp_c} °C`;
  elements.conditionTxt.textContent = weatherData.current.condition.text;
  elements.humidityValueTxt.textContent = `${weatherData.current.humidity}%`;
  elements.windValueTxt.textContent = `${weatherData.current.wind_kph} km/h`;
  elements.uvIndexTxt.textContent = weatherData.current.uv;
}

export function clearForecast() {
  elements.forecastItemsContainer.innerHTML = '';
}


export function renderForecast(forecastDays) {
  clearForecast();
  const template = elements.forecastItemTemplate;

 
  forecastDays.slice(1).forEach((day) => {
    const clone = template.cloneNode(true);
    clone.style.display = '';
    clone.classList.remove('forecast-item-template');

    clone.querySelector('.forecast-item-date').textContent = changeDateFormat(day.date);
    const img = clone.querySelector('.forecast-item-img');
    img.src = `https:${day.day.condition.icon}`;
    img.alt = day.day.condition.text;
    clone.querySelector('.forecast-item-temp').textContent = `${day.day.avgtemp_c} °C`;

    elements.forecastItemsContainer.appendChild(clone);
  });
}