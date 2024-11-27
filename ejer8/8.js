const tarjetasContenedor = document.getElementById('tarjetas');
const datos = [
    { nombre: 'Juan', descripcion: 'Este es Juan' },
    { nombre: 'María', descripcion: 'Esta es María' },
    { nombre: 'Pedro', descripcion: 'Este es Pedro' },
];

const tarjetas = datos.map((dato) => {
    tarjetasContenedor.innerHTML +=`
    <div class="tarjeta">
        <h2>${dato.nombre}</h2>
        <p>${dato.descripcion}</p>
    </div>
    `;
});


