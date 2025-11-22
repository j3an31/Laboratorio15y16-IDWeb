document.addEventListener('DOMContentLoaded', () => {
    const usuario = {
        nombre: "Juan Pérez",
        correo: "juanperez@gmail.com",
        rol: "Administrador"
    };

    document.getElementById('guardar').addEventListener('click', () => {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert('¡Usuario guardado en localStorage!');
    });

    document.getElementById('mostrar').addEventListener('click', () => {
        const datosRecuperados = localStorage.getItem('usuario');
        if (datosRecuperados) {
            const usuarioObjeto = JSON.parse(datosRecuperados);
            document.getElementById('resultado').innerHTML = `
                <p><strong>Nombre:</strong> ${usuarioObjeto.nombre}</p>
                <p><strong>Correo:</strong> ${usuarioObjeto.correo}</p>
                <p><strong>Rol:</strong> ${usuarioObjeto.rol}</p>
            `;
        } else {
            document.getElementById('resultado').innerHTML = '<p>¡No hay datos guardados!</p>';
        }
    });
});