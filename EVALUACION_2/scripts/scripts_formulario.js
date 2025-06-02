window.onload = function () {
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", validar_formulario);
};

function validar_formulario(event) {
    event.preventDefault(); 

    const inputNombre = document.getElementById('inputNombre');
    const inputEmail = document.getElementById('inputEmail');
    const inputRut = document.getElementById("inputRut");
    const inputContrasena = document.getElementById('inputContrasena');
    const inputRepetirContrasena = document.getElementById('inputRepetirContrasena');
    const inputGenero = document.getElementById("inputGenero");
    const inputFechaNacimiento = document.getElementById("inputFechaNacimiento");

    let formularioValido = true;


    if (inputNombre.value.trim() === "") {
        inputNombre.classList.add('is-invalid');
        formularioValido = false;
    } else {
        inputNombre.classList.remove('is-invalid');
    }

    if (inputEmail.value.trim() === "" || !validar_email(inputEmail.value.trim())) {
        inputEmail.classList.add('is-invalid');
        formularioValido = false;
    } else {
        inputEmail.classList.remove('is-invalid');
    }


    if (inputRut.value.trim() === "" || !validaRut(inputRut.value.trim())) {
        inputRut.classList.add('is-invalid');
        formularioValido = false;
    } else {
        inputRut.classList.remove('is-invalid');
    }


    if (inputGenero.value === "") {
        inputGenero.classList.add("is-invalid");
        formularioValido = false;
    } else {
        inputGenero.classList.remove("is-invalid");
    }

    if (!validar_fecha(inputFechaNacimiento.value.trim())) {
        inputFechaNacimiento.classList.add('is-invalid');
        formularioValido = false;
    } else {
        inputFechaNacimiento.classList.remove('is-invalid');
    }

    if (inputContrasena.value.trim() === "" || !validar_contrasena_segura(inputContrasena.value.trim())) {
        inputContrasena.classList.add('is-invalid');
        formularioValido = false;
    } else {
        inputContrasena.classList.remove('is-invalid');
    }

    if (inputRepetirContrasena.value.trim() === "" || inputContrasena.value.trim() !== inputRepetirContrasena.value.trim()) {
        inputRepetirContrasena.classList.add('is-invalid');
        formularioValido = false;
    } else {
        inputRepetirContrasena.classList.remove('is-invalid');
    }

    if (formularioValido) {
        alert("✅ Formulario enviado correctamente (simulado).");
    }
}



function validar_email(email) {
    return /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/.test(email);
}

function validar_contrasena_segura(contrasena) {
    return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(contrasena);
}

function validar_fecha(fecha) {
    const regex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!regex.test(fecha)) return false;

    const partes = fecha.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const anio = parseInt(partes[2], 10);

    const fechaObj = new Date(anio, mes, dia);
    return fechaObj.getFullYear() === anio && fechaObj.getMonth() === mes && fechaObj.getDate() === dia;
}

function validaRut(rutCompleto) {
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
    const tmp = rutCompleto.split('-');
    const rut = tmp[0];
    let digv = tmp[1];
    if (digv === 'K') digv = 'k';
    return dv(rut) === digv;
}

function dv(T) {
    let M = 0, S = 1;
    for (; T; T = Math.floor(T / 10)) S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return S ? String(S - 1) : 'k';
}







