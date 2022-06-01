"use strict"
//reproductor musical - metodos de propiedad

const reproductor = {
    reproducir: function (id) {
        console.log(`${id}) Story Ain't Over - Avantasia`);
    },
    pausar: function () {
        console.log("Pausa");
    },
    crearPlaylist: function (nombre) {
        console.log(`Se ha creado la playlist ${nombre}`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Se ha reproducido la playlist ${nombre}`)
    }

}

reproductor.borrarcancion = function (id) {
    console.log(`${id}) Canción borrada`);
}

console.log(reproductor);
reproductor.reproducir(17);
reproductor.pausar();
reproductor.borrarcancion(3);
reproductor.crearPlaylist("Arla");
reproductor.reproducirPlaylist("Arla");

