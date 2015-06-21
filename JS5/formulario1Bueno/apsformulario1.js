window.addEventListener("load", inicio);
window.addEventListener("beforeunload", confirmaSalida); //Si se cierra la página pide confirmación

function confirmaSalida() {
    //Devuelve el mensaje que aparecerá junto con dos botones(uno para abandonar y otro para permanecer en la página)
    return "Vas a abandonar esta pagina. Si has hecho algún cambio sin grabar perderás los datos";
}

function inicio() {
    /* El select de Departamento tiene la primera opción seleccionada por defecto, para obligar al usuario a elegir una opción,    ponemos la propiedad selectedIndex = -1  */
    document.getElementById('dpto').selectedIndex = -1;

    // Comprobamos algunos campos cuando cambian (para mostrar ayudar al usuario/a)
    document.getElementById("nombre").addEventListener('change', function(evento) {
        validarNumCaracteres(evento.target, 2);
    });
    document.getElementById("apellidos").addEventListener('change', function(evento) {
        validarNumCaracteres(evento.target, 1);
    });
    document.getElementById('codPostal').addEventListener('change', function(evento){
        validarNumCaracteres(evento.target, 5);
    });
    document.getElementById("email").addEventListener('change', function(evento) {
        validarEmail(evento.target);
    });


    /* //Validamos el formulario antes de que se envíe
        var botonEnviar = document.getElementById('enviar');
		botonEnviar.onclick = validarFormulario; 
    O bien:
        document.formulario1.enviar.onclick=validarFormulario; 
    O bien:
        document.formulario1.onsubmit = validarFormulario; 
    O bien: */
    var formulario = document.getElementById('formulario1');
    formulario.addEventListener('submit', validarFormulario);

}

function validarFormulario(evento) {
    var siNombre = validarNumCaracteres(document.getElementById('nombre'), 2);
    var siApellidos = validarNumCaracteres(document.getElementById('apellidos'), 1);
    var siCodPostal = validarNumCaracteres(document.getElementById('codPostal'), 5);
    var siEmail = validarEmail(document.getElementById('email'));
    var siDpto = validarDpto();
    var siEdad = validarEdad();
    var siVehiculo = validarVehiculo();
    var siFrecuencia = validarFrecuencia();

    if (siNombre && siApellidos && siCodPostal && siEmail && siDpto && siEdad && siVehiculo && siFrecuencia) { //Para en cuanto uno es falso (&& y || son "vagos")
        return true;
    } else {
        alert("Comprueba los datos");
        evento.preventDefault();
        return false;
    }
}

function validarNumCaracteres(campo, minCaracteres) {
    if (campo.value.length > minCaracteres) {
        campo.nextElementSibling.innerText = '¡Mas de ' + minCaracteres + ' caracteres!';
        return false;
    } else {
        campo.nextElementSibling.innerText = "";
        return true;
    }
}


function validarEmail(campoEmail) {
    /*Para comprobar el email haremos uso de una expresión regular. Al poner type="email" javaScript ya hará
	una validación en los navegadores que acepten HTML5 */
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i; //Variable tipo expresión regular, permite usar el método test
    var email = campoEmail.value;
    if (!expresion.test(email) || email === "") {
        campoEmail.nextElementSibling.innerText = "Teclee un e-mail correcto";
        return false;
    } else {
        campoEmail.nextElementSibling.innerText = "";
        return true;
    }
}

function validarDpto() {
    /*----------------------------------------------------------------------------------------------------------  select
   Si queremos ver qué departamento es el seleccionado: */
    var dpto = document.getElementById("dpto");
    var indiceSeleccionado = dpto.selectedIndex;
    if (indiceSeleccionado == -1) { //El usuario no ha elegido un dpto (lo pusimos a -1 al principio)
        return false
    } else {
        var ValorOpcionSeleccionada = dpto.options[indiceSeleccionado].value;
        return true;
    }
}

function validarEdad() {
    /* Validamos la edad ------------------------------------------------------------  radio button */
    var seleccionado = false;
    var edad = document.formulario1.edad; //devuelve un nodeList
    var longEdad = edad.length;
    var i = 0;
    for (i = 0; i < longEdad; i++) {
        if (edad[i].checked) {
            seleccionado = true;
        }
    }
    if (!seleccionado) {
        return false;
    } else {
        return true;
    }
}

function validarVehiculo() {
    /*Comprobamos que se haya seleccionado al menos un vehiculo -------------------------------  checkbox */
    var seleccionado = false;
    var vehiculos = document.getElementsByName('vehiculo'); //nodeList de checkboxes
    var longVehiculo = vehiculos.length;
    for (var i = 0; i < longVehiculo; i++) {
        if (vehiculos[i].checked) {
            seleccionado = true;
        }
    }
    if (!seleccionado) {
        return false;
    } else {
        return true;
    }
}

function validarFrecuencia() {

    /*Para validar frecuencia  --------------------------------------------------------------- select múltiple */
    var frecuencia = document.getElementById("frecuencia");
    var seleccionado = false;
    for (var i = 0; i < frecuencia.length; i++) {
        if (frecuencia.options[i].selected) {
            seleccionado = true;
        }
    }
    /* O bien miramos la longitud de frecuencia.selectedOptions que contendrá todos las opciones seleccionadas */

    if (!seleccionado) {
        return false;
    } else {
        return true;
    }
}

function procesar(formulario) {
    alert("estoy en procesar");
}