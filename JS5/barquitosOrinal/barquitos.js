//sin acabar
function mostrarRecord(){
    if(localStorage.length>0){
        var resultados
        tabla = $("#record").find("table");
        tabla.empty();
        tabla.append("<tr><th>Pos.</th><th>--</th><th>I</th><th>S</th></tr>");
        var almacenamiento = [];
        for(var i=0; i<localStorage.length; i++){
            var objeto = JSON.parse(localStorage.getItem(localStorage.key(i)));
            almacenamiento[i] = objeto;
            
        }
        almacenamiento.sort(by("tiempo")).sort(by("intentos"));
        for(var i=0; i<almacenamiento.length && i<10; i++){
            tabla.append("<tr><td>"+(i*1+1)+"</td><td>"+almacenamiento[i].nombre+"</td><td>"+almacenamiento[i].intentos+"</td><td>"+almacenamiento[i].tiempo+"</td></tr>");
        }
    }
}
// Trabajamos con un objeto (modelo), que contiene un array (barcos), que a su vez contiene objetos con dos atributos: localizaciones y impactos (ambos arrays) 
// modelo tiene los métodos: fuego, estaHundido, generaLocalizacionesBarcos, generaBarco y colision
var modelo = {
	tamanioPanel: 7,
	numeroBarcos: 3,
	longitudBarco: 3,
	barcosHundidos: 0,
	
	barcos: [ //Array de objetos
	//Cada objeto (barco) tiene su localizacion (3 trozos) y sus impactos (en principio vacíos y se irán llenando con la palabra "tocado" cuando haya aciertos)
		{ localizaciones: [0, 0, 0], impactos: ["", "", ""] },
		{ localizaciones: [0, 0, 0], impactos: ["", "", ""] },
		{ localizaciones: [0, 0, 0], impactos: ["", "", ""] }
	],

	fuego: function (intento) {
		for (var i = 0; i < this.numeroBarcos; i++) {
			var barco = this.barcos[i];
			var indice = barco.localizaciones.indexOf(intento); //devuelve -1 si no encuentra la cadena buscada en las localizaciones

			//Miramos si el barco ya está tocado 
			if (barco.impactos[indice] === "tocado") {
				vista.visualizarMensaje("Este ya está tocado");
				return true;
			} else if (indice >= 0) {
				barco.impactos[indice] = "tocado";
				vista.visualizarTocado(intento); //Dibuja el barquito en el lugar del impacto (usando class y css)
				vista.visualizarMensaje("¡TOCADO!");
                sonar(2);
				if (this.estaHundido(barco)) {
					vista.visualizarMensaje("¡HUNDIDO!");
					this.barcosHundidos++;
                    sonar(1);
				}else{
                    
                }
				return true;
			}
		}
		vista.visualizarAgua(intento);
		vista.visualizarMensaje("¡Agua!");
		return false;
	},

	estaHundido: function(barco) {
		for (var i = 0; i < this.longitudBarco; i++)  {
			if (barco.impactos[i] !== "tocado") {
				return false;
			}
		}
	    return true;
	},

	generaLocalizacionesBarcos: function() {
		var localizaciones;
		for (var i = 0; i < this.numeroBarcos; i++) { //genera la localización de cada barco
			do {
				localizaciones = this.generaBarco();
			} while (this.colision(localizaciones)); //repetimos generaBarco() mientras que el método colision devuelva true
			this.barcos[i].localizaciones =  localizaciones;
		}
	},

	generaBarco: function() {  // Sitúa el barco aleatoriamente (en vertical u horizontal)
		var direccion = Math.floor(Math.random() * 2); //genera un número entre 0 y 1
		var fila, columna;
		// se generan aleatoriamente las filas y columnas donde se va a colocar el primer trozo del barco (cada barco tiene una longitud que puede ocupar varias celdas)
		if (direccion === 1) { // horizontal
			fila = Math.floor(Math.random() * this.tamanioPanel); //genera un número entre 0 y  el tamaño del panel (empieza en cualquier fila)
			columna = Math.floor(Math.random() * (this.tamanioPanel - this.longitudBarco)); 
			//genera un número entre 0 y el tamaño panel -longitud barco (para que no se salga del panel por la derecha) 
		} else { // vertical
			fila = Math.floor(Math.random() * (this.tamanioPanel - this.longitudBarco));//puede empezar desde la columna 0 hasta tamañopanel-longitud barco (para que no se salga por abajo)
			columna = Math.floor(Math.random() * this.tamanioPanel);//Puede empezar en cualquier columna
		}

		var nuevasLocalizacionesBarco = [];
		for (var i = 0; i < this.longitudBarco; i++) { //Da los siguientes trozos del barco 
			if (direccion === 1) { //horizontal
				nuevasLocalizacionesBarco.push(fila + "" + (columna + i)); // Ponemos "" para que lo convierta en un string y no sume los valores numéricos
			} else {
				nuevasLocalizacionesBarco.push((fila + i) + "" + columna); //vertical
			}
		}
		return nuevasLocalizacionesBarco; //devuelve un array con contenido parecido a : 04,14,24
	},

	colision: function(localizaciones) { //localizaciones es un array con la localización de cada trozo del barco (ej: 04,14,24)
		for (var i = 0; i < this.numeroBarcos; i++) { //Busca cada una de las localizaciones generadas en todos los barcos y si encuentra una colisión devuelve true
			var barco = this.barcos[i];
			for (var j = 0; j < localizaciones.length; j++) {
				if (barco.localizaciones.indexOf(localizaciones[j]) >= 0) { //Si hay colisión 
					return true;
				}
			}
		}
		return false;
	}
	
}; 

