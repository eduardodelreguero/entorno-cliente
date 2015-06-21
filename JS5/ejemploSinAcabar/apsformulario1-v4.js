window.onload = inicio;
window.onbeforeunload = confirmaSalida;  //Si se cierra la página pide confirmación

function confirmaSalida()   {    
//Devuelve el mensaje que aparecerá junto con dos botones(uno para abandonar y otro para permanecer en la página)       
	return "Vas a abandonar esta pagina. Si has hecho algún cambio sin grabar vas a perder todos los datos.";  

}
function inicio() {
	// Comprobamos si están vacíos algunos campos cuando pierden el foco (para ayudar al usuario/a)
	document.getElementById("nombre").onblur = validarNoVacio;
	document.getElementById("apellidos").onblur = validarNoVacio;
	document.getElementById("email").onblur = validarNoVacio;
	// Validamos todo el documento cuando se pulse el botón
    // var botonEnviar = document.getElementById('enviar');
	//botonEnviar.onclick = validarFormulario;
	document.formulario1.enviar.onclick=validarFormulario;
}

function validarNoVacio(evento) {
	// Generalizamos para que podamos ver si está vacío cualquier elemento
	if (this.value == "") {
		this.nextElementSibling.innerText = "Vacío!"; //la etiqueta <span> para ayuda
		return false;
	} else {
		this.nextElementSibling.innerText = "";
		return true;
	}
}

function validarFormulario() {
	/*Creamos una variable de tipo booleana que en principio tendrá un valor true(verdadero), 
y que retornaremos en false(falso) cuando la validación no sea superada por algún campo */
	var todo_correcto = true;

	/*El primer campo que comprobamos es el del nombre. Por ejemplo, le decimos que tiene que tener más de 2 caracteres para que sea un nombre válido. Si no tiene más de dos caracteres, la variable todo_correcto 
devolverá false.*/

	if (document.getElementById("nombre").value.length < 2) {
		todo_correcto = false;
	}

	/*Para comprobar el email haremos uso de una expresión regular. Al poner type="email" javaScript ya hará
	una validación en los navegadores que acepten HTML5 */
	var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i; //Variable tipo expresión regular, permite usar el método test
	var email = document.formulario1.email.value;
	if (!expresion.test(email)) {
		todo_correcto = false;
		document.formulario1.email.nextElementSibling.innerText = "Teclee un e-mail";
	}	else {
		document.formulario1.email.nextElementSibling.innerText = "";
	}

	/*Para validar el select frecuencia */
	if (document.getElementById('frecuencia').value == '') {
		todo_correcto = false;
		alert("frecuencia vacia");
	}
	

	/*Validaremos también el checkbox vehiculo */
	if (!document.getElementById('vehiculo').checked) {
		todo_correcto = false;
	}
	var edad = document.formulario1.edad; //devuelve un nodeList
	for (var i = 0; i<edad.length; i++){
			if (edad[i].checked) laedad = edad[i].value;
	}
	alert ("edad marcada"+laedad);

	/*Generaremos una alerta advirtiendo al usuario de que algunos datos no son los que esperamos.*/
	if (!todo_correcto) {
		alert('Algunos campos no están correctos');
	}

	return todo_correcto;
}