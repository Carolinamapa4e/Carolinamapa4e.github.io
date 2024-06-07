const slider = document.querySelector('.accessories__slider');
const prevButton = document.querySelector('.accessories__slider-prev');
const nextButton = document.querySelector('.accessories__slider-next');
const sliderItems = document.querySelectorAll('.accessories__slider-item');

let currentIndex = 0;
const itemsToShow = 3;

function showSlide() {
    for (let i = 0; i < sliderItems.length; i++) {
        const index = (currentIndex + i) % sliderItems.length;
        if (i < itemsToShow) {
            sliderItems[index].style.display = 'block';
        } else {
            sliderItems[index].style.display = 'none';
        }
    }
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    showSlide();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide();
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide();
