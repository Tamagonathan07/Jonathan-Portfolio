const elements = document.querySelectorAll('.fade-in, .slide-up');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
