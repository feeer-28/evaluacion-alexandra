const imagenes = document.querySelector('img');

imagenes.forEach((imagen) => {
    imagen.alt = 'Nueva descripción';
});
