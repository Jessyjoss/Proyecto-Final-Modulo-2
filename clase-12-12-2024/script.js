// Selección de elementos del DOM
document.addEventListener("DOMContentLoaded", () => {
    // Scroll suave al hacer clic en los enlaces de navegación
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1); // Elimina el '#'
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Carrusel simple de productos destacados
    const carrusel = document.querySelector(".lista-carrusel");
    let isDragging = false;
    let startX, scrollLeft;

    if (carrusel) {
        // Evento al comenzar a arrastrar
        carrusel.addEventListener("mousedown", (event) => {
            isDragging = true;
            startX = event.pageX - carrusel.offsetLeft;
            scrollLeft = carrusel.scrollLeft;
        });

        // Evento al arrastrar
        carrusel.addEventListener("mousemove", (event) => {
            if (!isDragging) return;
            event.preventDefault();
            const x = event.pageX - carrusel.offsetLeft;
            const walk = (x - startX) * 2; // Velocidad del desplazamiento
            carrusel.scrollLeft = scrollLeft - walk;
        });

        // Eventos para detener el arrastre
        carrusel.addEventListener("mouseup", () => (isDragging = false));
        carrusel.addEventListener("mouseleave", () => (isDragging = false));
    }

    // Agregar funcionalidad adicional si se necesita
    console.log("Interactividad inicializada");
});




