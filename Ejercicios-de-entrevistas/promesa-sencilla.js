
console.log('promesa:');

const hacerConPromesa = ( num1, num2 ) => {

    const resultado = num1 + num2;

    return new Promise( resolve => {

        resolve( resultado );

    });

}
const num1 = 1;
const num2 = 3
console.log('valores entrantes: ', num1, num2);

hacerConPromesa(num1, num2).then( resultado => console.log('resultado: ', resultado ));

