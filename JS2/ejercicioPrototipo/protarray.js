function cochesArray(){
    coches = ["seat", "ferrari", "mercedes"];
    alert(coches._mostraPrimero());
}

Array.prototype._mostraPrimero = function(){
    return this[0];
}