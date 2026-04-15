// Hamburger Menu
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        const menu = document.getElementById('navMenu');
        const hamburger = document.querySelector('.hamburger');
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Video Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.video-slide');
const sliderContainer = document.getElementById('videoSlider');

function updateSlider() {
    sliderContainer.style.transform = `translateY(-${currentSlide * 100}%)`;
    slides.forEach((slide, index) => {
        const video = slide.querySelector('video');
        if (index === currentSlide) {
            video.currentTime = 0;
            video.play().catch(() => {});
        } else {
            video.pause();
            video.currentTime = 0;
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

window.addEventListener('load', () => {
    if (slides.length > 0) updateSlider();
});

// WhatsApp Booking Function
function sendToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value || "Not provided";
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value || "No message";

    const whatsappMessage = 
`🌸 *New Appointment Request from Rk Beauty lounge* 🌸

*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}
*Gender:* ${gender}
*Service:* ${service}
*Date:* ${date}
*Time:* ${time}

*Message:*
${message}

Please confirm my booking. Thank you! 💇‍♀️`;

    const phoneNumber = "+92 344 4038369";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
    event.target.reset();
    alert("Thank you! Redirecting to WhatsApp...");
}

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Hero load animation
window.addEventListener('load', () => {
    document.querySelectorAll('.hero .animate-on-scroll').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 300);
    });
});
