
console.log('sumar cada elemento del array un valor');

const array = [100,200,300,400,500];
const incremento = 20;

const newArray = [];
let valor = 0;

for ( i = 0; i < array.length; i++ ){

    valor = array[i] + incremento;

    newArray.push(valor);

}

console.log( array );
console.log('incremento: ', incremento);
console.log( newArray );
