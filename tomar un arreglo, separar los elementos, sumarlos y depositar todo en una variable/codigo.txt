
console.log('tomar un arreglo, separar los elementos, sumarlos y depositar todo en una variable');

let numeros = [15, 4, 1];

function sum(numerosArreglo){
    let resultado = 0;

    for(var elemento of numerosArreglo){
        resultado += elemento;
    }
    return resultado;
}

console.log(numeros);
console.log('.................');

numeros.forEach(function(numerosDelArray){
    console.log(numerosDelArray);
});

console.log('.................');
console.log('La suma del arreglo es: ' + sum(numeros)); //este va a dar function sum(numerosArreglo)
