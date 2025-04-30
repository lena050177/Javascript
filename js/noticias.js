
const noticias = document.getElementById("noticias");

async function realizarFetch(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la respuesta de la red');
        }
        return await response.json();
    } catch (error) {
        console.error('Hubo un problema con la petición Fetch:', error);
    }
};

realizarFetch('./assets/data/noticias.json')
    .then(data => {
        console.log(data);
        data.forEach(noticia => {
            const noticiaDiv = document.createElement('div');
            noticiaDiv.classList.add('noticia');
            noticiaDiv.innerHTML = `
                <img src="${noticia.foto}" alt="Imagen de la noticia">
                <h4>${noticia.title}</h4>
                <p>${noticia.description}</p>
                <a href="${noticia.leer}" target="_blank">Leer más</a>
            `;
            noticias.appendChild(noticiaDiv);
        })
    })
    