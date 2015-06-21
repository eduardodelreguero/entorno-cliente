window.addEventListener("load", inicio);

function inicio(){
    var inputs = document.querySelectorAll("input");
    var total = inputs.length;
    for(var i=0; i<total; i++){
        inputs[i].addEventListener("click", validaVacio);
    }
    var passes = document.querySelectorAll("input[type='password']")
}
function validar(){
    this.
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