
/*-------------------- Scroll de header ----------*/

const navbar = document.querySelector ("header")
const logo = document.querySelector (".logo")

function scrollNavbar () {

    if (window.scrollY < 300) {
        navbar.classList.remove ("nav-scroll");
        logo.classList.add ("logo-scroll");
    } else {
        navbar.classList.add ("nav-scroll");
        logo.classList.remove ("logo-scroll")
        ;
    }
};

window.addEventListener ("scroll", scrollNavbar )


//---------------------- NOTICIAS ------------------//

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
        data.forEach(noticia => {
            const noticiaDiv = document.createElement('div');
            noticiaDiv.classList.add('col', 'noticia');
            noticiaDiv.innerHTML = `
                <img src="${noticia.foto}" alt="Imagen de la noticia">
                <h6>${noticia.title}</h6>
                <p>${noticia.description}</p>
                <a href="${noticia.leer}" target="_blank">Leer más</a>
            `;
            noticias.appendChild(noticiaDiv);
        })
    })
    