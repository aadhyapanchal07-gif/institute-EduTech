/* ==========================================
   EDUTECH INSTITUTE - SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // ELEMENTS
    // ===============================

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");
    const menuIcon = document.querySelector(".menu-btn i");
    const navLinks = document.querySelectorAll(".navbar a");
    const header = document.querySelector("header");

    // ===============================
    // MOBILE MENU
    // ===============================

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {

            navbar.classList.toggle("active");

            if (navbar.classList.contains("active")) {

                menuIcon.classList.remove("fa-bars");
                menuIcon.classList.add("fa-times");

            } else {

                menuIcon.classList.remove("fa-times");
                menuIcon.classList.add("fa-bars");

            }

        });

    }

    // ===============================
    // CLOSE MENU AFTER CLICK
    // ===============================

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 991) {

                navbar.classList.remove("active");

                menuIcon.classList.remove("fa-times");
                menuIcon.classList.add("fa-bars");

            }

        });

    });

    // ===============================
    // CLOSE MENU WHEN CLICKING OUTSIDE
    // ===============================

    document.addEventListener("click", function (e) {

        if (
            navbar &&
            menuBtn &&
            !navbar.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {

            navbar.classList.remove("active");

            if (menuIcon) {

                menuIcon.classList.remove("fa-times");
                menuIcon.classList.add("fa-bars");

            }

        }

    });

    // ===============================
    // STICKY HEADER EFFECT
    // ===============================

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
            header.style.background = "#ffffff";

        } else {

            header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";
            header.style.background = "#ffffff";

        }

    });

    // ===============================
    // ACTIVE MENU LINK
    // ===============================

    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(function (link) {

        const file = link.getAttribute("href");

        if (file === currentPage || (currentPage === "" && file === "index.html")) {

            navLinks.forEach(function (l) {

                l.classList.remove("active");

            });

            link.classList.add("active");

        }

    });

    // ===============================
    // FADE-IN ANIMATION
    // ===============================

    const animatedElements = document.querySelectorAll(
        ".feature-card, .course-card, .testimonial-card, .gallery-item, .about-content, .about-image, .contact-form, .contact-info"
    );

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    animatedElements.forEach(function (el) {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all .8s ease";

        observer.observe(el);

    });

    // ===============================
    // BUTTON RIPPLE EFFECT
    // ===============================

    const buttons = document.querySelectorAll(".btn, .btn-outline, .read-btn, .apply-btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform = "scale(.95)";

            setTimeout(function () {

                button.style.transform = "";

            }, 150);

        });

    });

    // ===============================
    // SCROLL TO TOP BUTTON
    // ===============================

    const topButton = document.createElement("button");

    topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

    topButton.className = "scrollTop";

    document.body.appendChild(topButton);

    topButton.style.position = "fixed";
    topButton.style.bottom = "25px";
    topButton.style.right = "25px";
    topButton.style.width = "50px";
    topButton.style.height = "50px";
    topButton.style.border = "none";
    topButton.style.borderRadius = "50%";
    topButton.style.background = "#1E3A8A";
    topButton.style.color = "#fff";
    topButton.style.fontSize = "18px";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";
    topButton.style.zIndex = "9999";
    topButton.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";
    topButton.style.transition = ".3s";

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("mouseenter", function () {

        topButton.style.background = "#2563EB";

    });

    topButton.addEventListener("mouseleave", function () {

        topButton.style.background = "#1E3A8A";

    });

    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // ===============================
    // RESET MENU ON WINDOW RESIZE
    // ===============================

    window.addEventListener("resize", function () {

        if (window.innerWidth > 991) {

            navbar.classList.remove("active");

            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");

        }

    });

});