
console.log('indexacion de arreglos - buscar por indice y o remplazar');

let suplementosDeBuceo = [
    'mascara de buceo',   //0
    'aletas',             //1
    'traje de buceo',     //2
    'tubo bucal de aire', //3
    'tanque de oxigeno'   //4
];
let objeto1 = suplementosDeBuceo [2];
console.log(suplementosDeBuceo);
console.log('El objeto a traer fue: ' + objeto1);

console.log('-----------------');
console.log('-----------------');

let suplementosDeBuceo2 = [
    'mascara de buceo',   //0
    'aletas',             //1
    'traje de buceo',     //2
    'tubo bucal de aire', //3
    'tanque de oxigeno'   //4
];
suplementosDeBuceo2[3] = 'arpon'; //aqui se remplazo tubo bucal de aire por arpon, todo a la posicion 3
let objeto2 = suplementosDeBuceo2[3];
console.log(suplementosDeBuceo2);
console.log('El nuevo objeto es: ' + objeto2);

console.log('-----------------');
console.log('-----------------');

let suplementosDeBuceo3 = [
    'mascara de buceo',   //0
    'aletas',             //1
    'traje de buceo',     //2
    'tubo bucal de aire', //3
    'tanque de oxigeno'   //4
];
let primerObjeto = suplementosDeBuceo3[0];        //al llamar a la posicion 0, me trae el primer objeto de la lista
let ultimoObjeto = suplementosDeBuceo3.length -1; //-1 hace que traiga de abajo hacia arriba
console.log(suplementosDeBuceo3);
console.log('El primer objeto de la lista es: ' + primerObjeto);
console.log('El ultimo objeto de la lista es: ' + (suplementosDeBuceo3[ultimoObjeto]));
