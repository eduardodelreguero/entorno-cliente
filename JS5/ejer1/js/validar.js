window.addEventListener("load", inicio);

function inicio(){
    var nombre = document.getElementById("nombre");
    nombre.addEventListener("blur", validaVacio);
    var pass1 = document.getElementById("pass1");
    pass1.addEventListener("blur", validaPass);
    pass1.num = 1;
    var pass1 = document.getElementById("pass2");
    pass2.addEventListener("blur", validaPass);
    pass2.num = 2;
    var emilio = document.getElementById("emilio");
    emilio.addEventListener("blur", validaEmail);
    var aBots = document.getElementById("noBots");
    aBots.addEventListener("blur", validaBots);
    antiBots();
    var boton = document.getElementById("sub");
    boton.addEventListener("click", validacionFinal);
    error=new Array(7);
    for(var x in error){
        error[x]=1;
    }
}
function validaEmail(){
    var expemail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
    if(!expemail.test(this.value)){
        this.nextSibling.textContent = "Email no valido";
        error[6]=1;
    }else{
        this.nextSibling.textContent = "";
        error[6]=0;
    }
}
function validaVacio(){
    if(this.value==""){
        this.nextSibling.textContent = "Campo vacio";
        error[0]=1
        return false;
    }else{
        this.nextSibling.textContent = "";
        error[0]=0;
        return true;
    }
}
function validaPass(){
    if(this.num==1){
        if(this.value.length<8){
            this.nextElementSibling.textContent = "Password muy corta, mínimo 8 caracteres";
            error[1]=1;
        }else{
            this.nextElementSibling.textContent = "";
            error[1]=0;
        }
        var expass = /\d/;
        var valus = this.value;
        if(!expass.test(valus)){
            this.nextElementSibling.textContent += " Debe contener un número";
            error[2]=1;
        }else{
            this.nextElementSibling.textContent += "";
            error[2]=0;
        }
    }
    if(this.num==2){
        var p1 = document.getElementById("pass1").value;
        if(this.value!=p1){
            this.nextElementSibling.textContent = "Las contraseñas no coinciden";
            error[3]=1;
        }else{
            this.nextElementSibling.textContent = "";
            error[3]=0;
        }
    }
}
function antiBots(){
    var c1 = Math.floor(Math.random()*9);
    var c2 = Math.floor(Math.random()*9);
    var op = Math.floor(Math.random()*2);
    var opnam;
    document.getElementById("num1").textContent = c1;
    document.getElementById("num2").textContent = c2;
    if(op==0){
        opnam = "+";
        resultado = c1 + c2;
    }else if(op==1){
        opnam = "-";
        resultado = c1 - c2;
    }else if(op==2){
        opnam = "*";
        resultado = c1 * c2;
    }
    document.getElementById("operacion").textContent = opnam;
    
}
function validaBots(){
    if(this.value!=resultado){
        this.nextSibling.textContent = "Eres un bot!!";
        error[4]=1;
    }else{
        this.nextSibling.textContent = "";
        error[4]=0;
    }
}
/*
function validacionFinal(e){
    
    var condi = document.getElementById("condicion");
    if(condi.checked == false){
        error[5]=1;
        alert("checkea");
    }else{
        alert("checkea2");
        error[5]=0;
    }
    alert("eeee");
    for(var i=0; i<error.length; i++){
        if(error[i]==1){
            var errorfin = document.getElementById("fallo");
            errorfin="Ha dejado algun fallo";
            
            alert(errorfin);
            e.preventDefault();
            break;
        }
    }
}*/
function validacionFinal(e){
    
    var condi = document.getElementById("condicion");
    if(condi.checked == false){
        error[5]=1;
    }else{
        error[5]=0;
    }
    if(document.getElementById("pass1").value!=document.getElementById("pass2").value){
        error[3]=1;
    }
    for(var i=0; i<error.length; i++){
        if(error[i]==1){
            var errorfin = document.getElementById("fallo");
            errorfin="Error "+mostrarErrorFinal(i);
            alert(errorfin);
            e.preventDefault();
            break;
        }
    }
    function mostrarErrorFinal(num){
        switch(num){
            case 0:
                return "campo vacío";
                break;
            default:
                return "desconocido";
        }
    }
}