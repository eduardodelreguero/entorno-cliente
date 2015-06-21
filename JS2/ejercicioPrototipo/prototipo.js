window.onload = function(){
    var texto = document.createTextNode("texto añadido después de 'hola'");
    var span = document.createElement("span").appendChild(texto);
    var ref = document.getElementById("primerspan");
    //insertAfter(span, ref);
    ref._insertAfter(span);
    var texto2 = document.createTextNode("texto añadido después de 'adiós'");
    var span2 = document.createElement("span").appendChild(texto2);
    var ref2 = document.getElementById("segundospan");
    ref2._insertAfter(span2);
    
    cochesArray();
}

HTMLElement.prototype._insertAfter = function(nuevo){
    this.parentNode.insertBefore(nuevo, this.nextSibling);
}
