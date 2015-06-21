window.onload = function(){
    var parrafo1=document.getElementById("firstParagraph");
    var parrafo2=document.getElementById("secondParagraph");
    var mensaje = "Contenido original \n Primer parrafo.innerText: " + parrafo1.innerText;
    mensaje += "\n Segundo parrafo.innerText: " + parrafo2.innerText;
    mensaje += "\n Primer parrafo.innerHTML: " + parrafo1.innerHTML;
    mensaje += "\n Segundo parrafo.innerHTML: " + parrafo2.innerHTML;
    
    document.getElementById("spanfin").innerText=mensaje;
    
    document.getElementById("boton1").onclick=function(){
        parrafo1.innerText = "Primer parrafo cambiado";
    }
    document.getElementById("boton2").onclick=function(){
        parrafo2.innerHTML = "Esto es una lista<ul><li>Hola</li><li>adios</li></ul>";
    }
    document.getElementById("boton3").onclick=function(){
        parrafo2.innerText = "texto boton 3";
    }
    document.getElementById("boton4").onclick=function(){
        parrafo2.textContent = "texto boton 4";
    }
    document.getElementById("boton5").onclick=function(){
        parrafo2.firstChild.textContent="texto boton5";
    }
}