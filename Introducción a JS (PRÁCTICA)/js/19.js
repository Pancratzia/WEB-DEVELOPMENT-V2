"use strict"

//promises

const usuarioAutenticado = new Promise((resolve, reject) =>{
    const auth = true;

    if(auth){
        resolve("Usuario Autenticado"); //Se cumple el promise
    }else{
        reject("No se pudo iniciar Sesión"); //No se cumple el promise
    }
});

usuarioAutenticado
    .then( resultado=>console.log(resultado))
    .catch( error=>console.log(error))

console.log(usuarioAutenticado);

//Pending: Pendiente por cumplir o rechazar
//Fulfilled: Cumplido
//Rejected: Rechazado