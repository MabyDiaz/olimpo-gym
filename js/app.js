// Header
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// Scroll de la pantalla
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

// Contacto - Validación del formulario
document
  .getElementById("formularioContacto")
  .addEventListener("submit", function (event) {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;
    var motivo = document.getElementById("motivo").value;
    var imagen = document.getElementById("imagen").value;
    var preferencias = document.querySelectorAll(
      'input[name="preferencias"]:checked'
    ).length;

    if (
      !nombre ||
      !email ||
      !telefono ||
      !mensaje ||
      !motivo ||
      !imagen ||
      preferencias === 0
    ) {
      alert("Por favor, completa todos los campos obligatorios.");
      event.preventDefault();
    }
  });
