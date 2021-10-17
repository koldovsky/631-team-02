const slides = [
  "<img src='img/electric_guitar_RB500.jpg' alt='electric_guitar_RB500'>",
  "<img src='img/electric_guitar_ER100.jpg' alt='electric_guitar_ER100'>",
  "<img src='img/electric_guitar_TRO4506.jpg' alt='electric_guitar_TRO4506'>",
  "<img src='img/electric_guitar_RT45.jpg' alt='electric_guitar_RT45'>",
];

let currentBigSlide = 0;
let currentSmallSlide = 1;
function showCurrentBigSlide() {
  const slideContainer = document.querySelector(".carusel_1 .big_image");
  const slideSmallContainer = document.querySelector(".small_image");
  slideContainer.innerHTML = slides[currentBigSlide];
  slideSmallContainer.innerHTML = slides[currentSmallSlide];
}
function nextBigSlide() {
  currentBigSlide++;
  currentSmallSlide++;
  if (currentBigSlide >= slides.length) currentBigSlide = 0;
  if (currentSmallSlide >= slides.length) currentSmallSlide = 0;
  showCurrentBigSlide();
}

function prevBigSlide() {
  currentBigSlide--;
  currentSmallSlide--;
  if (currentBigSlide < 0) currentBigSlide = slides.length - 1;
  if (currentSmallSlide < 0) currentSmallSlide = slides.length - 1;
  showCurrentBigSlide();
}

// const btnNextSign = document.querySelector(".carusel_1 .btnNext1");
// btnNextSign.addEventListener("click", nextBigSlide);
// const btnPrevSign = document.querySelector(".carusel_1 .btnPrev1");
// btnPrevSign.addEventListener("click", prevBigSlide);
// showCurrentBigSlide();
