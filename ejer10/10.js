const carrusel = document.getElementById('carrusel');
const imagenes = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg',
];

let indiceImagen = 0;
const imagenActiva = document.querySelector('.imagenactiva');

imagenes.forEach((imagen, indice) => {
    if (indice === 0) {
    imagenActiva.src = imagen;
    }
});
