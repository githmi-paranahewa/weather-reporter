import { elements } from './dom.js';

export function showLoading() {
  elements.loadingSpinner.classList.remove('hidden');
  elements.weatherSection.classList.add('hidden');
}

export function hideLoading() {
  elements.loadingSpinner.classList.add('hidden');
  elements.weatherSection.classList.remove('hidden');
}
