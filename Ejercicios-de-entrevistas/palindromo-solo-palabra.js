console.log('palindromos SOLO PALABRAS');
console.log('Opcion 1');

palindromo = (palabra) => {

    let palabraInvertida = palabra.split('').reverse().join('');//convierte en un arreglo, lo invierte y lo une

    if ( palabra === palabraInvertida ){

        return `${ palabra } SI es un palindromo`;

    } else {

        return `${ palabra } NO es un palindromo`;

    }

}

const palabra = 'oro';
const resultado = palindromo( palabra );
console.log( 'palabra: ', palabra );
console.log( resultado );

console.log('------------------------------------------------------');
console.log('Opcion 2');

palindromo2 = (palabra2) => {

    for ( let i = 0; i < palabra2.length / 2; i++ ){ //longitud divida 2

        if ( palabra2[i] !== palabra2[palabra2.length - i - 1]){ //va en reversa desde la segunda mitad

            return `${ palabra2 } NO es un palindromo`;

        }

    }

    return `${ palabra2 } SI es un palindromo`;

}


const palabra2 = 'radarx';
const resultado2 = palindromo2( palabra2 );
console.log('palabra: ', palabra2);
console.log( resultado2 );


console.log('------------------------------------------------------');
console.log('Pruebas Opcion 2:');
let longitudPalabra2 = palabra2.length;
let i = '';
console.log(`longitud de ${ palabra2 } es ${longitudPalabra2} y su mitad es ${palabra2.length / 2}`);
// let i = '';
console.log( 'ultima letra de la palabra: ', palabra2[palabra2.length - i -1 ]);

