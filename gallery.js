// const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');


function handleClick(e) {
  const src = e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  overlay.classList.add('open');
}

function close() {
  overlay.classList.remove('open');
}

const items = document.querySelectorAll('.item');
items.forEach(item => item.addEventListener('click', handleClick));
overlayClose.addEventListener('click', close);


// closes image with esc
window.onkeyup = function (event) {
  if (event.keyCode == 27) {
   window.close();
  }
 }
//close image with click outside of image
 overlay.addEventListener('click',close)