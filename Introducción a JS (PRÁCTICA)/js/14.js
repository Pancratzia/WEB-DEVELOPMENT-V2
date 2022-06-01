"use strict"

//ESTRUCTURAS DE CONTROL

//IF

const puntaje = 100;

if (puntaje == 100) {
    console.log("El puntaje es 100");
} else if (puntaje > 100) {
    console.log("El puntaje es mayor a 100");
} else {
    console.log("El puntaje es menor a 100")
}

//Switch

const metodoPago = 1;

switch (metodoPago) {
    case 1:
        console.log("Tarjeta");
        break;
    case 2: console.log("Efectivo");
        break;
    default:
        console.log("Otro");
        break;
}

//For

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0)
        console.log(`El número ${i} es par`);
    else
        console.log(`El número ${i} es impar`);
}

const carrito = [
    { nombre: "Monitor", precio: 500 },
    { nombre: "Teclado", precio: 10 },
    { nombre: "Ratón", precio: 5 },
    { nombre: "Cornetas", precio: 20 },
    { nombre: "Audifonos", precio: 25 },
    { nombre: "PC", precio: 300 }
]; //arreglo de objetos

for (let i = 0; i < carrito.length; i++) {
    console.log(`Nombre: ${carrito[i].nombre} Precio: ${carrito[i].precio}$`);
}

//while

let i = 0;

while (i < 10) {

    if (i % 2 == 0)
        console.log(`El número ${i} es par`);
    else
        console.log(`El número ${i} es impar`);
    i++;

}


//do-while

i = 0;
do {
    if (i % 2 == 0)
        console.log(`El número ${i} es par`);
    else
        console.log(`El número ${i} es impar`);
    i++;
} while (i < 10);

