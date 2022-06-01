"use strict"

//arrow functions

const sumar = function(n1, n2){
    console.log(n1+n2);
}

sumar(1,2);

//Funcionan para una linea o varias
const arrowFunction = (n1,n2) => console.log(n1*n2);


arrowFunction(2,6);

const divisionySuma = (n1,n2,n3) =>{
    let resultado = n1 + n2;
    resultado = resultado * n3;
    console.log(resultado)
}

divisionySuma(1,2,3);

/*
    const variable = (parametros) =>{cuerpoDeLaFuncion}

*/

//conviertiendo a arrow function

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

const carrito = [
    { nombre: "Monitor", precio: 500 },
    { nombre: "Teclado", precio: 10 },
    { nombre: "Ratón", precio: 5 },
    { nombre: "Cornetas", precio: 20 },
    { nombre: "Audifonos", precio: 28 },
    { nombre: "PC", precio: 300 }
]; 


meses.forEach( mes => {
    if (mes == "Marzo") {
        console.log("Marzo existe");
    }
});


let resultado = carrito.some(producto => {
    return producto.nombre == "Teclado";}
);

console.log(resultado);

resultado = carrito.some(producto => producto.nombre == "Cornetas Grandes"); //arrow function
console.log(resultado);


resultado = carrito.reduce((total, producto)=>{
    return total + producto.precio;
},0);
console.log(resultado);


resultado = carrito.filter(producto=>{
    return producto.precio > 350;
});

console.log(resultado);

