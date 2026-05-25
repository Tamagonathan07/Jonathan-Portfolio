/* TYPING EFFECT */
const typing = document.querySelector(".typing");
const words = [
    "IT Support Specialist",
    "Technopreneur",
    "Digital Solutions Builder",
    "Automation Enthusiast"
];

let i = 0;
let j = 0;
let deleting = false;

function typeEffect() {
    typing.textContent = words[i].slice(0, j);

    if (!deleting && j < words[i].length) {
        j++;
    } else if (deleting && j > 0) {
        j--;
    } else {
        deleting = !deleting;
        if (!deleting) i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, deleting ? 80 : 120);
}
typeEffect();

/* SCROLL ANIMATIONS */
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

/* LIGHT/DARK MODE */
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});
