"use strict"

//Funciones

//declaracion

function sumar(){
    console.log(10+25);
}

//llamada

sumar(); 

//expresión de la función

const sumar2 = function(){
    console.log(3+4);
}

sumar2();

//IIFE

(function(){
    console.log("Esto es una función");
})(); //Se autoinvoca. No es muy usada en reutilización
//Se usa para no acceder a funciones de otro archivo


