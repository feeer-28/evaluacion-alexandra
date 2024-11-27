let datos = [
    { nombre: "fer", edad: 25, email: 'fer@gmail.com' },
    { nombre: 'luis', edad: 30, email: 'luis@gmail.com' },
    { nombre: 'Pedro', edad: 15, email: 'pedro@gmail.com' },
];

let tabla = document.querySelector("#tabla");
datos.map((dato) => {
    tabla.innerHTML += 
    `<tr>
        <td>${dato.nombre}</td>
        <td>${dato.edad}</td>
        <td>${dato.email}</td>
    </tr>
    `;
});
