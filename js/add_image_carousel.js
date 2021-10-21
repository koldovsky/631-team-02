let currentBigSlide = 0;
let currentSmallSlide = 1;
function showCurrentBigSlide() {
  const slideContainer = document.querySelector(".carusel_1 .big_image");
  const slideSmallContainer = document.querySelector(".small_image");
  slideContainer.innerHTML = localStorage.getItem("addimage").split(",")[
    currentBigSlide
  ];
  slideSmallContainer.innerHTML = localStorage.getItem("addimage").split(",")[
    currentSmallSlide
  ];
}

function nextBigSlide() {
  currentBigSlide++;
  currentSmallSlide++;
  if (currentBigSlide >= localStorage.getItem("addimage").split(",").length)
    currentBigSlide = 0;
  if (currentSmallSlide >= localStorage.getItem("addimage").split(",").length)
    currentSmallSlide = 0;
  showCurrentBigSlide();
}

function prevBigSlide() {
  currentBigSlide--;
  currentSmallSlide--;
  if (currentBigSlide < 0)
    currentBigSlide = localStorage.getItem("addimage").split(",").length - 1;
  if (currentSmallSlide < 0)
    currentSmallSlide = localStorage.getItem("addimage").split(",").length - 1;
  showCurrentBigSlide();
}
