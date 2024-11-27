const tablaUsuarios = document.getElementById('tablausuarios');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(respuesta=> respuesta.json())
    .then(usuarios => {
    const usuariosFiltrados = usuarios
    usuariosFiltrados.map((usuario) => {
        tablaUsuarios.innerHTML+=`
        <tr>
            <td>${usuario.name}</td>
            <td>${usuario.email}</td>
            <td>${usuario.phone}</td>
        </tr>
        `;
    })
})