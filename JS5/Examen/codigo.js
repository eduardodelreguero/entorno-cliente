window.onload = inicio;


function inicio(){
    //ejercicio 1
        var pargatitos = document.getElementById("gatitos");
        pargatitos.textContent = "Estos son los gatitos que quedan";
        //pargatitos.parentNode.appendChild(pargatitos);
        pargatitos.nextElementSibling._insertAfter(pargatitos);
    //ejercicio 2
        var nudiv = document.createElement("div");
        var parrafos = document.getElementsByTagName("p");
        var enlaces = parrafos[2].lastElementChild.previousElementSibling.getAttribute("href");
        nudiv.textContent = enlaces;
        nudiv.classList.toggle("fondoRojo");
        //parrafos[2].parentNode.appendChild(nudiv);
        parrafos[2]._insertAfter(nudiv);
    //ejercicio 3
        nudiv._insertAfter(pargatitos);
    //ejercicio 4
        var boton = document.getElementById("Anadir");
        boton.onclick = anadeCancion;
        window.addEventListener("storage", mostrar);
        mostrar();
}
//ejercicio3
HTMLElement.prototype._insertAfter = function(nuevo){
    if(this.nextSibling)
        this.parentNode.insertBefore(nuevo, this.nextSibling);
    else
        this.parentNode.appendChild(nuevo);
}
//ejercicio4
function anadeCancion(){
    var lis = document.createElement("li");
    var texto = document.getElementById("Cancion").value;
    lis.textContent = texto;
    var lista = document.getElementById("listaCanciones");
    lista.appendChild(lis);
    var clave = "Cancion_"+ new Date().getTime();
    localStorage.setItem(clave, texto);
}
function mostrar(){
    var lista = document.getElementById("listaCanciones");
    lista.innerHTML = "";
    
    for(var i=0; i<localStorage.length; i++){
        var key = localStorage.key(i);
        var texto = localStorage.getItem(key);
        var lis = document.createElement("li");
        lis.textContent = texto;
        lista.appendChild(lis);
    }
}