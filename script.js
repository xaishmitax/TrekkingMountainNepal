
// =====================================
// 1. UPDATE COPYRIGHT YEAR
// =====================================

const currentYear = document.querySelector("#currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =====================================
// 2. CLOSE MOBILE NAVBAR AFTER CLICK
// =====================================

const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");

const navbarMenu = document.querySelector("#navbarMenu");

navbarLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Check whether the mobile menu is currently open
        if (navbarMenu.classList.contains("show")) {

            const navbarCollapse = bootstrap.Collapse.getOrCreateInstance(navbarMenu);

            navbarCollapse.hide();

        }

    });

});

// =====================================
// 3. CHANGE NAVBAR WHEN SCROLLING
// =====================================

const navbar = document.querySelector(".main-navbar");

if (navbar) {
    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });
}



