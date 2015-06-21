window.onload = init;

function init(){
    /*
    if(Modernizr.localstorage){
        alert("^.^");
    }else{
        Modernizr.load({
        text: Modernizr.localstorage,
        nope: "newstor.js",
        complete:
        });
    }*/
    var button = document.getElementById("add_button");
    button.onclick = createSticky;
    var button2 = document.getElementById("borrar");
    button2.onclick = borrar;
    var enter = document.getElementById("note_text");
    enter.onkeypress = createSticky;
    window.addEventListener("storage", mostrar);
    mostrar();
}
function mostrar(){
    document.getElementById("stickies").innerHTML = "";
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.substring(0, 6) == "sticky") {
            var value = JSON.parse(localStorage.getItem(key));
            addStickyToDOM(value);
        }
    }
}
function addStickyToDOM(value) {
    var stickies = document.getElementById("stickies");
    var sticky = document.createElement("li");
    var span = document.createElement("span");
    span.setAttribute("class", "sticky");
    span.innerHTML = value.nota;
    sticky.appendChild(span);
    sticky.setAttribute('class', value.color);
    sticky.num = value.numero;
    /*sticky.onclick = remove{
        sticky.parentNode.removeChild(sticky.cont);
    }*/
    sticky.addEventListener('click', funcion);
    stickies.appendChild(sticky);
}

function createSticky(e) {
    if(e.keyCode == 13 || e.keyCode == 0){
        e.preventDefault();
        var value = document.getElementById("note_text").value;
        var color = document.getElementById("color").value;
        var tiempo=new Date().getTime();
        var key = "sticky_" + tiempo;
        var objnota = { 'nota' : value, 'color' : color, 'numero': key };
        localStorage.setItem(key, JSON.stringify(objnota));
        addStickyToDOM(objnota);
    }
}

function funcion(){
    this.classList.toggle("borrables");
    //this.parentNode.removeChild(this);
    //localStorage.removeItem(this.num);
}
function borrar(){
    var borrables = document.getElementsByClassName("borrables");
    for(var i=0; i<borrables.length; i++){
        //borrables[i].parentNode.removeChild(borrables[i]);
        localStorage.removeItem(borrables[i].num);
        
    }
    mostrar();
}

/*
Modernizr.load(
    {
        text: Modernizr.localstorage,
        nope: "testStorage.js"
    }     
*/