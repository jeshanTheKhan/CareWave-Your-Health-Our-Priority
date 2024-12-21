document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    // Carousel functionality
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const items = carousel.querySelectorAll('.carousel-item');
        let currentItem = 0;

        function showNextItem() {
            items[currentItem].classList.remove('active');
            currentItem = (currentItem + 1) % items.length;
            items[currentItem].classList.add('active');
        }

        // Show the first item
        items[0].classList.add('active');

        // Change item every 5 seconds
        setInterval(showNextItem, 5000);
    });

    // Doctor Carousel
    const doctorCarousel = document.querySelector('.doctor-carousel');
    const carouselWrapper = doctorCarousel.querySelector('.carousel-wrapper');
    const prevBtn = doctorCarousel.querySelector('.prev-btn');
    const nextBtn = doctorCarousel.querySelector('.next-btn');
    const doctorItems = doctorCarousel.querySelectorAll('.doctor-item');

    let currentIndex = 0;
    const totalItems = doctorItems.length;

    function updateCarousel() {
        const itemWidth = doctorItems[0].offsetWidth;
        carouselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function showPrevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    function showNextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    prevBtn.addEventListener('click', showPrevItem);
    nextBtn.addEventListener('click', showNextItem);

    // Auto-slide functionality
    let autoSlideInterval = setInterval(showNextItem, 5000);

    // Pause on hover
    doctorCarousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    doctorCarousel.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(showNextItem, 5000);
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        contactForm.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature, .carousel-item, .dept-slide, .doctor-item');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate');
            }
        });
    };

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Add animation classes to elements
    document.querySelectorAll('.feature, .carousel-item, .dept-slide, .doctor-item').forEach(element => {
        element.classList.add('animate-on-scroll');
    });
});