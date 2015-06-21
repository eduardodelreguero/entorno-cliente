function init(){
    $("#boton").on("click", validar);
    $("#correo, #confirm").on("blur", validar);
}
function validarCorreo(correo){
    var exp = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    return exp.test(correo);
}
function validar(){
    if(validarCorreo($("#contenedor").children().first().val())){
        if($("#correo").val()!==$("#confirm").val()){
            $("#confirm").next().text("No coincide");
            $("#correo").next().text("");
        }else{
            $("#confirm").next().text("");
            $("#correo").next().text("");
        }
    }else{
        $("#correo").next().text("Correo no válido");
    }
}
$(document).ready(init);