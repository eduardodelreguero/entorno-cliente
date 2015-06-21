window.onload = function(){
	var faqs=$("faqs");
	var elementosH2=faqs.getElementsByTagName("h2");
    elementosH2[0].focus();
	for (var i= 0; i<elementosH2.length; i++){
		elementosH2[i].addEventListener("click",cambiar);
	}
}
function cambiar (){
	var h2=this;
	h2.nextElementSibling.classList.toggle("abierto");
    h2.nextElementSibling.classList.toggle("cerrado");
	h2.classList.toggle("mas");
    h2.classList.toggle("menos");
}

var $ = function (id){
	return document.getElementById(id);
}