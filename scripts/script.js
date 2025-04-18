// Redirección al hacer clic en las zonas clickeables
document.querySelectorAll('.zona-clickeable').forEach(function(zona) {
    zona.addEventListener('click', function() {
        const url = zona.getAttribute('data-href');
        if (url) {
            window.location.href = url;
        }
    });

    zona.addEventListener('mouseover', function() {
        const mapa = document.querySelector('.map');
        if (mapa) {
            mapa.style.transform = `scale(1.2) translate(-${zona.offsetLeft}px, -${zona.offsetTop}px)`;
        }
    });

    zona.addEventListener('mouseleave', function() {
        const mapa = document.querySelector('.map');
        if (mapa) {
            mapa.style.transform = 'scale(1)'; // Regresa al tamaño original
        }
    });
});
