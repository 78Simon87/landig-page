const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".list");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav_");
});

