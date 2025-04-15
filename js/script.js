//-------------------- Scroll de header ----------

const navbar = document.querySelector (".navbar")

function scrollNavbar () {

    if (window.scrollY < 300) {
        navbar.classList.remove ("nav-scroll")
    } else {
        navbar.classList.add ("nav-scroll")
    }
};

window.addEventListener ("scroll", scrollNavbar )


// ------------------------------ Validacion datos personales

const nameInput = document.getElementById("name");
const apellidoInput = document.getElementById("apellido");
const phoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");
const aceptar = document.getElementById ("aceptar");
const form = document.getElementById("form");


function vaciarForm() {
    document.getElementById("nombreError").textContent = "";
    nameInput.classList.remove("invalido");
    document.getElementById("apellidoError").textContent = "";
    apellidoInput.classList.remove("invalido");
    document.getElementById("telefonoError").textContent = "";
    phoneInput.classList.remove("invalido");
    document.getElementById("emailError").textContent = "";
    emailInput.classList.remove("invalido");
    document.getElementById("mensaje-error").textContent = "";
    document.getElementById ("no-aceptado").textContent = "";
    document.getElementById ("form").reset();
}

function validarNombre() {

    let nombre = nameInput.value
    if (nombre === "" || nombre === null) {
        document.getElementById("nombreError").textContent = "El campo está vacío";
    } else {
        document.getElementById("nombreError").textContent = "";
        let nombrePattern = /^[a-zA-Zñ\s]{1,15}$/;
        if (nombrePattern.test(nombre)) {
        nameInput.classList.add("valido");
        nameInput.classList.remove("invalido");
        } else {
        nameInput.classList.add("invalido");
        nameInput.classList.remove("valido");
        document.getElementById("nombreError").textContent = "Debe tener como máximo 15 letras";
        }
    }}

function validarApellido() {

    const apellido = apellidoInput.value
    if (apellido === "" || apellido === null) {
        document.getElementById("apellidoError").textContent = "El campo está vacío";
    } else {
        document.getElementById("apellidoError").textContent = "";
        const apellidoPattern = /^[a-zA-Zñ\s]{1,40}$/
        if (apellidoPattern.test(apellido)) {
        apellidoInput.classList.add("valido");
        apellidoInput.classList.remove("invalido");
        document.getElementById("apellidoError").textContent = "";
        }else {
        apellidoInput.classList.add("invalido");
        apellidoInput.classList.remove("valido");
        document.getElementById("apellidoError").textContent = "Debe tener como máximo 40 letras";
    }
}}

function validarTelefono() {

    const telefono = phoneInput.value
    if (telefono === "" || telefono === null) {
        document.getElementById("telefonoError").textContent = "El campo está vacío";
    } else {
        document.getElementById("telefonoError").textContent = "";
        const telefonoPattern = /^[0-9]{9}$/
        if (telefonoPattern.test(telefono)) {
        phoneInput.classList.add("valido");
        phoneInput.classList.remove("invalido");
        document.getElementById("telefonoError").textContent = "";
        }else {
        phoneInput.classList.add("invalido");
        phoneInput.classList.remove("valido");
        document.getElementById("telefonoError").textContent = "El telefono debe tener como máximo 9 caracteres y solo numeros";
    }
}}

function validarEmail() {

    const email = emailInput.value
    if (email === "" || email === null) {
        document.getElementById("emailError").textContent = "El campo está vacío";
    } else {
        document.getElementById("emailError").textContent = "";
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (emailPattern.test(email)) {
        emailInput.classList.add("valido");
        emailInput.classList.remove("invalido");
        document.getElementById("emailError").textContent = "";
     }else {
        emailInput.classList.add("invalido");
        emailInput.classList.remove("valido");
        document.getElementById("emailError").textContent = "El email no es valido";
    }
}}

function validarAceptacion() {

        if (aceptar.checked === false) {
            document.getElementById ("no-aceptado").textContent = "Tienes que marcar la casilla";
        } else {
            document.getElementById ("no-aceptado").textContent = "";
            return true
        }
    }           

nameInput.addEventListener("input", validarNombre);
apellidoInput.addEventListener("input", validarApellido);
phoneInput.addEventListener("input", validarTelefono);
emailInput.addEventListener("input", validarEmail);
aceptar.addEventListener("input", validarAceptacion);


