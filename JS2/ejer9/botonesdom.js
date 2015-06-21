window.onload= function(){
    
    //document.body.appendChild(document.createElement("span").appendChild(document.createTextNode("texto añadido al final")));
    
   
    
    var botones = document.getElementsByTagName("button");
        
    botones[0].addEventListener('onclick', funcion(2));
    

}

function funcion(num){
    if(num==0){
        var parrafo = document.querySelector("p");
        parrafo.innerText = "Primer parrafo cambiado";
    }else if(num==1){
        parrafo2.innerHTML = "Esto es una lista<ul><li>Hola</li><li>adios</li></ul>";
    }else if(num==2){
        parrafo2.innerText = "texto boton 3";
    }else if(num==3){
        parrafo2.textContent = "texto boton 4";
    }else if(num==4){    
        parrafo2.firstChild.textContent="texto boton5";
    }
}