const correo= document.querySelector('#mailDir')
const mens= document.querySelector('t#xtMsg')
const enviar = document.querySelector('#btSend')
const form = document.querySelector("form");



form.addEventListener("submit", (event) => {
 // cancela el comportamiento por defecto
 event.preventDefault();
 
 // resto del codigo
 
 if(correo.value.length==0||mens.value.length==0){
    alert('Complete el Formulario')
}
})