window.addEventListener("load", function(){
    Array.prototype.ultimo = function(){
        return this[this.length-1];
    }
    Array.prototype.primero = function(){
        for(var i=0; i<this.length; i++){
            if(this[i]!=undefined)
                return this[i];
        }
    }
    Array.prototype.limpia = function(){
        this.length=0;
    }
    Array.prototype.compacta = function(){
        for(var i=0; i<this.length; i++){
            if(!this[i]){ 
                this.splice(i,1);
                i--;
            }
        }
    }
    var prueba = new Array();
    prueba[2]=1;
    prueba[5]=2;
    prueba[9]=3;
    alert(prueba.length);
    alert(prueba.primero());
    alert(prueba.ultimo());
    prueba.compacta();
    alert(prueba[0]);
    alert(prueba[1]);
    prueba.limpia();
    alert(prueba.primero());
    alert(prueba.ultimo());
        
});