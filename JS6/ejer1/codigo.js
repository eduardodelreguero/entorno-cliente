window.addEventListener("load", function(){
    var linda = {
        nombre: "Linda",
        peso: 40,
        raza: "mezcla",
        gustos: ["pasear", "pelotas", "jugar", "saltar"]
    };
    
    var span = document.getElementById("sp");
    
    var texto = "A "+linda.nombre+" le gusta ";
    for(var x in linda.gustos){
        texto += linda.gustos[x];
        if(x<linda.gustos.length-1){
            texto += ", ";
        }else{
            texto += ".";
        }
    }
    span.textContent = texto;
});
