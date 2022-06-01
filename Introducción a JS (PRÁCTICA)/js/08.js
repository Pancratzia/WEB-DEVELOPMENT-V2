"use strict"

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

const carrito = [
    { nombre: "Monitor", precio: 500 },
    { nombre: "Teclado", precio: 10 },
    { nombre: "Ratón", precio: 5 },
    { nombre: "Cornetas", precio: 20 },
    { nombre: "Audifonos", precio: 25 },
    { nombre: "PC", precio: 300 }
]; //arreglo de objetos

//Saber si un elemento existe en el arreglo
//forEach

meses.forEach(function (mes) {
    if (mes == "Marzo") {
        console.log("Marzo existe");
    }
});


//includes

let resultado = meses.includes("Marzo");
console.log(resultado);
resultado = meses.includes("Agosto");
console.log(resultado);

//Para buscar en arreglo de objetos no se usa includes
//Se usa some

resultado = carrito.some(function (producto) {
    return producto.nombre == "Teclado";
});

console.log(resultado);

resultado = carrito.some(producto => producto.nombre == "Cornetas Grandes"); //arrow function
console.log(resultado);

//reduce - Para sumar todos los precios de mi objeto


//(a,b) a= acumulador, b=campo acumulable. Recordar poner valor inicial 0
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio;
},0);
console.log(resultado);

//FILTER - obtener elementos segun ciertas condiciones

resultado = carrito.filter(function(producto){
    return producto.precio > 250;
});

console.log(resultado);


