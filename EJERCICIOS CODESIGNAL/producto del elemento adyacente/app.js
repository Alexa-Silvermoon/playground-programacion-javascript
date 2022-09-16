console.log('producto (multiplicacion) del elemento abyacente (por el numero de al lado) e imprimir el resultado mas grande');

multiplicarYHallarMasGrande = (array) => {

    let masGrande = -9999999;

    for ( i = 0; i <= array.length; i++ ){

        let actual = array[i] * array[i + 1];

        if ( actual > masGrande ){

            masGrande = actual;
        }

    }

    return masGrande;
}


const array = [3,6,-2,-5,7,3];
console.log(array);

const resultado = multiplicarYHallarMasGrande(array);
console.log(resultado);
