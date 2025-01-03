document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.warn(`Target section for ${link.getAttribute('href')} not found!`);
            }
        });
    });

    // Typing Effect (for Home Section)
    const typingElement = document.querySelector('.profile-content p');
    const textToType = 'A passionate engineering student who loves innovation and Technologies';
    let index = 0;
    const typingSpeed = 100; // Typing speed in milliseconds

    function typeWriter() {
        if (typingElement && index < textToType.length) {
            typingElement.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    if (typingElement && textToType) {
        typeWriter();
    } else {
        console.warn('Typing element or text to type not found!');
    }

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,
            once: true,
            offset: 100, // Start the animation a bit earlier
            easing: 'ease-out', // Add easing for smoother animations
        });
    } else {
        console.warn('AOS library not found!');
    }

    // Performance optimization: Scroll event throttling
    let throttleTimer;
    window.addEventListener('scroll', function () {
        if (throttleTimer) {
            clearTimeout(throttleTimer);
        }
        throttleTimer = setTimeout(function () {
            // Code to run on scroll (if needed)
            console.log('Scrolled!');
        }, 100); // Throttle delay
    });
});
