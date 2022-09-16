
console.log('hola desde FizzBuzz-A.js');

/*
Escribir un programa que imprima cada numero del 1 al 100 en una nueva linea
Por cada multiplo de 3, que imprimas "fizz" en lugar del numero
Por cada multiplo de 5, que imprima "buzz" en lugar del numero
Para numeros que sea sean multiplos de 3 y 5 a la vez, que imprima "fizzbuzz" en lugar del numero
*/

for ( i = 1; i <= 100; i++ ){

    let resultado = '';

    if ( i % 3 === 0 ){

        resultado += 'fizz';
    }

    if ( i % 5 === 0 ){

        resultado += 'buzz';
    }

    console.log( resultado || i );

}

