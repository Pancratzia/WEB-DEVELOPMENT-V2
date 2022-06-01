"use strict"

const producto = {
    nombre: "Monitor",
    precio: 250,
    disponible: true,
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}


//Unir dos objetos con rest operator sin modificar los objetos originales
const nuevoProducto = { ...producto, ...medidas }

console.log(producto)
console.log(nuevoProducto)