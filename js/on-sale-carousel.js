(function() {
    const slides = [
        '<img src="img/on-sale-carousel-1.jpg" alt="cello">',
        '<img src="img/on-sale-carousel-2.jpg" alt"guitar">',
        '<img src="img/on-sale-carousel-3.jpg" alt"drum">',
        '<img src="img/on-sale-carousel-4.jpg" alt"guitar">'
    ]

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.on-sale-slide-container');
        slideContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide () {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide ();
    }

    function prevSlide () {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide ();
    }

    setInterval(nextSlide, 3000);
    showCurrentSlide ();

    const btnNext = document.querySelector('.on-sale-button-carousel-next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.on-sale-button-carousel-prev');
    btnPrev.addEventListener('click', prevSlide);
}) ();