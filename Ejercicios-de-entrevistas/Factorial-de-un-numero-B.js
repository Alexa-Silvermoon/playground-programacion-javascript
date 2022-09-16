
console.log('hola desde Factorial-de-un-numero-B.js');

/*
Encontrar el factorial de un numero entero

Ej:
5! = 5 x 4 x 3 x 2 x 1
4! = 4 x 3 x 2 x 1
3! = 3 x 2 x 1
*/

factorial = (num) => {

    let resultado = 1;

    for ( i=0; i<num; i++ ){

        resultado *= num - i;

    }

    return resultado;

}

let numero = 5;
console.log(`El factorial de ${numero} es: `);
console.log( factorial(numero) );  // respuesta 120
