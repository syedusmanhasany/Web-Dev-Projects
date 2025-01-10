const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const heroImage = document.querySelector('.hero');
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const navLinks = document.querySelectorAll('.nav-opt a');
const navOpt = document.querySelector('.nav-opt');
let currentIndex = 0;

const testimonial_slide = document.querySelectorAll(".testimonial-slide");
const testimonial_dot = document.querySelectorAll(".testimonial-dot");

let currentSlide = 0;

function showSlide(index) {
    const offset = -index * 100;
    testimonial_slide.forEach((testimonial_slide) => {
        testimonial_slide.style.transform = `translateX(${offset}%)`;
    });

    testimonial_dot.forEach((testimonial_dot, i) => {
        testimonial_dot.classList.toggle("active", i === index);
    });
}

testimonial_dot.forEach((testimonial_dot, i) => {
    testimonial_dot.addEventListener("click", () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide);

menuToggle.addEventListener('click', () => {
    navOpt.classList.toggle('active');
});

// Highlight active link on scroll
function updateActiveLink() {
    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href');
        if (sectionId.startsWith('#')) {
            const section = document.querySelector(sectionId);
            if (section && section.getBoundingClientRect().top <= 100 && section.getBoundingClientRect().bottom > 100) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// Slider with fade animation
const images = document.querySelectorAll('.slides img');

function changeSlide() {
    images.forEach(img => img.classList.remove('active'));
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
    updateDots();
}

setInterval(changeSlide, 3000);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const heroBottom = heroImage.getBoundingClientRect().bottom;

    if (heroBottom <= 500) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Dots click event for manual slide control
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        images.forEach(img => img.classList.remove('active'));
        currentIndex = index;
        images[currentIndex].classList.add('active');
        updateDots();
    });
});

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Ensure dots are updated with auto-slide
setInterval(() => {
    updateDots();
}, 4000);
