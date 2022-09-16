
console.log('Agregar animales al arreglo granja usando push y forEach');

let animalesDeGranja = ['vaca', 'caballo' , 'cerdo'];

animalesDeGranja.push('oveja');
animalesDeGranja.push('toro');
//console.log(animalesDeGranja);

animalesDeGranja.forEach(function (animal){
    console.log(animal);
});

/*
forEach() ejecuta la función callback una vez por cada elemento del array; 
a diferencia de map() o reduce() este siempre devuelve el valor undefined y no es encadenable. 
El típico uso es ejecutar los efectos secundarios al final de la cadena.
*/
