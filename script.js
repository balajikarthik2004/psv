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
    // Calculate the offset based on the index
    const offset = -index * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop to first slide if at the end
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to last slide if at the beginning
    showSlide(currentIndex);
}

// Optional: Automatically go to the next slide every 5 seconds
setInterval(nextSlide, 5000);