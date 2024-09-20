// Header
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

// Scroll de la pantalla
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

// Contacto - Validación del formulario
document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formularioContacto');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar envío automático del formulario

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje').value;
    var motivo = document.getElementById('motivo').value;
    var imagen = document.getElementById('imagen').value;

    // Mostrar en consola los valores capturados
    console.log('Valor de nombre:', nombre);
    console.log('Valor de email:', email);
    console.log('Valor de telefono:', telefono);
    console.log('Valor de mensaje:', mensaje);
    console.log('Valor de motivo:', motivo);
    console.log('Valor de imagen:', imagen);

    // Realizar validación
    if (!nombre || !email || !telefono || !mensaje || !motivo) {
      alert('Por favor, completa todos los campos obligatorios.');
      return; // Salir del evento si hay campos obligatorios vacíos
    }
  });
});

// Ejemplo de eventos DOMContentLoaded y modales, sin interferencia
document.addEventListener('DOMContentLoaded', function () {
  const verMasBtns = document.querySelectorAll('.ver-mas');
  const modals = document.querySelectorAll('.modal');
  const closeBtns = document.querySelectorAll('.modal-close');

  verMasBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Botón Ver más presionado');
      const instructorId = btn.getAttribute('data-instructor');
      const modal = document.getElementById(`modal-${instructorId}`);
      if (modal) {
        modal.classList.add('show');
      }
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) {
        modal.classList.remove('show');
      }
    });
  });

  window.addEventListener('click', (e) => {
    modals.forEach((modal) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  });
});
