import { simpleClock } from './scripts/simpleClock.js';
const { updatePlaceholder } = simpleClock;

window.addEventListener('DOMContentLoaded', () => {
  updatePlaceholder(simpleClock.formatedTime());

  setInterval(() => {
    updatePlaceholder(simpleClock.formatedTime());
  }, 1000);
});
