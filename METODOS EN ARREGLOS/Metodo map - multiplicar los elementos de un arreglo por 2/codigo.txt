
console.log('Metodo map - multiplicar los elementos de un arreglo por 2');

let array = [1,2,3];
console.log(array);

/*
array.forEach(function(listaArray){
    console.log(listaArray);
});
*/

let arrayResultado = array.map((num) => {
    let multiplicador = 2; //se puede multiplicar al numero que quiera
    return resultado = num * multiplicador;
}, 0);

console.log(arrayResultado);
