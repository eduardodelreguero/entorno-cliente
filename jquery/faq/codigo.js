/*window.onload = function(){
    precargar();
	var faqs=$("listas");
	var titulos=faqs.querySelectorAll(".escuderia");
    titulos[0].focus();
    var numtitulos = titulos.length;
	for (var i= 0; i<numtitulos; i++){
		titulos[i].addEventListener("click",cambiar);
	}
    var nombres = document.querySelectorAll("li");
    var numnombres = nombres.length;
    for (var i= 0; i<numnombres; i++){
		nombres[i].addEventListener("click",mostrarFoto);
        nombres[i].numero=i;
	}
    
}
function cambiar (){
	this.nextElementSibling.classList.toggle("abierto");
    this.nextElementSibling.classList.toggle("cerrado");
	this.classList.toggle("mas");
    this.classList.toggle("menos");
    var pilotopen = this.nextElementSibling.getElementsByTagName("a");
    var pulsada=Math.floor(Math.random()*pilotopen.length);
    pilotopen[pulsada].click();
    //document.getElementById("ejem").click();
}
var $ = function (id){
	return document.getElementById(id);
}
function precargar(){
    imagenes = ["falonso.jpg", "kimi.jpg", "david.jpg", "pedro.jpg", "marc.jpg", "gros.jpg", "pastor.jpg", "pic.jpg", "hamilton.jpg", "nico.jpg", "pascal.jpg"];
    var i, cantidad;
    imagenestemp = new Array();
    
    cantidad = imagenes.length;
    for(i=0; i<cantidad; i++){
        imagenestemp[i] = document.createElement("img")
        imagenestemp[i].src="imagenes/"+imagenes[i];
        imagenestemp[i].id="imagen";
        imagenestemp[i].alt=imagenes[i];
    }
}
function mostrarFoto(){
    var vieja = document.getElementById("imagen");
    var padre = vieja.parentNode;
    padre.removeChild(vieja);
    padre.insertBefore(imagenestemp[this.numero], document.getElementById("figcap"));
    document.getElementById("figcap").textContent = this.textContent;
}*/
