"use strict"

const numero1 = 20;
const numero2 = "30";

console.log(parseInt(numero2)); //ParseInt es una funcion

console.log(numero1.toString()); // toString es un metodo

//FUNCIONES CON PARAMETROS
//Al ponerle =, es un parametro por default

suma1(100,15);
function suma1(n1 = 0, n2 = 0) {
    console.log(n1 + n2);
}

suma1(1,2);
suma1(6,6);
suma1(8,2);
suma1();
suma1(100000);

const suma2 = function(n1 = 0, n2 = 0){
    console.log(n1+n2);
}
suma2(1,2);
suma2(1,3);
suma2(1,4);

