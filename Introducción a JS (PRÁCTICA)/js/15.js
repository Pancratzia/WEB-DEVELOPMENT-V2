"use strict"

const carrito = [
    { nombre: "Monitor", precio: 500 },
    { nombre: "Teclado", precio: 10 },
    { nombre: "Ratón", precio: 5 },
    { nombre: "Cornetas", precio: 20 },
    { nombre: "Audifonos", precio: 25 },
    { nombre: "PC", precio: 300 }
]; //arreglo de objetos


//forEach y map solo se pueden usar en arreglos

//forEach

carrito.forEach(function (producto) {
    console.log(producto.nombre);
});

carrito.forEach(producto =>
    console.log(producto.precio + "$"));

//map - crea un nuevo arreglo con los parametros que se le pasen

const arreglo = carrito.map(producto=> `${producto.nombre}-${producto.precio}$`);

console.log(arreglo);
