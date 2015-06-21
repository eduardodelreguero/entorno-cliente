window.addEventListener("load", function(){
    document.getElementById("sub").addEventListener("click", corregir);
    document.getElementById("reset").addEventListener("click", resetear);
    document.getElementById("p6").addEventListener("keypress", cuentaLetras);
    document.getElementById("p6").addEventListener("keyup", cuentaLetras);
    segundos=0;
    intentos=0;
    contador();
    
});
function contador(){
    segundos++;
    setTimeout("contador()", 1000);
}
function cuentaLetras(e){
    var texto = document.getElementById("p6").value;
    if(texto.length>100){
        this.nextSibling.classList.add("mal");
    }else{
        this.nextSibling.classList.remove("mal");
    }
    var contenido = this.nextSibling.textContent;
    this.nextSibling.textContent=100-texto.length;
}
function resetear(e){
    alert("hola");
    
    if(!confirm("Va a borrar todas las respuestas, ¿Está seguro?")){
        e.preventDefault();
    }
    
}
function corregir(e){
    e.preventDefault();
    intentos++;
    var respuestas = new Array(8);
    for(var i=0; i<8 ; i++){
        respuestas[i]=0;
    }
    var divs = document.getElementsByTagName("div");
    
    for(var i=0; i<divs.length; i++){
        divs[i].classList.remove("mal");
    }
    
    var checks=divs[0].getElementsByTagName("input");
    if(!(checks[0].checked && !checks[1].checked && checks[2].checked && !checks[3].checked)){
        divs[0].classList.add("mal");
        respuestas[0]=1;
    }
    
    var checks = divs[1].getElementsByTagName("input");
    if(!checks[2].checked){
        divs[1].classList.add("mal");
        respuestas[1]=1;
    }
    
    var checks = divs[2].getElementsByTagName("select");
    if(!checks[0].options[0].selected){
        divs[2].classList.add("mal");
        respuestas[2]=1;
    }
    
    var checks = divs[3].getElementsByTagName("select");
    if(!checks[0].options[1].selected){
        divs[3].classList.add("mal");
        respuestas[3]=1;
    }
    
    var checks = divs[4].getElementsByTagName("input");
    if(checks[0].value != 'document.getElementById("gato")'){
        divs[4].classList.add("mal");
        respuestas[4]=1;
    }
    
    var checks = divs[6].getElementsByTagName("input");
    if(checks[0].value != '5'){
        divs[6].classList.add("mal");
        respuestas[6]=1;
    }
    
    var checks=divs[7].getElementsByTagName("input");
    if(!(checks[0].checked && checks[1].checked && checks[2].checked && checks[3].checked)){
        divs[7].classList.add("mal");
        respuestas[7]=1;
    }
    var texto = document.getElementById("p6").value;
    if(texto.length>100){
        respuestas[5]=1;
    }
    var cadena = "Fallaste las preguntas ";
    var perfecto = true;
    for(var i=0; i<respuestas.length;i++){
        if(respuestas[i]==1){
            var num = i+1;
            cadena += " "+num+" ";
            perfecto = false;
        }
    }
    if(perfecto==false){
        alert(cadena+" en un tiempo de "+segundos+" segundos"+" intentandolo "+intentos+" veces");
        this.setAttribute("value", "Reintentar");
    }else{
        alert("Muy bien, todo correcto");
        this.setAttribute("disabled", "disabled");
    }
}