const contForm = document.querySelector(".contForm");
let primero = document.querySelector("form input");
primero.focus();

function validar() {
    let reg_nombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,50}$/;
    let reg_mail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    let reg_msj = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{5,200}$/;
    let nameInput = document.querySelector("#f_name");
    let emailInput = document.querySelector("#f_email");
    let mensajeInput = document.querySelector("#f_msj");
    let erroresLista = document.getElementById("errores");
    erroresLista.innerHTML = "";
    erroresLista.style.display = "none";
    let msjs = document.getElementById("mensajes");
    let verf = false;

    if (nameInput.value.trim() == "") {
        nameInput.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = "Complete el nombre";
        erroresLista.appendChild(p);
        verf = true;
    } else if (!reg_nombre.test(nameInput.value)) {
        nameInput.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = "Nombre inválido";
        erroresLista.appendChild(p);
        verf = true;
    }
    if (emailInput.value.trim() == "") {
        emailInput.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = "Ingrese mail";
        erroresLista.appendChild(p);
        verf = true;
    } else if (!reg_mail.test(emailInput.value)) {
        emailInput.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = "Mail inválido";
        erroresLista.appendChild(p);
        verf = true;
    }
    if (mensajeInput.value.trim() == "") {
        mensajeInput.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = "Ingrese un mensaje";
        erroresLista.appendChild(p);
        verf = true;
    } else if (!reg_msj.test(mensajeInput.value)) {
        mensajeInput.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = "El mensaje debe tener entre 5 y 200 caracteres";
        erroresLista.appendChild(p);
        verf = true;
    }

    if (verf) {
        erroresLista.style.display = "initial";
        return false;
    } else {
        let p = document.createElement("p");
        if ((!nameInput.value.trim() == "") && (reg_nombre.test(nameInput.value)) && (!emailInput.value.trim() == "") && (reg_mail.test(emailInput.value)) && (!mensajeInput.value.trim() == "") && (reg_msj.test(mensajeInput.value))) {
            p.innerHTML = nameInput.value + " dice " + mensajeInput.value + ". Contacto: " + emailInput.value + ".";
            msjs.appendChild(p);
        }
    }

    contForm.reset();
    let primero = document.querySelector("form input");
    primero.focus();

    return false;
}

contForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validar()
})