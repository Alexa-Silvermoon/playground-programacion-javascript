console.log('saber si un array tiene duplicados o no');

const arreglo1 = [1,2,3,4,4,5,6];
const arreglo2 = [1,2,3];
const arreglo3 = [7,8,9];
const arreglo4 = [7,8,9,9];

console.log( arreglo1 );
console.log( arreglo2 );
console.log( arreglo3 );
console.log( arreglo4 );

const isDuplicadosONo = ( arr1, arr2, arr3, arr4 ) => { // new Set elimina los repetidos en el array

    // si la longitud es menor significa que SI habia repetidos en ese array
    // si la longitud es la misma significa que NO habia repetidos en ese array

    const arr1b = new Set( arr1 ).size < arr1.length;
    const arr2b = new Set( arr2 ).size < arr2.length; 
    const arr3b = new Set( arr3 ).size < arr3.length;
    const arr4b = new Set( arr4 ).size < arr4.length;
    // console.log( arr1b );

    /* const arr1r = JSON.stringify( arr1b );
    console.log( arr1r ); */

    return{

        arr1b,
        arr2b,
        arr3b,
        arr4b
    }

}

const { arr1b, arr2b, arr3b, arr4b } = isDuplicadosONo( arreglo1, arreglo2, arreglo3, arreglo4 );

console.log( `${ arreglo1 } `, arr1b ); // true
console.log( `${ arreglo2 } `, arr2b ); // false
console.log( `${ arreglo3 } `, arr3b ); // false
console.log( `${ arreglo4 } `, arr4b ); // true
