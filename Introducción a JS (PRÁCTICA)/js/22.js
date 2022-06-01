"use strict"

//Fetch API

async function obtenerEmpleados() {

    const archivo = "empleados.json"
    //USANDO PROMISES
    // fetch(archivo)
    //     .then(resultado => resultado.json())
    //     .then(datos => {

    //         const { empleados } = datos;
    //         // console.log(empleados);

    //         empleados.forEach(empleado => {
    //             console.log(empleado.id);
    //             console.log(empleado.nombre);
    //             console.log(empleado.puesto);

    //         });
    //     })


    //USANDO ASYNC AWAIT
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);

}

obtenerEmpleados();