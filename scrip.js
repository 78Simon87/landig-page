const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".list");

navToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevenir propagación para que no cierre de inmediato
  navMenu.classList.toggle("nav_");
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove("nav_");
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contacto");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevenir el envío normal (opcional si usas backend real)

    // Verifica si el formulario es válido con las restricciones HTML
    if (form.checkValidity()) {
      alert("✅ Tu información ha sido enviada correctamente.");

      form.reset(); // Limpia el formulario

      // Redirige después de un pequeño delay
      setTimeout(() => {
        window.location.href = "/"; // Cambia esto si quieres redirigir a otra ruta
      }, 1000);
    } else {
      alert("❌ Por favor completa todos los campos requeridos.");
    }
  });
});



document.querySelector("#numero").addEventListener("input", function() {
    let input = this;
    let value = input.value.replace(/\D/g, '');  // Eliminar caracteres no numéricos
    if (value.length < 10) {
      input.setCustomValidity("Por favor, ingresa un número de teléfono válido.");
    } else {
      input.setCustomValidity("");
    }
});
