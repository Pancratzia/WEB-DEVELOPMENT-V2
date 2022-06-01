"use strict"

//Async - Await

function descargarClientes() {
    return new Promise(resolve => {
        console.log("Descargando clientes... Espere...");

        setTimeout(function () {
            resolve("Clientes descargados");
        }, 5000);

    });
}

function descargarPedidos() {
    return new Promise(resolve => {
        console.log("Descargando pedidos... Espere...");

        setTimeout(function () {
            resolve("Pedidos descargados");
        }, 3000);

    });
}

async function app() {
    try {
        // const clientes = await descargarClientes();
        // const pedidos = await descargarPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([descargarClientes(), descargarPedidos()]); //Para más de un Promise a la vez
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}



app();

console.log("Este código no se bloquea");

// setTimeout( function(){
//     console.log("set timeout...");
// }, 5000); ESPERAR 5 SEGUNDOS

// setInterval( function(){
//     console.log("set timeout...");
// }, 5000); Intervalos de 5 segundos