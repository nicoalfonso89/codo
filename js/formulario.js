var nombre = document.getElementById ('nombre');
var numero = document.getElementById ('numero');
var mail = document.getElementById ('mail');
var mensaje = document.getElementById ('mensaje');
var error = document.getElementById ('error');
error.style.color = 'red';


function enviarFormulario(){
    console.log('Enviando formulario...');

    var mensajesError = [];

    if (nombre.value === null || nombre.value === ''){
        mensajesError.push ('Ingrese su nombre');
    }

    if (numero.value === null || numero.value === ''){
        mensajesError.push ('Ingrese su número');
    }

    if (mail.value === null || mail.value === ''){
        mensajesError.push ('Ingrese su email');
    }

    if (mensaje.value === null || mensaje.value === ''){
        mensajesError.push ('Ingrese su mensaje')
    }

    error.innerHTML = mensajesError.join (', ')
    return false;  
    
}



/*
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	numero: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	mail: false,
	numero: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {

		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;

		case "mail":
			validarCampo(expresiones.correo, e.target, 'mail');
		break;

		case "numero":
			validarCampo(expresiones.telefono, e.target, 'numero');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}*/