"use strict"

//CLASES

class Producto {

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}$`
    }

}

const producto = new Producto("Monitor", 300);

console.log(producto);
console.log(producto.formatearProducto());

//herencia

class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre,precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()}$ y su ISBN es ${this.isbn}`
    }
}

const libro = new Libro("Don Quijote", 100, "1234579");

console.log(libro);
console.log(libro.formatearProducto());