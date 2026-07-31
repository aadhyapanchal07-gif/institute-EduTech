/*==================================================
        EDUTECH INSTITUTE - SCRIPT.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
        MOBILE MENU
    =====================================*/

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", () => {

            navbar.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navbar.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }

        });

    }

    /*=====================================
        CLOSE MENU AFTER CLICK
    =====================================*/

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navbar) {

                navbar.classList.remove("active");

            }

            if (menuBtn) {

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            }

        });

    });

    /*=====================================
        ESC KEY CLOSE MENU
    =====================================*/

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            navbar.classList.remove("active");

            if (menuBtn) {

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            }

        }

    });

    /*=====================================
        STICKY HEADER
    =====================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /*=====================================
        ACTIVE MENU
    =====================================*/

    const sections = document.querySelectorAll("section[id]");

    function activeMenu() {

        let scrollY = window.pageYOffset;

        sections.forEach(current => {

            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;

            let sectionId = current.getAttribute("id");

            const navLink = document.querySelector(
                '.navbar a[href*=' + sectionId + ']'
            );

            if (!navLink) return;

            if (scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight) {

                navLink.classList.add("active");

            } else {

                navLink.classList.remove("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

    /*=====================================
        SMOOTH SCROLL
    =====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                window.scrollTo({

                    top: target.offsetTop - 80,

                    behavior: "smooth"

                });

            }

        });

    });

    /*=====================================
        SCROLL TO TOP BUTTON
    =====================================*/

    const topBtn = document.querySelector(".top-btn");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                topBtn.classList.add("show");

            } else {

                topBtn.classList.remove("show");

            }

        });

        topBtn.addEventListener("click", (e) => {

            e.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*=====================================
        SCROLL ANIMATION
    =====================================*/

    const revealElements = document.querySelectorAll(

        ".feature-card, .course-card, .gallery-item, .info-box, .contact-form, .contact-info"

    );

    function reveal() {

        revealElements.forEach(el => {

            const windowHeight = window.innerHeight;

            const revealTop = el.getBoundingClientRect().top;

            if (revealTop < windowHeight - 100) {

                el.style.opacity = "1";
                el.style.transform = "translateY(0)";

            }

        });

    }

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all .7s ease";

    });

    reveal();

    window.addEventListener("scroll", reveal);

    /*=====================================
        CONTACT FORM
    =====================================*/

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const requiredFields = form.querySelectorAll(

                "input[required], textarea[required]"

            );

            let valid = true;

            requiredFields.forEach(field => {

                if (field.value.trim() === "") {

                    field.style.border = "2px solid red";

                    valid = false;

                } else {

                    field.style.border = "2px solid green";

                }

            });

            if (valid) {

                alert("Thank you! Your enquiry has been submitted successfully.");

                form.reset();

                requiredFields.forEach(field => {

                    field.style.border = "";

                });

            } else {

                alert("Please fill all required fields.");

            }

        });

    }

    /*=====================================
        IMAGE HOVER EFFECT
    =====================================*/

    const galleryImages = document.querySelectorAll(".gallery-item img");

    galleryImages.forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.08)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });

   

});
