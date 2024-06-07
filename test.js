'use strict'

let btnRight = document.querySelector('.accessories__slider-next');
let btnLeft  = document.querySelector('.accessories__slider-prev');
let slider   = document.querySelector('.accessories__slider');

// индекс текущего изображения


// подписались насобытие кнопки

let slides = document.querySelectorAll('.accessories__slider .slide'); // Обязательно добавьте класс "slide" к каждому изображению
let slideWidth = slides[0].clientWidth;

// Клонируем первый и последний слайды
let firstClone = slides[0].cloneNode(true);
let lastClone = slides[slides.length - 1].cloneNode(true);
let secondClone = slides[1].cloneNode(true);
let secondLastClone = slides[slides.length - 2].cloneNode(true);
let thirdClone = slides[2].cloneNode(true);
let thirdLastClone = slides[slides.length - 3].cloneNode(true);
let fourthClone = slides[3].cloneNode(true);
let fourthLastClone = slides[slides.length - 4].cloneNode(true);
let fivthClone = slides[4].cloneNode(true);
let fivthLastClone = slides[slides.length - 5].cloneNode(true);
let sixthClone = slides[5].cloneNode(true);
let sixthLastClone = slides[slides.length - 6].cloneNode(true);
let seventhClone = slides[6].cloneNode(true);
let seventhLastClone = slides[slides.length - 7].cloneNode(true);
let eigthClone = slides[0].cloneNode(true);
let eigthLastClone = slides[slides.length - 1].cloneNode(true);
let ninthClone = slides[1].cloneNode(true);
let ninthLastClone = slides[slides.length - 2].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
secondClone.id = 'second-clone';
secondLastClone.id = 'second-last-clone';
thirdClone.id = 'third-clone';
thirdLastClone.id = 'third-last-clone';
fourthClone.id = 'fourth-clone';
fourthLastClone.id = 'fourth-last-clone';
fivthClone.id = 'fivth-clone';
fivthLastClone.id = 'fivth-last-clone';
sixthClone.id = 'sixth-clone';
sixthLastClone.id = 'sixth-last-clone';
seventhClone.id = 'seventh-clone';
seventhLastClone.id = 'seventh-last-clone';
eigthClone.id = 'eigth-clone';
eigthLastClone.id = 'eigth-last-clone';
ninthClone.id = 'ninth-clone';
ninthLastClone.id = 'ninth-last-clone';

slider.append(firstClone);
slider.append(secondClone);
slider.append(thirdClone);
slider.append(fourthClone);
slider.append(fivthClone);
slider.append(sixthClone);
slider.append(seventhClone);
slider.append(eigthClone);
slider.append(ninthClone);
slider.prepend(lastClone);
slider.prepend(secondLastClone);
slider.prepend(thirdLastClone);
slider.prepend(fourthLastClone);
slider.prepend(fivthLastClone);
slider.prepend(sixthLastClone);
slider.prepend(seventhLastClone);
slider.prepend(eigthLastClone);
slider.prepend(ninthLastClone);

let viewOffSet = 8; // Начинаем со второго элемента (1), так как первый элемент — это клон последнего
slider.style.transform = `translateX(${-268.87 * viewOffSet}px)`;

btnRight.addEventListener('click', () => {
    if (viewOffSet >= slides.length + 9) return; // Учитываем клонированные элементы
    viewOffSet++;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(${-268.87 * viewOffSet}px)`;
    slider.addEventListener('transitionend', checkClones);
});

btnLeft.addEventListener('click', () => {
    if (viewOffSet <= 0) return;
    viewOffSet--;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(${-268.87 * viewOffSet}px)`;
    slider.addEventListener('transitionend', checkClones);
});

function checkClones() {
    if (slider.children[viewOffSet].id === firstClone.id) {
        slider.style.transition = 'none';
        viewOffSet = 10;
        slider.style.transform = `translateX(${-268.87 * viewOffSet}px)`;
    }
    if (slider.children[viewOffSet].id === ninthLastClone.id) {
        slider.style.transition = 'none';
        viewOffSet = slides.length-1;
        slider.style.transform = `translateX(${-268.87 * viewOffSet}px)`;
    }
    slider.removeEventListener('transitionend', checkClones);
}
