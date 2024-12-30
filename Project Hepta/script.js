let nav_btn = document.getElementById("nav-open");
let nav_close_btn = document.getElementById("nav-close");
let nav_menu = document.querySelector(".navbar-slide");

const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let currentIndex = 0;


const open_close = ()=>{
    nav_menu.classList.toggle("visible");


}

nav_btn.addEventListener("click",open_close);
nav_close_btn.addEventListener("click",open_close);


// Function to update the slider position
function updateSlider(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    document.querySelector('.dot.active').classList.remove('active');
    dots[index].classList.add('active');
}

// Click event for the right button
rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % dots.length; // Wrap around
    updateSlider(currentIndex);
});

// Click event for the left button
leftBtn.addEventListener('click',() => {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length; // Wrap around
    updateSlider(currentIndex);
});

// Dots click event
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });
});