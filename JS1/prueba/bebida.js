var bebida = "Cerveza";
var letra  = "";
var botellas = 5;
while (botellas > 0) {
	letra = letra + botellas + " botellas de " + bebida + " en el muro <br>";
	letra = letra + botellas + " botellas de " + bebida + "<br>";
	letra = letra + "Una se cayó, y quedaron <br>";
	if (botellas > 1) {
		letra = letra + (botellas-1) + " botellas de " + bebida + " en el muro <br>";
	}
	else {
		letra = letra + "No hay botellas de " + bebida + " en el muro <br>";
	}
	botellas = botellas - 1;
}
document.write(letra); // Usar con mucha precaución, borra todo lo que hubiera ya escrito en la página
