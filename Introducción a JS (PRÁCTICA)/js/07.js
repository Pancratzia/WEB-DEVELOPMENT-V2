"use strict"

//ARREGLOS

const numeros = [10, 20, 30, 40, 50, 60] //La más usada
console.log(numeros);
console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo');
console.log(meses);
console.table(meses);

//acceder a los valores de un arreglo

console.log(numeros[4]);

console.log(meses.length)
console.log(numeros.length)

//recorrer un arreglo

meses.forEach(function (mes) { //Para cada elemento de meses
    console.log(mes);
});

//Agregar y eliminar elementos del arreglo

numeros[6] = 70;
console.log(numeros); // No muy habitual

numeros.push(80, 90, 100); //Agrega al final del arreglo
console.log(numeros);

numeros.unshift(-20, -10, 0); //Agrega al inicio del arreglo
console.log(numeros);

numeros.pop(); //elimina el ultimo elemento del arreglo
numeros.shift(); // elimina el primer elemento del arreglo

console.log(numeros);

numeros.splice(2, 1); //elimina (n,m) m elementos a partir de la posicion n
console.log(numeros);

// Rest operator o spread operator es mas recomendado que editar el arreglo original

const nuevoArreglo = [... meses, "Junio"];
const nuevoArreglo2 = [ "Diciembre",... meses];
console.log(nuevoArreglo);
console.log(nuevoArreglo2);


