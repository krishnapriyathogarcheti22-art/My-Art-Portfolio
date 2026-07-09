// ===============================
// Hamburger Menu
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ===============================
// Dark Mode
// ===============================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.innerHTML = "☀️";
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = "🌙";
        }

    });

}

// ===============================
// Back To Top Button
// ===============================

const topButton = document.getElementById("topBtn");

if (topButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topButton.style.display = "flex";
        } else {
            topButton.style.display = "none";
        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ===============================
// Contact Form Validation
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        alert("🎉 Message sent successfully!");

        contactForm.reset();

    });

}

// ===============================
// Image Lightbox
// ===============================

const images = document.querySelectorAll(".gallery-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if (images.length > 0 && lightbox && lightboxImg && closeBtn) {

    images.forEach((image) => {

        image.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = image.src;

        });

    });

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }

    });

}
// ===============================
// Scroll Reveal Animation
// ===============================

const hiddenElements = document.querySelectorAll(
".hero, .gallery, .about-section, .services-container, .contact-section, .cta"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});
// ===============================
// Preloader
// ===============================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){
        preloader.style.display = "none";
    }

});
// ===============================
// Active Navigation Link
// ===============================

const currentPage = window.location.pathname.split("/").pop();

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    const href = link.getAttribute("href");

    if(href === currentPage){
        link.classList.add("active");
    }

});
// ===============================
// Typing Animation
// ===============================

const typingText = document.getElementById("typing-text");

if (typingText) {

    const text = "Bringing Imagination to Life Through Art";

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            typingText.innerHTML += text.charAt(index);

            index++;

            setTimeout(typeWriter, 80);

        }

    }

    typeWriter();

}