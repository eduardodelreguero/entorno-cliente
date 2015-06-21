window.onload = function(){
    var texto = document.createTextNode("texto añadido después de 'hola'");
    var span = document.createElement("span").appendChild(texto);
    var ref = document.getElementById("primerspan");
    insertAfter(span, ref);
    
    var texto2 = document.createTextNode("texto añadido después de 'adiós'");
    var span2 = document.createElement("span").appendChild(texto2);
    var ref2 = document.getElementById("segundospan");
    insertAfter(span2, ref2);
}

function insertAfter(nuevo, referencia){
    referencia.parentNode.insertBefore(nuevo, referencia.nextSibling);
}