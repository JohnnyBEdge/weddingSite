// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// } 

//gallery functions     
// const gallery = document.querySelector('.gallery');
// const overlay = document.querySelector('.overlay');
// const overlayImage = document.querySelector('img');
// const overlayClose = document.querySelector('.close');

// function generateHTML([h,v]){
//   return `
//     <div class="item h${h} v${v}">
//       <img src="images/${randomNumber(20)}.jpg">
//       <div class="item__overlay">
//         <button>View → </button>
//       </div>
//     </div>
//   `;
// }

// function randomNumber(limit){
//   return Math.floor(Math.random()*limit)+1;
// }
// function handleClick(e){
//   const src = e.currentTarget.querySelector('img').src;
//   overlayImage.src = src;
//   overlay.classList.add('open')
// }
// function close(){
//   overlay.classList.remove('open')
// }

// const digit = Array.from(){length: 50}, () => 
//   [randomNumber(4), randomNumber(4)].concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],]);

// const html = digits.map(generateHTML).join('');
//   gallery.innerHTML = html;

// const items = documents.querySelectorAll('.item');
// items.forEach(item => item.addEventListener('click', handleClick));
// overlayClose.addEventListener('click', close);

const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function generateHTML([h, v]) {
  return `
    <div class="item h${h} v${v}">
      <img src="images/gallery/${randomNumber(12)}.jpg">
      <div class="item__overlay">
        <button>View →</button>
      </div>
    </div>
  `;
}

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
  const src = e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  overlay.classList.add('open');
}


function close() {
  overlay.classList.remove('open');
}

const digits = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]])

const html = digits.map(generateHTML).join('');
gallery.innerHTML = html;

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close);

