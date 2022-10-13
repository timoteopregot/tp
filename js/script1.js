/* esta funcion recibe un indice, obtiene el JSON , lo parsea y regresa el elemento indice
de ese JSON */

async function obtenerComentario(i){
    const response= await fetch("https://jsonplaceholder.typicode.com/comments/")
    var json =  await response.json();

    const idNum = json[i].id;
    const idNom = json[i].name;
    const idBody = json[i].body;


    console.log(json);

    console.log(json[i]);

    var comentario = {

        numero : idNum ,
        nombre : idNom ,
        coment : idBody
    }

    return comentario;

}



var indice= Math.floor(Math.random() *300);


var dato=obtenerComentario(indice);

console.log(dato)
