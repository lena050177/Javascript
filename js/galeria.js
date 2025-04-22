
// Scroll de header

const navbar = document.querySelector (".navbar")
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

// Scroll galeria
const elements = document.querySelectorAll(".image, .text-top, .text-servicio")

function mostrarElements() {
    const altura = window.innerHeight * 0.6

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
    
        if (elementTop < altura) {
            element.classList.add("show");
        } else {
            element.classList.remove("show");
        }
    });
}

window.addEventListener ("scroll", mostrarElements)