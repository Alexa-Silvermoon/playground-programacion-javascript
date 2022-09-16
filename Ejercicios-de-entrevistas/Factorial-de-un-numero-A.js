
console.log('hola desde Factorial-de-un-numero-A.js');

/*
Encontrar el factorial de un numero entero

Ej:
5! = 5 x 4 x 3 x 2 x 1
4! = 4 x 3 x 2 x 1
3! = 3 x 2 x 1
*/

factorial = (num) => {

    let resultado = '';

    if ( num === 0 || num === 1 ){

        return 1;

    } else {

        resultado = ( num * factorial( num - 1) );
        return resultado;
    }
}

let numero = 5;
console.log(`El factorial de ${numero} es: `);
console.log( factorial(numero) );  // respuesta 120
