const listaPosts = document.getElementById('lista-posts');

fetch('https://jsonplaceholder.typicode.com/')
    .then(respuesta => respuesta.json())
    .then((posts) => {
    const elementosLista = posts.map((post) => {
        return `
        <li>${post.title}</li>
        `;
    });
    listaPosts.innerHTML = elementosLista.join('');
    });
