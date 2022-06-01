"use strict"

//notification API
//Para obtener permisos

const boton = document.querySelector("#boton");

boton.addEventListener("click", function () {
    Notification.requestPermission() //Pregunta si damos permiso de dar notificaciones
        .then(resultado => console.log("El resultado es: ", resultado))
        .catch(error => console.log("El resultado es: ", error))
});

if(Notification.permission=="granted"){
    new Notification("Esta es una notificación", {
        icon: "img/logo.png",
        body: "Pankranotificación"
    })
}