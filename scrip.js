const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav");

navToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevenir propagación para que no cierre de inmediato
  navMenu.classList.toggle("active");
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contacto");

  form.addEventListener("submit", () => {
    // No usar preventDefault: el formulario se enviará

    alert("✅ Tu información ha sido enviada.");
    
    // El form se enviará normalmente, pero puedes redirigir después si usas _next
    // También puedes hacerlo con un setTimeout si no usas FormSubmit:
    // setTimeout(() => window.location.href = "/", 1000);
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


document.addEventListener("DOMContentLoaded", () => {
  const animElements = document.querySelectorAll(
    ".anim-fade-in, .anim-slide-up, .anim-zoom-in, .fade-in-left, .fade-in-right"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  animElements.forEach((el) => observer.observe(el));
});
