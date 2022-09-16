
console.log('Object-entries-acceder-a-llave-y-valor');

const arreglo = ['A','B','C'];
console.log(arreglo);

//forma forEach en lista:
console.log('forma forEach en lista:');
arreglo.forEach((element, i) => {
    console.log(`${element} en posicion ${i}`);
});

console.log('--------------------------------------------');

//forma corta:
console.log('forma corta:');
Object.entries(arreglo).forEach(([posicion, elemento]) => {
    console.log({posicion, elemento});
});

console.log('--------------------------------------------');

//forma forEach con un paso innecesario:
console.log('forma forEach con un paso innecesario:');
Object.keys(arreglo).forEach(key => {
    const value = arreglo[key]
    console.log({key, value});
});

console.log('--------------------------------------------');

//forma con entry para objetos:
console.log('forma con entrypara objetos');
const arregloObjeto = {

    nombre: 'Alexander',
    apellido: 'Millan'

}
Object.entries(arregloObjeto).map( entry => {
    const [ llave, valor ] = entry;
    console.log({ llave, valor });
});
