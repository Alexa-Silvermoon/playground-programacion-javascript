
const hacerConCallback = (num1, num2, callback) => {

    const resultado = num1 + num2;

    return callback( resultado );

}

const num1 = 5;
const num2 = 4;
console.log(num1, num2);

hacerConCallback( num1, num2, ( resultado ) => {

    console.log('resultado: ', resultado );

});