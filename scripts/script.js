console.log('¡Bienvenido a Canarias Turismo!');

window.onload = function() {
    // Verificar si ya se mostró el mensaje de bienvenida
    if (!localStorage.getItem('bienvenida')) {
        alert('¡Bienvenido a Canarias Turismo! Disfruta explorando nuestra web.');
        localStorage.setItem('bienvenida', 'true'); // Guardar que ya se mostró el mensaje
    } else {
        // Si ya se mostró el mensaje, podrías poner un mensaje en consola o cambiar algo en la UI
        console.log('¡Ya visitaste Canarias Turismo antes!');
    }
}
