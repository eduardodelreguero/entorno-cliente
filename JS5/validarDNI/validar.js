const CADENA = "TRWAGMYFPDXBNJZSQVHLCKE";
window.addEventListener("load", function(){
    var letras = CADENA.split("");
    letras = letras.sort();
    var selector = document.getElementById("letra");
    for(var i=0; i<letras.length; i++){
        var opcion = document.createElement("option");
        opcion.setAttribute("value", letras[i]);
        opcion.textContent = letras[i];
        selector.appendChild(opcion);
    }
    var boton = document.getElementById("enviar");
    var numero = document.getElementById("numero");
    
    boton.addEventListener("click", validar);
    numero.addEventListener("keypress", filtroNumeros);
});

/*
    Funcion que valida que el dni sea correcto
*/
function validar(e){
    var numero = document.getElementById("numero").value;
    var letra = document.getElementById("letra").value;
    
    var resto = numero % 23;
    var letracorrecta = CADENA.charAt(resto);
    
    var campoerror = this.parentNode.previousElementSibling;
    if(numero.length!=8){
        e.preventDefault();
        var textoerror;
        if(numero.length==0){
            textoerror="El DNI debe completarse";
        }else{
            textoerror="El DNI debe tener 8 números";
        }
        campoerror.textContent = textoerror;
        return false;
    }
    
    if(letracorrecta != letra){
        e.preventDefault();
        campoerror.textContent = "La letra no es correcta. La letra correcta es... "+letracorrecta;
        return false;
    }
    campoerror.textContent = "";
    alert("DNI correcto");
}

/*
    Funcion que impide meter letras en el campo del DNI
*/
function filtroNumeros(e){
    if(e.keyCode<48 || e.keyCode>57){
        e.preventDefault();
    }
}

function enviado(){
    alert("enviado");
}