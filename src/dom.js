
export const selectors = {
  cityTxt: '.city-txt',
  currentDateTxt: '.current-date-txt',
  tempTxt: '.temp-txt',
  conditionTxt: '.condition-txt',
  weatherSummaryImg: '.weather-summary-img',
  humidityValueTxt: '.humidity-value-txt',
  windValueTxt: '.wind-value-txt',
  uvIndexTxt: '.uv-index-txt',
  forecastItemsContainer: '.forecast-items-container',
  forecastItemTemplate: '.forecast-item-template',
  citySearch:'.city-search',
  searchBtn:'.search-btn'
};

export const elements = {};
for (const key in selectors) {
  elements[key] = document.querySelector(selectors[key]);
}
