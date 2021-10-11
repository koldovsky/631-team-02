const slides = [
  '<img src="img/electric_guitar_RB500.jpg" alt="electric_guitar_RB500">',
  '<img src="img/electric_guitar_ER100.jpg" alt="electric_guitar_ER100">',
];
let currentSlide = 0;
function showCurrentSlide() {
  const slideContainer = document.querySelector(".carusel_1 .big_image");
  slideContainer.innerHTML = slides[currentSlide];
}
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) currentSlide = 0;
  showCurrentSlide();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  showCurrentSlide();
}

const btnNext = document.querySelector(".btnNext");
btnNext.addEventListener("click", nextSlide);
const btnPrev = document.querySelector(".btnPrev");
btnPrev.addEventListener("click", prevSlide);
showCurrentSlide();

const smallSlides = [
  '<img src="img/electric_guitar_RB500_small.jpg" alt="Preview Raven Bee RB500 Exotic Style Guitar">',
  '<img src="img/electric_guitar_ER100_small.jpg" alt="Preview Dickson Studio ER100 Electric Guitar">',
];
let currentSmallSlide = 0;
function showSmallSlide() {
  const slideSmallContainer = document.querySelector(".images .small_image");
  slideSmallContainer.innerHTML = smallSlides[currentSmallSlide];
}
function nextSmallSlide() {
  currentSmallSlide++;
  if (currentSmallSlide >= smallSlides.length) currentSmallSlide = 0;
  showSmallSlide();
}

setInterval(nextSmallSlide, 1000);
showSmallSlide();
