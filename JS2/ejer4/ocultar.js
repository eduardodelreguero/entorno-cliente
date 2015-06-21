window.onload = function(){
    var listado = new Array();
    listado[0]="H";
    listado[1]="o";
    listado[2]="l";
    listado[3]="a";
    var c="";
    for(var x in listado){
        c+=listado[x];
    }
    alert(c);
    
    c="";
    var longi = listado.length;
    for(var x=0; x<longi; x++){
        c+=listado[x];
    }
    alert(c);
    c="#";
    listanodos = document.getElementsByTagName("p");
    longi=listanodos.length;
    for(var x=0; x<longi; x++){
        listanodos[x].innerHTML = c;
        c+="#";
    }
    
    /*
    c="#"
    //FOR IN NO FUNCIONA BIEN CON NODELIST
    for(var x in listanodos){
        listanodos[x].innerHTML = c;
        c+="#";
    }
    */
}