var by = function (atributo, menor) {
    return function (o, p) {
        var a, b;
        if (typeof o === "object" && typeof p === "object" && o && p) {
            a = o[atributo];
            b = p[atributo];
            if (a === b) {
                return typeof menor === 'function' ? menor(o, p) : 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: "Error",
                message: "Esto no es un objeto, al menos no tiene la propiedad " + atributo,
            };
        }
    };
};
var vista = {
	visualizarMensaje: function(mensaje) {
		var areaMensaje = $("#areaMensaje");
		areaMensaje.text(mensaje);
	},

	visualizarTocado: function(localizacion) {
		var celda = $("#"+localizacion);
		celda.attr("class", "tocado");
	},

	visualizarAgua: function(localizacion) {
		var celda = $("#"+localizacion);
		celda.attr("class", "agua");
	}

}; 
// Objeto para procesar y contar los intentos de tocado y hundido
var controlador = {
	intentos: 0,
    tiempo: 0,
	procesarIntento: function(intento) { //Intento contiene un string del tipo "G0"
		var localizacion = analizaIntento(intento); //localizacion contiene un string del tipo "60"
		if (localizacion) {
			this.intentos++;
			var impacto = modelo.fuego(localizacion); //impacto contiene true si es un acierto
			if (modelo.barcosHundidos === modelo.numeroBarcos) {
                vista.visualizarMensaje("Has hundido todos los barcos en " + this.intentos + " intentos");
                var user = prompt("Has hundido todos los barcos en " + this.intentos + " intentos. Guardar resultado como...");
                var tiempo = new Date().getTime();
                var usuario = { 'nombre' : user, 'intentos' : this.intentos, 'tiempo': this.tiempo };
                localStorage.setItem("resultado"+tiempo, JSON.stringify(usuario));
                bloquear();
			}
		}
	}
}


// Función que analiza un disparo del usuario y si está dentro del panel devuelve la fila y la columna correspondientes (ej: "06")

function analizaIntento(intento) {
	var alfabeto = ["A", "B", "C", "D", "E", "F", "G"];

	if (intento === null || intento.length !== 2) {
		alert("Teclea una letra y un número");
	} else {
		//var fila = alfabeto.indexOf(intento.charAt(0)); //Convierte la letra en un índice de fila
        var fila = intento.charAt(0);
		var columna = intento.charAt(1);
		
		if (isNaN(fila) || isNaN(columna)) {
			alert("¡Fuera del panel!");
		} else if (fila < 0 || fila >= modelo.tamanioPanel ||
		           columna < 0 || columna >= modelo.tamanioPanel) {
			alert("¡Fuera del panel!");
		} else {
			return fila + columna; 
		}
	}
	return null;
}


// Manejadores de eventos

function manejadorBotonFuego() {
	var entradaIntento = $("#entradaIntento");
	var intento = entradaIntento.val().toUpperCase();

	controlador.procesarIntento(intento);

	entradaIntento.val("");
}

function manejadorKeyPress(e) {
	var botonFuego = $("#botonFuego");
    
	// Lo siguiente es para evitar los problemas con IE9 y anteriores,
	// en esos navegadores el manejador de eventos no se pasa adecuadamente a la función manejadora
	e = e || window.event;

	if (e.keyCode === 13) {
		botonFuego.click();
		return false;
	}
}

function manejadorClicCelda(){
    var intento = $(this).attr("id");
    controlador.procesarIntento(intento);
    $(this).unbind("click");
}
function bloquear(){
    celdas.unbind("click");
    mostrarRecord();
}
function reloj(){
    controlador.tiempo++;
    setTimeout("reloj()",1000);
}
function sonar(x){
    if(x==2){
        $("#boom")[0].play();
    }else{
        $("#grito")[0].play();
    }
}
$(document).ready(init);

function init() {
	var imagenes = "agua.png, panel.jpg, barco.png".split(",");
	var tempImg = [],
		i,
		numImagenes;
	numImagenes=imagenes.length;
	for(i=0; i < numImagenes; i++){
		tempImg[i] = $("<img src="+imagenes[i]+">");
		//tempImg[i].src = imagenes[i];
	}

	// situa los barcos en el tablero
	modelo.generaLocalizacionesBarcos();
    
    // manejamos el click en la pantalla
    celdas = $("td");
    
    celdas.on("click", manejadorClicCelda);
    
    
    mostrarRecord();
    
    reloj();
}




