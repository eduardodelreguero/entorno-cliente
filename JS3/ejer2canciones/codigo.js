window.onload = function(){
    var arraycanciones = document.getElementsByTagName("li");
    cargar();
    document.getElementById("cancion").onkeyup=anade;
    document.getElementById("boton").onclick=anade;
    document.getElementById("borrar").onclick=borrar;
}
function anade(e){
    if(e.keyCode == 13 || e.keyCode == 0){
        var lista = document.getElementById("lista");
        var nuevacancion = document.getElementById("cancion").value;
        var arraycanciones = document.getElementsByTagName("li");
        
        if(nuevacancion.indexOf(":::")>-1){
            alert("':::' no es válido para el nombre de una canción");
            return false;
        }
        
        if(nuevacancion!=""){
            var texto = document.createTextNode(nuevacancion);
            var lis = document.createElement("li");
            lis.appendChild(texto);
            var posicion = calculaPosicion(nuevacancion)
            if(posicion==-1){
                lista.appendChild(lis);
            }else{
                arraycanciones[posicion].parentNode.insertBefore(lis, arraycanciones[posicion]);
            }
            guardar();
            muestraError(0);
        }else{
            muestraError(1);
        }
    }
}
/*muestar un error si el parametro es 1 y lo quita si es 0
*/
function muestraError(s){
    var aviso = document.getElementsByTagName("span");
    if(s==0){
        aviso[0].classList.remove("ver")
        aviso[0].classList.add("nover");
    }else if(s==1){
        aviso[0].classList.remove("nover")
        aviso[0].classList.add("ver");
    }
}
/*Devuelve la posicion que debe ocupar el nuevo elemento
pasandole como parametro el elemento*/
function calculaPosicion(nuevo){
    var arraycanciones = document.getElementsByTagName("li");
    var tamanio = arraycanciones.length;
    for(var i=0; i<tamanio; i++){
        var com = arraycanciones[i].textContent.toLowerCase();
        var com1 = nuevo.toLowerCase();
        if(com1 < com){
            return i;
        }
    }
    return -1;
}
/*guarda el contenido de la lista en localstorage*/
function guardar(){
    var valores = document.getElementsByTagName("li");
    var tamanio = valores.length;
    var cadenalista = "";
    for(var i=0; i<tamanio; i++){
        if(i!=0){
            cadenalista+=":::";
        }
        cadenalista += "'"+valores[i].textContent+"'";
    }
    localStorage.setItem("canciones", cadenalista);
}
/*carga los datos guardados en "canciones" en localstorage*/
function cargar(){
    if(localStorage.length==1){
        var cadena = localStorage.getItem("canciones");
        if(cadena.length!=0){
            var arraycadena = cadena.split(":::");
        }
        var tamanio = arraycadena.length;
        for(var i=0; i<tamanio; i++){
            var nuevacancion = arraycadena[i].substring(1,arraycadena[i].length-1);
            var texto = document.createTextNode(nuevacancion);
            var lista = document.getElementById("lista");
            var lis = document.createElement("li");
            lis.appendChild(texto);
            lista.appendChild(lis);
        }
    }
}
/*borra los datos guardados en "canciones" en localstorage*/
function borrar(){
    localStorage.removeItem("canciones");
    window.location.reload();
}
