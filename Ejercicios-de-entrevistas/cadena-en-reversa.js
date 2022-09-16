
console.log('saludos desde cadena-en-reversa.js');

CadenaReversa = (string) => {

    let resultado = string.split('').reverse().join();
    console.log(`resultado: ${resultado}`);

    for ( i=0; i<=string.length; i++ ){

        console.log(string[i]);

    }

    console.log('---------------------------------------');

    for ( i = string.length-1; i>=0; i-- ){

        console.log(string[i]);

    }

}

const palabra = 'amor';
console.log(` palabra original: ${palabra}`);

CadenaReversa(palabra);
