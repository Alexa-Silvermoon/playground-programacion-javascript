
console.log('hola desde encontrar-repetidos-en-arreglo.js');

/*
Encontrar los repetidos del siguiente arreglo:
arreglo = [2,4,5,4,7,9,5];
*/


encontrarRepetidos = (arr) => {

    var objeto = {};
    var duplicado = [];

    for ( i=0; i<=arr.length; i++ ){

        if ( objeto.hasOwnProperty( arr[i] ) === false ){ //si la propiedad no existe la creara

            //hasOwnProperty toma una cadena y verifica si existe como propiedad
            objeto[arr[i]] = 1;

        } else {

            duplicado.push(arr[i]);
            //si la propiedad ya existia entonces es un duplicado

        }
    }

    return `Los duplicados son: ${duplicado}` // 4,5

}

let arreglo = [2,4,5,4,7,9,5];
console.log( `arreglo original: ${arreglo}`);
const resultado = encontrarRepetidos(arreglo);
console.log(resultado); // 4,5

/*

version vieja:

console.log('hola desde encontrar-repetidos-en-arreglo.js');


Encontrar los repetidos del siguiente arreglo:
arreglo = [2,4,5,4,7,9,5];



encontrarRepetidos = (arr) => {

    var objeto = {};
    var duplicado = [];

    for ( i=0; i<=arr.length; i++ ){

        if ( objeto.hasOwnProperty( arr[i] ) === false ){ //si la propiedad no existe la creara

            //hasOwnProperty toma una cadena y verifica si existe como propiedad
            objeto[arr[i]] = 1;

        } else {

            duplicado.push(arr[i]);
            //si la propiedad ya existia entonces es un duplicado

        }
    }

    return console.log(`Los duplicados son: ${duplicado}`); // 4,5

}

let arreglo = [2,4,5,4,7,9,5];
console.log( `arreglo original: ${arreglo}`);
console.log( encontrarRepetidos(arreglo) );



*/