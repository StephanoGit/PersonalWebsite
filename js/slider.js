const slider = document.querySelector(".slider");
const sliderImages = document.querySelectorAll(".slider img");

const rightArrow = document.querySelector("#rightArrow");
const leftArrow = document.querySelector("#leftArrow");

let counter = 1;

const size = 816;

let sliderLen = sliderImages.length - 3;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

rightArrow.addEventListener('click', () => {
    if (counter >= sliderLen - 1) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

leftArrow.addEventListener('click', () => {
    if (counter <= 0) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slider.addEventListener("transitionend", () => {
    if (sliderImages[counter].id === 'lastClone'){
        slider.style.transition = "none";
        counter = sliderLen - 2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (sliderImages[counter+3].id === 'firstClone'){
        slider.style.transition = "none";
        counter = sliderLen - counter;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});