let filmCarousel = document.querySelector('.film-carousel');
let prevArrow = document.querySelector('.prev-arrow');
let nextArrow = document.querySelector('.next-arrow');
let filmBoxes = document.querySelectorAll('.film-box');

let currentIndex = 0;

function showFilm(index) {
    filmBoxes.forEach((filmBox, i) => {
        filmBox.style.display = i === index ? 'block' : 'none';
    });
}

prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + filmBoxes.length) % filmBoxes.length;
    showFilm(currentIndex);
});

nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % filmBoxes.length;
    showFilm(currentIndex);
});

// Show the initial film
showFilm(currentIndex);


