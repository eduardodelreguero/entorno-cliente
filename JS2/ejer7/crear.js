window.onload = function () {
    varfirstPar = document.getElementById("firstParagraph"),
    secondPar = document.getElementById("secondParagraph"),
    targetLink = document.querySelector("#secondParagraph a"), //Obtenemos el link del segundo párrafo
    myNewList = document.createElement("ul"), //Creamos un elemento "lista desordenada"
    myNewListItemTemplate = document.createElement("li"), // Creamos una plantilla para un elemento list
    myNewListItem = myNewListItemTemplate.cloneNode(); //Clonamos la plantilla en myNewListItem
    myNewListItem.classList.add("menuitem"); //Añadimos al clon una nueva clase CSS
    myNewListItem.innerText = "One"; //Añadimos al clon nuevo texto
    myNewList.appendChild(myNewListItem); //Añadimos el clon a la lista desordenada
    myNewListItem = myNewListItemTemplate.cloneNode(); //Clonamos la plantillla de nuevo en myNewListItem
    myNewListItem.appendChild(targetLink); //Añadimos al clon el link del segundo párrafo (se borra de su sitio original)
    myNewList.appendChild(myNewListItem); //Añadimos el clon a la lista desordenada
    firstPar.appendChild(myNewList); //Añadimos la lista al primer párrafo
}