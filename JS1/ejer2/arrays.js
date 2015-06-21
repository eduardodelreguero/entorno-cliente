function muestraArray(){
    var lista = new Array();
    lista[0] = 12;
    lista[1] = 9.9;
    lista[2] = 7;
    lista[3] = "hola";

    for(var i=0; i<lista.length; i++){
        var num = "song"+(i+1);
        var contenido=document.getElementById(num);
        if(i == 0){
            c = "La temperatura en el inicio es: ";
        }else{
            c = "La temperatura en " + i +" ";
        }
        contenido.innerHTML = c+lista[i];
    }
}

window.onload = muestraArray;