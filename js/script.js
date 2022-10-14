
// busca el titulo del comentario
var comentTit1 = document.querySelector('#comTit')
// busca el comentario
var coment1 = document.querySelector('#comments')
// busca el titulo del comentario
var comentTit2 = document.querySelector('#comTit1')
// busca el comentario
var coment2 = document.querySelector('#comments1')
// busca el titulo del comentario
var comentTit3 = document.querySelector('#comTit2')
// busca el comentario
var coment3 = document.querySelector('#comments2')


var caja = document.getElementById('Box')

// carga y parsea el JSON y obtiene el comentario con el indice que se le pasa
function getPost(a,b,c) {

    //carga con fetch el JSON
    fetch("https://jsonplaceholder.typicode.com/comments")

    //transforma la respuesta en un JSON utilizable
    .then(response => response.json())

    // trabaja sobre el archivo que recibe como respuesta
    .then(response => {
        //imprime el dato por consola
        console.log(response[a].email)
        console.log(response[b].email)
        console.log(response[c].email)

        // crea el comentario

        comentTit1.innerHTML=`<b>${response[a].email} </b> dijo: ` 
        coment1.innerHTML=`<p>${response[a].body} </p>`

        comentTit2.innerHTML=`<b>${response[b].email} </b> dijo: ` 
        coment2.innerHTML=`<p>${response[b].body} </p>`

        comentTit3.innerHTML=`<b>${response[c].email} </b> dijo: ` 
        coment3.innerHTML=`<p>${response[c].body} </p>`
    })
}

var num1= Math.floor(Math.random() *300);
var num2= Math.floor(Math.random() *300);
var num3= Math.floor(Math.random() *300);

//detecta el evento que cuando se clickee el boton, ejecute la funcion getPost()
document.getElementById("cargar").onclick = function () { getPost(num1,num2,num3);

caja.className='dotBox'
}