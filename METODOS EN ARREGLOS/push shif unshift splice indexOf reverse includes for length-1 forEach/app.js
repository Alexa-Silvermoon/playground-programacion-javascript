
console.log('Metodo .push .shif .unshift .splice .indexOf .reverse ciclo for ultimo.length-1 function y forEach para animales de granja');

let animalesDeGranja = ['lobo', 'camello' , 'cerdo']; //[0,1,2];
let animalesDeZoologico = ['hipopotamo','leon','toro','oveja'];

animalesDeGranja.push('oveja'); //.push agrega elementos al final del array
animalesDeGranja.push('toro');
animalesDeGranja.push('cordero');
console.log('Arreglo original: ' + animalesDeGranja);

console.log('--------------------------------------------');
console.log('A continuacion arreglo modificado:');

let primerAnimal = animalesDeGranja.shift(); //.shift toma el primer elemento del array
primerAnimal = 'vaca';
animalesDeGranja.unshift(primerAnimal); //.unshift cambia lobo por vaca

animalesDeGranja.splice(1,1,'caballo'); // .splice borra camello y pone caballo

animalesDeGranja.forEach(function (animal){
    console.log(animal);
});

let buscarAnimal = 'cerdo';
let index = animalesDeGranja.indexOf(buscarAnimal); //indexOf trae posicion de cerdo, el 2
console.log('El ' + buscarAnimal + ' esta en la posicion ' + index);

let ultimoAnimal = animalesDeGranja.length - 1; // .length -1 toma el ultimo elemento del array
console.log('El ultimo animal del arreglo es: ' + animalesDeGranja[ultimoAnimal]);

for (let i=0;i<=animalesDeGranja.length;i++){
    cantidadAnimales = i;
}
console.log('Cantidad de animales en la granja es: ' + cantidadAnimales);

console.log('--------------------------------------------');

console.log('listado usando .reverse: ');
let listaAlReves = animalesDeGranja.reverse(); //pone el array al reves
listaAlReves.forEach(function(printLista){
    console.log(printLista);
});

console.log('--------------------------------------------');

function functionBuscarPorLetra(animalesDeGranja, buscarLetra){
    let nuevoArreglo = [];

    for (let a=0;a<animalesDeGranja.length;a++){
        let nombreAnimal = animalesDeGranja[a];

        if (nombreAnimal[0] === buscarLetra){
            nuevoArreglo.push(nombreAnimal);
        }
    }
    return nuevoArreglo;
}

let buscarLetra = 'c';
console.log('buscar animales por la letra: ' + buscarLetra);
let animalesFiltrados = functionBuscarPorLetra(animalesDeGranja, buscarLetra);

animalesFiltrados.forEach(function(listaAnimalesFiltrados){
    console.log(listaAnimalesFiltrados);
})

console.log('--------------------------------------------');
console.log('verificar con .includes si la granja y el zoologico tienen los mismos animales: ');

for (let animalDeGranja of animalesDeGranja){

    if (animalDeGranja, animalesDeZoologico.includes(animalDeGranja)){
        console.log(animalDeGranja + ' si esta en el zoologico');
    }else{
        console.log(animalDeGranja + ' no esta en el zoologico');
    }
}

console.log('--------------------------------------------');

console.log('corregir un error de ortografia con .replace');
let letreroZoologico = 'bienvenidos al zoologico de kaly';
console.log('viejo: ' + letreroZoologico);

function ActualizarLetrero(letreroZoologico, palabraVieja, palabraNueva){

    if (letreroZoologico.includes(palabraVieja) === false){
        return letreroZoologico;
    }

    letreroZoologico = letreroZoologico.replace(palabraVieja, palabraNueva);
    return ActualizarLetrero(letreroZoologico, palabraVieja, palabraNueva);
};

let palabraVieja = 'kaly';
let palabraNueva = 'Cali';

console.log('nuevo: ' + ActualizarLetrero(letreroZoologico, palabraVieja, palabraNueva));
console.log('La palabra: ' + palabraVieja + ' fue remplazada por: ' + palabraNueva);

console.log('-------------------------------------------');

console.log('agregando algo entre los elementos del array del zoologico con .join');

console.log(animalesDeZoologico.join(' --- '));

for (let z=0;z<=animalesDeZoologico.length;z++){
    cantidadAnimalesZoologico = z;
}
console.log('La cantidad de animales en el zoologico es: ' + cantidadAnimalesZoologico);

animalesDeZoologico.forEach(function(listaZoologico){
    console.log(listaZoologico);
})
