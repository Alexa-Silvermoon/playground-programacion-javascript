console.log('Metodo math max y min para hallar mayor y menor y reduce');

const numbers = [3,2,4,8,99,15];
console.log(numbers);

const mayor = numbers.reduce((acumulador, valor) => {
    return acumulador > valor? acumulador : valor
});

console.log('usando .reduce() el mayor es: ', mayor); //99

console.log('----------------------------------');

console.log('usando Math.max() el mayor es: ', Math.max(...numbers)); //99
console.log('usando Math.min() el menor es: ', Math.min(...numbers)); //2
