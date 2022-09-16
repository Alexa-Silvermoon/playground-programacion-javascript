
const arr = [{ a: 1}, {b: 2}];
console.log('arreglo original: ', arr); //[{ a: 1}, {b: 2}]

const ArrCopiado = JSON.parse(JSON.stringify(arr));

ArrCopiado[0].a = 9;
console.log('arreglo original modificado: ', ArrCopiado ); //[{ a: 9}, {b: 2}]

//con esto es como si puedieramos hacer copias de seguridad de nuestros arrays

