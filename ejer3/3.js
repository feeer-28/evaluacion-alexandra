const botones = document.getElementById('botones');
const botonesTexto = ['Botón 1', 'Botón 2', 'Botón 3', 'Botón 4', 'Botón 5'];
botonesTexto.forEach((texto, agrega) => {
    const boton = document.createElement('button');
    boton.textContent = texto;
    boton.addEventListener('click', () => {
    console.log(`Botón ${agrega + 1} clickeado`);
    });
    botones.appendChild(boton);
});
