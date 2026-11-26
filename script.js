// Keep the portfolio usable without JavaScript.
// Close other project details when a new one is opened.
const details = document.querySelectorAll('.project details');
details.forEach(item => item.addEventListener('toggle', () => {
  if (item.open) details.forEach(other => { if (other !== item) other.open = false; });
}));
