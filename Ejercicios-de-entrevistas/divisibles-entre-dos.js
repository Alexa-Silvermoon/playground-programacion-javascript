console.log('Numeros divisibles entre 2 con for sencillo y if');

divisibreEntreDos = (array) => {

    let newArray = [];
    let valor = 0;

    for ( i=0; i<array.length; i++ ){

        if ( array[i] % 2 === 0 ){

            valor = array[i];
            newArray.push(valor);
        }
    }

    return newArray;

}

const array = [1,2,3,4,5,6,998,999,1000];
const result = divisibreEntreDos(array);

console.log('array original: ', array );
console.log('divisibles entre 2: ', result ); //[2, 4, 6, 998, 1000]
