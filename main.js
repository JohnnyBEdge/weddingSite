var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.img');
const overlayClose = document.querySelector('.close');

function generateHTML([h,v]){
  return `
    <div class="item h${h} v${v}">
      <img src="images/${randomNumber(20)}.jpg">
      <div class="item__overlay">
        <button>View → </button>
      </div>
  `;
}

function randomNumber(limit){
  return Math.floor(Math.random()*limit)+1;
}

const digit = Array.from(){length: 50}, () => 
  [randomNumber(4), randomNumber(4)];
