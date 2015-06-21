window.addEventListener("load", function(){
    var empresa = new Empresa("Muebles Paco", "98765432x", "987654324", "paco@muebles.com");
    var cliente = new Cliente("Nuevo", "00000000X","000000000");
    factura = new Factura(empresa, cliente);
    if(localStorage.length>0){
        factura = JSON.parse(localStorage.getItem("factura1"));
        document.getElementById("fproducto").classList.remove("fproducto");
        document.getElementById("fcliente").classList.add("fproducto");  
    }
    imprimir(factura);
    
    document.getElementById("fcliente").addEventListener("submit", form1);
    document.getElementById("fproducto").addEventListener("submit", form2);
    document.getElementById("print").addEventListener("click", function(){
        window.print();
    });
});

function form1(e){
    e.preventDefault();
    factura.cliente.nombre = document.getElementById("nombrecliente").value;
    factura.cliente.dni = document.getElementById("dnicliente").value;
    factura.cliente.contacto = document.getElementById("tlfcliente").value;
    document.getElementById("fproducto").classList.remove("fproducto");
    document.getElementById("fcliente").classList.add("fproducto");   
    imprimir(factura);
    
}
function form2(e){
    e.preventDefault();
    var producto = document.getElementById("producto").value;
    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;
    var linea = new Linea(producto, precio, cantidad);
    factura.setLineas(linea);
    imprimir(factura);
}
function Factura(empresa, cliente){
    this.empresa = empresa;
    this.cliente = cliente;
    this.lineas = new Array();
    this.setLineas = function(linea){
        linea.idlinea = this.lineas.length+1; //crearautonumerico;
        this.lineas.push(linea);
    }
}
function Empresa(nombre, cif, contacto, email){
    this.nombre = nombre;
    this.cif = cif;
    this.contacto = contacto;
    this.email = email;
}
function Cliente(nombre, dni, contacto){
    this.nombre = nombre;
    this.dni = dni;
    this.contacto = contacto;
}
function Linea(producto, precio, cantidad){
    this.idlinea = 0;
    this.producto = producto;
    this.precio = precio;
    this.cantidad = cantidad;
}
function imprimir(factura){
        document.getElementById("cliente").textContent = factura.cliente.nombre;
        var tabla = document.getElementById("factura");
        tabla.innerHTML = "";
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        th.textContent = "id";
        tr.appendChild(th);
        var th = document.createElement("th");
        th.textContent = "Productos";
        tr.appendChild(th);
        var th = document.createElement("th");
        th.textContent = "Precio";
        tr.appendChild(th);
        var th = document.createElement("th");
        th.textContent = "Cantidad";
        tr.appendChild(th);
        var th = document.createElement("th");
        th.textContent = "Total";
        tr.appendChild(th);
        tabla.appendChild(tr);
        var total = 0;
        for(var i=0; i<factura.lineas.length; i++){
            
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.textContent = factura.lineas[i].idlinea;
            tr.appendChild(td);
            var td = document.createElement("td");
            td.textContent = factura.lineas[i].producto;
            tr.appendChild(td);
            var td = document.createElement("td");
            td.textContent = factura.lineas[i].precio;
            tr.appendChild(td);
            var td = document.createElement("td");
            td.textContent = factura.lineas[i].cantidad;
            tr.appendChild(td);
            var td = document.createElement("td");
            var totallinea = factura.lineas[i].cantidad * factura.lineas[i].precio;
            td.textContent = totallinea;
            tr.appendChild(td);
            tabla.appendChild(tr);
            total +=totallinea;
        } 
        document.getElementById("total").textContent = total;
        document.getElementById("empresa").textContent = factura.empresa.nombre;
        document.getElementById("cif").textContent = factura.empresa.cif;
        document.getElementById("telf").textContent = factura.empresa.contacto;
        document.getElementById("correo").textContent = factura.empresa.email;
        
        document.getElementById("dni").textContent = factura.cliente.dni;
        document.getElementById("telf2").textContent = factura.cliente.contacto;
        guardar(factura);
}
function guardar(factura){
        localStorage.setItem("factura1", JSON.stringify(factura));
}