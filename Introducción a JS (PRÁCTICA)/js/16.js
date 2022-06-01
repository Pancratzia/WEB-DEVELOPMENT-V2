"use strict"

//POO

const producto = {
    nombre: "Teclado",
    precio: 15
} //object literal

function Producto(nombre, precio) {

    this.nombre = nombre;
    this.precio = precio;

} //object constructor

const producto2 = new Producto("Monitor", 300);

function formatearProducto(producto) {
    return `El ${producto.nombre} tiene un precio de ${producto.precio}$`;
}

console.log(producto2);

console.log(formatearProducto(producto2));

//Prototypes

function Cliente(nombre, apellido) {

    this.nombre = nombre;
    this.apellido = apellido;

} //object constructor

Cliente.prototype.formatearCliente = function(){
    return `${this.nombre} ${this.apellido}`
}

const cliente = new Cliente("Laura", "Ortega");

console.log(cliente.formatearCliente());

