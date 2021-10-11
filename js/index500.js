const bigSlides = [
  "<img src='img/electric_guitar_RB500.jpg' alt='electric_guitar_RB500'>",
  "<img src='img/electric_guitar_ER100.jpg' alt='electric_guitar_ER100'>",
  "<img src='img/electric_guitar_TRO4506.jpg' alt='electric_guitar_TRO4506'>",
  "<img src='img/electric_guitar_RT45.jpg' alt='electric_guitar_RT45'>",
];
const smallSlides = [
  "<img src='img/electric_guitar_RB500_small.jpg' alt='Preview Raven Bee RB500 Exotic Style Guitar'>",
  "<img src='img/electric_guitar_ER100_small.jpg' alt='Preview Dickson Studio ER100 Electric Guitar'>",
  "<img src='img/electric_guitar_TRO4506_small.jpg' alt='Preview Dean Doe TRO4506 Electric Guitar'>",
  "<img src='img/electric_guitar_RT45_small.jpg' alt='Preview Raven Classic RT45 Electric Guitar'>",
];

let currentBigSlide = 0;
function showCurrentBigSlide() {
  const slideContainer = document.querySelector(".carusel_1 .big_image");
  //   const slideSmallContainer = document.querySelector(".images .small_image");
  slideContainer.innerHTML = bigSlides[currentBigSlide];
  //   slideSmallContainer.innerHTML = smallSlides[currentSmallSlide];
}
function nextBigSlide() {
  currentBigSlide++;
  if (currentBigSlide >= bigSlides.length) currentBigSlide = 0;
  //   currentSmallSlide = currentSlide + 1;
  //   if (currentSmallSlide >= smallSlides.length) currentSmallSlide = 0;
  showCurrentBigSlide();
}

function prevBigSlide() {
  currentBigSlide--;
  if (currentBigSlide < 0) currentBigSlide = bigSlides.length - 1;
  //   currentSmallSlide = currentSlide - 1;
  //   if (currentSmallSlide < 0) currentSmallSlide = smallSlides.length - 1;
  showCurrentBigSlide();
}

const btnNextSign = document.querySelector(".carusel_1 .btnNext");
btnNextSign.addEventListener("click", nextBigSlide);
const btnPrevSign = document.querySelector(".carusel_1 .btnPrev");
btnPrevSign.addEventListener("click", prevBigSlide);
showCurrentBigSlide();

let currentSmallSlide = 1;
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
