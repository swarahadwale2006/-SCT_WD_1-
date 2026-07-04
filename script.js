// ==========================
// Navbar Color Change on Scroll
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ==========================
// Mobile Menu Toggle
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==========================
// Scroll Reveal Animation
// ==========================

const revealElements = document.querySelectorAll(
    ".card, .about, .price-card, .contact"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }

    });

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// ==========================
// Initial Animation Style
// ==========================

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 0.8s ease";
});


// ==========================
// Button Click Animation
// ==========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        this.style.transform = "scale(0.95)";

        setTimeout(() => {
            this.style.transform = "";
        }, 150);

    });

});


// ==========================
// Footer Year (Optional)
// ==========================

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Nova AI. All Rights Reserved.`;
}