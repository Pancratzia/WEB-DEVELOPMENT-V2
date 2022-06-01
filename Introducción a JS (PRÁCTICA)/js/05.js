//Objetos

"use strict"; 

const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true
}

console.log(producto);
console.log(`Precio: ${producto.precio}`)


//Agregar nuevas propiedades
producto.imagen = "imagen.jpg";
console.log(producto);

//eliminar propiedades

delete producto.disponible;
console.log(producto);

//Destructuring

// const {precio} = producto;
// const {nombre} = producto;
const { precio, nombre } = producto;
console.log(precio);
console.log(nombre);

Object.freeze(producto); //No permite agregar más cosas al objeto ni modificarlo

//delete producto.nombre;
// console.log(producto);  si uso 'use strict' no puedo ejecutar esto
console.log(Object.isFrozen(producto)); //Saber si el objeto está congelado

//Objeto.seal(objeto) hace lo mismo que freeze, pero si me deja modificar




