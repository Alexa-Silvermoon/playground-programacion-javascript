
console.log('comparando y mostrando elementos de un agrreglo forEach VS for(element of arreglo VS FOR sencillo');

let animalesDeGranja = ['vaca', 'caballo' , 'cerdo'];

//animalesDeGranja.push('oveja');
//animalesDeGranja.push('toro');
console.log(animalesDeGranja);

console.log('----------------------------------');

for (element of animalesDeGranja){
    console.log('trayendo cada animal usando for element of animalesDeGranja: ' + element);
}

console.log('----------------------------------');

for(let i=0;i<animalesDeGranja.length;i++){
    let animal = animalesDeGranja[i];
    console.log('trayendo cada animal usando un for sencillo: ' + animal);
}

console.log('----------------------------------');

animalesDeGranja.forEach(function (animal){
    console.log('trayendo cada animal usando forEach: ' + animal);
});
/*
forEach() ejecuta la función callback una vez por cada elemento del array; 
a diferencia de map() o reduce() este siempre devuelve el valor undefined y no es encadenable. 
El típico uso es ejecutar los efectos secundarios al final de la cadena.
*/
