document.getElementById("year").textContent =
    new Date().getFullYear();

// Smooth scrolling for navigation links (desktop + mobile menu)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile menu after a link is clicked
        const mobileMenu = document.getElementById("mobile-menu");
        const hamburgerBtn = document.getElementById("hamburger-btn");
        if (mobileMenu && mobileMenu.classList.contains("open")) {
            mobileMenu.classList.remove("open");
            hamburgerBtn.classList.remove("active");
            hamburgerBtn.setAttribute("aria-expanded", "false");
        }
    });
});

// Theme toggle
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

// Hamburger menu toggle
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburgerBtn.classList.toggle("active", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Close mobile menu if clicking outside of it
document.addEventListener("click", (e) => {
    const isClickInside = mobileMenu.contains(e.target) || hamburgerBtn.contains(e.target);
    if (!isClickInside && mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        hamburgerBtn.classList.remove("active");
        hamburgerBtn.setAttribute("aria-expanded", "false");
    }
});

// Typewriter effect under the profile picture
const roles = [
    "Aspiring AI & Machine Learning Engineer",
    "Certified Project Manager",
    "Digital Product Manager",
    "Web Developer"
];

const typingEl = document.getElementById("typing");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1400); // pause before deleting
            return;
        }
    } else {
        typingEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    const speed = isDeleting ? 40 : 80;
    setTimeout(typeLoop, speed);
}

if (typingEl) {
    typeLoop();
}

// ===== Back To Top =====

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        backToTop.style.display = "flex";
    }else{
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ===== Scroll Reveal =====

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();