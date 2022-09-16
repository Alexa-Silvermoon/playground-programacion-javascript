
console.log('Metodo map - duplicar elementos del array');

let array = ['ha','ton'];
console.log(array);

let arrayResultado = array.map((elemento) => {
    return elemento + elemento;
});

console.log(arrayResultado);
//se imprimira haha, tonton
