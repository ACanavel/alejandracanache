// Navigation
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    navMenu.classList.remove("show-menu");
}

navLink.forEach((item) => item.addEventListener("click", linkAction));

// Swipers
const homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

const newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 16,
});

// Scroll up
function scrollUp() {
    const scrollup = document.getElementById("scroll-up");
    scrollup.classList.toggle("show-scroll", this.scrollY >= 460);
}

window.addEventListener("scroll", scrollUp);

// Sections active
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add("active-link");
        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

// Scroll reveal
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
});

sr.reveal(`.home-swiper,.new-swiper, .contact__container`);
sr.reveal(`.category__data, .studie__content, .work__content, .footer__content`, {
    interval: 100,
});
sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });

// Swiper slider animation
const slides = document.querySelectorAll(".swiper-slide");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.querySelector(".home__group").classList.add("active");
            if (i === 0) {
                addTypingAnimation(titleFrontend);
                removeTypingAnimation(titleBackend);
                removeTypingAnimation(titleFullstack);
            } else if (i === 1) {
                removeTypingAnimation(titleFrontend);
                addTypingAnimation(titleBackend);
                removeTypingAnimation(titleFullstack);
            } else if (i === 2) {
                removeTypingAnimation(titleFrontend);
                removeTypingAnimation(titleBackend);
                addTypingAnimation(titleFullstack);
            }
        } else {
            slide.querySelector(".home__group").classList.remove("active");
        }
    });
}

// Change nav links color
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav__menu a");

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.style.color = index % 2 === 0 ? "black" : "white";
            });
        }
    });
});
