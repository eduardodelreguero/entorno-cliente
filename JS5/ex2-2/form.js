window.onload = function () {
    var li = document.createElement('li');
    var bt = document.getElementById("bt");
    bt.addEventListener("click", validar)
    
    //cambio al coger los dos span, añado clase y cojo spans con esa clase
    var digitos = document.querySelectorAll(".sumando");
    digitos[0].innerText = Math.floor(Math.random() * 9 + 1);
    digitos[1].innerText = Math.floor(Math.random() * 9 + 1);
    //la variable bt ya existe
    //var bt = document.getElementById("bt");
    document.miForm.bt.disabled = false;
    document.getElementById("acepto").addEventListener("click", habilitar);
    document.miForm.bt.disabled = true;
}
function habilitar(){
    if(document.miForm.bt.disabled)
        document.miForm.bt.disabled = false;
    else
        document.miForm.bt.disabled = true;
}
function validar(e) {
    
alert("comienza a validar");
    var msg;
    var ok = true;

    var errUsuario = false;
    var nom = document.getElementById("nombre").value;
    if (nom == null || nom.length == 0 || /^\s+$/.test(nom)) {
        //(/^\s+$/.test(valor)) obliga a que el valor introducido por el usuario no sólo esté formado por espacios en blanco.
        errUsuario = true;
        msg += "\t * El Usuario que ha introducido está vacío o no es válido.\n"
        ok = false;
    }

    var errMail = false;
    var mail = document.getElementById("mail").value;
    console.log("Email: '%s'\n", mail);
    var expreg3 = new RegExp("^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}$");
    if (!expreg3.test(mail)) {
        errEmail = true;
        msg += "\t * El formato de Correo-e no es válido.\n";
        ok = false;
    }



    var errClave = false;
    var clave = document.getElementById("clave").value;
    if (clave.length < 8) {
        ok = false;
        errClave = true;
        msg += "\t * lA CLAVE ES INFERIOR A 8 CARACTERES.\n"
    } else {
        valido = false;
        for (var i = 0; i < clave.length; i++) {
            if (isNaN(clave.indexOf(i))) {
                ok = false;
                errClave = true;
            }
        }
    }

    var errClavesDistintas = false;
    var clave2 = document.getElementById("clave2").value;
    if (clave != clave2) {
        ok = false;
        errClavesDistintas = true;
        msg += "\t * LAS CLAVES NO COINCIDEN.\n";
    }

    var suma = document.getElementById("suma").value;
    var digitos = document.querySelectorAll(".sumando");
    var di1 = digitos[0].textContent;
    var di2 = digitos[1].textContent;
    var res = di1*1.0 + di2*1.0;

    var errSuma = false;
    if (suma != res) {
        ok = false;
        errSuma = true;
        msg += "\t * EL RESULTADO DE LA SUMA ES INCORRECTO.\n";
    }

    var errCheckBox = false;
    var chek = document.getElementById("acepto");
    if (!chek.checked) {
        ok = false;
        msg += "\t * EL CHECKBOX NO ESTÁ SELECCIONADO.\n";
        errCheckBox = true;
    }


    if (!ok) {
        alert(msg);

        //Dejar el foco en la caja de texto correspondiente.
        if (errUsuario) {
            miForm.nombre.select();
            miForm.nombre.focus();
        } else if (errMail) {
            miForm.mail.select();
            miForm.mail.focus();


        } else if (errClave) {
            miForm.clave.select();
            miForm.clave.focus();
        } else if (errClavesDistintas) {
            miForm.clave.value = "";
            miForm.clave2.value = "";
            miForm.clave.select();
            miForm.clave2.select();
            miForm.clave2.focus();
        }
    }

    if (errUsuario == false && errMail == false && errClave == false && errClavesDistintas == false && errSuma == false && errCheckBox == false) {
        document.miForm.bt.disabled = true;
    }else{
        e.preventDefault();
    }
}