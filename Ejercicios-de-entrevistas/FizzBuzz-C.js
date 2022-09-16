
console.log('Hola desde FizzBuzz-C.js');

/*
Escribir un programa que imprima cada numero del 1 al 100 en una nueva linea
Por cada multiplo de 3, que imprimas "fizz" en lugar del numero
Por cada multiplo de 5, que imprima "buzz" en lugar del numero
Para numeros que sea sean multiplos de 3 y 5 a la vez, que imprima "fuzzbuzz" en lugar del numero
*/

FizzBuzz = () => {

    for ( i=1; i<=100; i++){

        if ( i % 3 === 0 && i % 5 === 0 ){

            console.log('FizzBuzz');

        } else if ( i % 3 === 0 ){

            console.log('Fizz');

        } else if ( i % 5 === 0 ){

            console.log('Buzz');

        } else {

            console.log( i );

        }
    }
}

FizzBuzz();