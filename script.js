// JavaScript to toggle the navbar on mobile view
const hamburger = document.getElementById('hamburger-icon');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    // Calculate the offset for the current slide
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the start
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to the last slide
    showSlide(currentIndex);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 8000);
