window.onload = function() {
	// Numero de enlaces de la pagina
    var enlaces = document.querySelectorAll("a");
    alert(enlaces.length);
	// Direccion del penultimo enlace
    alert(enlaces[enlaces.length-2]);
    
	// Numero de enlaces que apuntan a http://prueba
    var cont=0;
    for(var i=0; i<enlaces.length; i++){
        if(enlaces[i].getAttribute("href")=="http://prueba"){
            cont++;
        } 
    }
    alert(cont);
	// Numero de enlaces del tercer parrafo
    var parrafos = document.querySelectorAll("p");
    alert(parrafos[parrafos.length-1].querySelectorAll("a").length);
    
    
    
//añadir 
    var nuevo = document.createElement("div");
    nuevo.innerHTML = texto;
    nuevo.innerHTML = texto;
    var nodoPadre = parrafos[parrafos.length-1];
    
    //terminar
    
}

/*














*/