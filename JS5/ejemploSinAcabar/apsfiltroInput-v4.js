/**
**filtroInput.js:  filtrado discreto de las pulsaciones de teclado para elementos <input> 
*
* Este módulo busca en el documento todos los elementos <input type="text"> que tienen un atributo 
* "caracteresPermitidos". Registra manejadores de eventos keypress para restringir al usuario la
* entrada a los caracteres que aparecen en el valor del atributo "caracteresPermitidos".
* Si el usuario escribe un carácter que no está permitido, aparecerá un mensaje de ayuda. Si el usuario escribe un
* carácter que está permitido, el  mensaje de ayuda se borra.
*
* Ejemplo HTML que usa este módulo:
* Código postal: 
*		<input id="codPostal" type="text" caracteresPermitidos="0123456789">
* 		<label for="codPostal">Código postal</label>
*		<input type="text" id="codPostal" name="codPostal" caracteresPermitidos="0123456789">
*		<span class="ayuda"></span>
* Ejemplo CSS:
* .ayuda{
*	font-size: 70%;
*	color: red;
* }
*/

window.addEventListener("load", filtrarTeclas);
function filtrarTeclas () { 
	// Captura los elementos <input> 
	var elementosInput = document.getElementsByTagName("input");
	var elementosNumeros = document.querySelectorAll(".numero");
	// Recorre los elementosInput
	for (var i = 0; i < elementosInput.length; i++) {
		var elt = elementosInput[i];
		// Se salta los que no son campos de texto o no tienen el atributo caracteresPermitidos 
		if (elt.type != "text" || !elt.getAttribute("caracteresPermitidos"))
			continue;
		// Asigna los manejadores de eventos a este elemento input 
		elt.addEventListener("keypress", filtro, false);
	}
	
	function filtro(e) { //e es un objeto keyboardEvent
		// El código Unicode de la tecla pulsada se almacena en keyCode o charCode. Si es un carácter visualizable se almacena en charCode, en otro caso en keyCode 
		var codigo = e.charCode || e.keyCode;
		// Si la tecla es una tecla de función, control, alt o código ASCII < 32 no se filtra
		if (codigo < 32 ||  e.charCode == 0 || 	e.ctrlKey || e.altKey){
				return; // No filtramos el evento
		}
		// Convertimos el código del carácter en un string 
		var texto = String.fromCharCode(codigo);
		
		var permitidos = this.getAttribute("caracteresPermitidos"); //Caracteres permitidos
		if (permitidos.indexOf(texto) == -1) { // Es un carácter no permitido
				this.nextElementSibling.innerText = "Sólo números";
				// Cancelamos la acción por defecto para que el texto no sea insertado 
				if (e.preventDefault) e.preventDefault();
				return false;
		}
		// Si todos los caracteres son permitidos, oculta el mensaje 
		this.nextElementSibling.innerText = "";
	}
}