/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// GLOBALES ///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
var mapa;
var puntuacion = 1000;
var posactual;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();


// SITIOS /////////////////////////////////////////////////////////////////////////////////////////


var villamarin = {
    opciones: [
        {'num':1, 'opcion':"Benito Villamarin"},
        {'num':2, 'opcion':"Alhambra"},
        {'num':3, 'opcion':"Giralda"},
        {'num':4, 'opcion':"Ramón Sánchez-Pizjuán"},
        {'num':5, 'opcion':"Alcazaba de Málaga"},
        {'num':6, 'opcion':"Cines kinepolis, Granada"}
    ],
    localizacion: {
        latitude: 37.356403,
        longitude: -5.981611
    },
    nombre: 1,
    pistas: [
        {'num':1, 'pista':"Arquitecto: Antonio González Cordón"},
        {'num':2, 'pista':"Capacidad máxima de 51700 personas"},
        {'num':3, 'pista':"Acuartelamiento de las tropas marroquíes"},
        {'num':4, 'pista':"Se celebró el famoso 12-1 de España - Malta"},
        {'num':5, 'pista':"Estadio del Real Betis"},
        {'num':6, 'pista':"Empieza por Benito y termina por Villamarin"}
    ],
    pista:-1,
    superficie: 
        [
            new google.maps.LatLng(37.3552259,-5.9821491),
            new google.maps.LatLng(37.3568206,-5.9831254),
            new google.maps.LatLng(37.3577459,-5.9810172),
            new google.maps.LatLng(37.3558442,-5.9803681),
            new google.maps.LatLng(37.3552259,-5.9821491)
        ],
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// UTILIDADES ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

function $(id){
    return document.getElementById(id);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// JUEGO //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

function comprobar(){
    if(this.c){
        felicitar();
    }else{
        terminar();
    }
}
function felicitar(){
    $("texto-final").textContent = "Acertaste! Tu puntuación ha sido de "+puntuacion+" pts";
    mapa.setZoom(17);
    mapa.setMapTypeId(google.maps.MapTypeId.SATELLITE);
     $("capa-final").classList.remove("abajo");
    $("capa-final").classList.add("arriba");
    villamarin.estadio.setMap(null);
    $("calcular-ruta").addEventListener("click", function(){
        calcularRuta();
    });
}
function terminar(){
    $("texto-final").textContent = "Acertaste! Tu puntuación ha sido de -1000 pts";
    mapa.setZoom(17);
    mapa.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    $("capa-final").classList.remove("abajo");
    $("capa-final").classList.add("arriba");
    villamarin.estadio.setMap(null);
    $("calcular-ruta").addEventListener("click", function(){
        calcularRuta();
    });
}
function formularPregunta(lugar){
    $("puntuacion").textContent = puntuacion;
    pista = ++lugar.pista;
    centro = new google.maps.LatLng(lugar.localizacion.latitude, lugar.localizacion.longitude);
    mapa.setCenter(centro);
    $("texto-pista").textContent = "Pista número "+lugar.pistas[pista].num+": "+lugar.pistas[pista].pista;
    $("opciones").innerHTML = "";
    for(var i=0 in lugar.opciones){
        var enlace = document.createElement("a");
        enlace.classList.add("opcion");
        enlace.textContent = lugar.opciones[i].opcion;
        enlace.num = lugar.opciones[i].num;
        if(lugar.opciones[i].num == lugar.nombre){
            enlace.c = true;
        }else{
            enlace.c = false;
        }
        enlace.addEventListener("click", comprobar);
        $("opciones").appendChild(enlace);
    }
}

function cambiarZoom(){
        mapa.setZoom(mapa.getZoom()+4);
        puntuacion -= 150;
        formularPregunta(villamarin);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// MAPAS //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//CALCULO DE RUTAS //////////////////////////////////////////////////////////////////////////////////
function calcularRuta() {
    mapa.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    var medio = "DRIVING";
    var request = {
        origin: posactual,
        destination: villamarin.superficie[1],
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}
//GEOLOCALIZACION ///////////////////////////////////////////////////////////////////////////////////
function visualizarSituacion(posicion) {
	var lat = posicion.coords.latitude;
	var long = posicion.coords.longitude;
    posactual = new google.maps.LatLng(lat, long);
    var marker = new google.maps.Marker({
        position: posactual,
        title: "Estamos aqui"
    });
    
    marker.setMap(mapa);
}
function obtenerSituacion() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(visualizarSituacion, errorSituacion); 
	} else {
		alert("No hay soporte de geolocalización");
	}
}
function errorSituacion(){
    alert("Error al recoger su posición");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// INIT //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

function init() {
    obtenerSituacion();
    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapaconfig = {
        zoom: 3,
        center: new google.maps.LatLng(villamarin.localizacion.latitude, villamarin.localizacion.longitude),
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    mapa = new google.maps.Map($('cuadro-mapa'), mapaconfig);
    
    $("pista").addEventListener("click", cambiarZoom);
    
    
    
    formularPregunta(villamarin);
    villamarin.estadio= new google.maps.Polygon({
        path: villamarin.superficie,
        strokeColor: "#608b4f",
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: "#97d97e",
        fillOpacity: 1
    })
    villamarin.estadio.setMap(mapa);
    directionsDisplay.setMap(mapa);
}

window.addEventListener("load", init);