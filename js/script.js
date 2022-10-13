
// busca el titulo del comentario
var comentTit = document.querySelector('#comTit')
// busca el comentario
var coment = document.querySelector('#comments')



// carga y parsea el JSON y obtiene el comentario con el indice que se le pasa
function getPost(num) {

    //carga con fetch el JSON
    fetch("https://jsonplaceholder.typicode.com/comments")

    //transforma la respuesta en un JSON utilizable
    .then(response => response.json())

    // trabaja sobre el archivo que recibe como respuesta
    .then(response => {
        //imprime el dato por consola
        console.log(response[num].email)

        // crea el comentario

        comentTit.innerHTML=`<b>${response[num].email} </b> dijo: ` 
        coment.innerHTML=`<p>${response[num].body} </p>`
    })
}

var indice= Math.floor(Math.random() *300);

//detecta el evento que cuando se clickee el boton, ejecute la funcion getPost()
document.getElementById("cargar").onclick = function () { getPost(indice)}