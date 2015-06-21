window.onload = function(){
    var enlace = document.querySelector(".enlacea");
    enlace.setAttribute("class","enlaceb");
}

function cambio(){
    var divcont = document.querySelector("#cont");
    divcont.classList.toggle("amplio");
    divcont.classList.toggle("reducido");
}