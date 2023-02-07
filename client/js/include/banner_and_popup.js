const popup = document.getElementById('home__popup-wrap');
const popupClose = document.getElementById('btn--close');

popupClose.onclick = function() {
  popup.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = 'none';
  }
}