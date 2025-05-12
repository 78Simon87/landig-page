const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".list");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav_");
});

bottonAlert.addEventListener("click", () => {
    // Redirige a otra página, por ejemplo a "pagina_destino.html"
    window.location.href = "https://landig-page-gamma.vercel.app/";
});