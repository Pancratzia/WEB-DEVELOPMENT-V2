const { src, dest, watch, parallel } = require("gulp");
//css
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');

//imagenes
const cache = require('gulp-cache');
const imagemin = requite('gulp-imagemin');
const webp = require('gulp-webp');

function css(done) {

    src("src/scss/**/*.scss")//Identificar el archivo de sass
        .pipe(plumber())
        .pipe(sass())//Compilar el archivo de sass
        .pipe(dest("build/css"));//Guardar en el disco duro


    done();//Avisa a gulp cuando llegamos al final de la funcion
}

function imagenes(done){
    src('src/img/**/*.{png,jpg}')
        .pipe()
    done();
}

function versionWebp(done){
    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe( webp(opciones) )
        .pipe( dest('build/img') );
    done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css)
    done();
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, dev);