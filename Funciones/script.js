// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Mostrar el botón "Chismosear" después de 3 segundos
    setTimeout(function () {
        const button = document.getElementById("chimosearBtn");
        if (button) {
            button.style.display = "block";
        } else {
            console.error("El botón 'chimosearBtn' no se encontró en el DOM.");
        }
    }, 1000);
});

// Función para agregar la clase de animación a la imagen
function animarImagen(clase) {
    const imagen = document.querySelector(`.imagen-fija.${clase}`);
    if (imagen) {
        imagen.classList.add('animar'); // Agrega la clase de animación
    }
}

// Función para quitar la clase de animación a la imagen
function detenerAnimacion(clase) {
    const imagen = document.querySelector(`.imagen-fija.${clase}`);
    if (imagen) {
        imagen.classList.remove('animar'); // Quita la clase de animación
    }
}
