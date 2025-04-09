console.log('¡Bienvenido a Canarias Turismo!');

window.onload = function() {
    // Verificar si localStorage está disponible
    if (typeof localStorage !== 'undefined') {
        const bienvenidaTimestamp = localStorage.getItem('bienvenida');

        // Mostrar el mensaje si no se ha mostrado o han pasado más de 30 días
        const ahora = new Date().getTime();
        const treintaDias = 30 * 24 * 60 * 60 * 1000;

        if (!bienvenidaTimestamp || ahora - bienvenidaTimestamp > treintaDias) {
            mostrarBienvenida(); // Función para mostrar el mensaje
            localStorage.setItem('bienvenida', ahora.toString()); // Guardar el timestamp actual
        } else {
            console.log('¡Ya visitaste Canarias Turismo recientemente!');
        }
    } else {
        // Si localStorage no está disponible, mostrar el mensaje de bienvenida
        console.warn('localStorage no está disponible. Usando mensaje por defecto.');
        mostrarBienvenida();
    }
};

// Función para mostrar un mensaje menos intrusivo
function mostrarBienvenida() {
    const mensaje = document.createElement('div');
    mensaje.style.position = 'fixed';
    mensaje.style.bottom = '20px';
    mensaje.style.right = '20px';
    mensaje.style.padding = '10px 20px';
    mensaje.style.backgroundColor = '#34495e';
    mensaje.style.color = '#ecf0f1';
    mensaje.style.borderRadius = '5px';
    mensaje.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    mensaje.style.fontSize = '1em';
    mensaje.style.zIndex = '1000'; // Asegurarse de que el mensaje esté por encima de otros elementos
    mensaje.innerText = '¡Bienvenido a Canarias Turismo! Disfruta explorando nuestra web.';

    // Crear botón de cierre
    const botonCerrar = document.createElement('button');
    botonCerrar.innerText = 'X';
    botonCerrar.style.backgroundColor = 'transparent';
    botonCerrar.style.border = 'none';
    botonCerrar.style.color = '#ecf0f1';
    botonCerrar.style.fontSize = '1.2em';
    botonCerrar.style.cursor = 'pointer';
    botonCerrar.style.position = 'absolute';
    botonCerrar.style.top = '5px';
    botonCerrar.style.right = '5px';

    mensaje.appendChild(botonCerrar);

    // Agregar el mensaje al body
    document.body.appendChild(mensaje);

    // Añadir evento al botón de cierre
    botonCerrar.addEventListener('click', () => {
        mensaje.remove();
    });

    // Ocultar el mensaje después de 5 segundos si el usuario no lo ha cerrado
    setTimeout(() => {
        if (mensaje.parentNode) { // Verificar si el mensaje aún está en el DOM
            mensaje.remove();
        }
    }, 5000);
}
