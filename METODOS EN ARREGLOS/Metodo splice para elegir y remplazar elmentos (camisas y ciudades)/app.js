console.log("metodo splice para elegir y remplazar elementos");

let tallasCamisas = ['S','M','L','XLL'];
console.log(tallasCamisas);

let puntoInicio = 1; //toma el elemeto en la posicion 1, es decir la M
let articulosARemplazar= 2; //desde la M elimina dos elementos, M y L
let nuevoArticulo = 'XL'; //la M y la L seran remplazados por XL

console.log('viejas tallas: ' + tallasCamisas);
tallasCamisas.splice(puntoInicio, articulosARemplazar, nuevoArticulo);
console.log('nuevas tallas: ' + tallasCamisas);

console.log('------------------------------------');

console.log('metodo splice ALASKA a ALABAMA');

let ciudad = ['A','L','A','S','K','A'];
console.log(ciudad);
console.log('ciudad vieja: ' + ciudad);

ciudad.splice(3, 2, 'B', 'A', 'M');
//inicia en posicion 3 es decir en la letra S
//toma los dos elementos es decir S y k
//remplace esos dos elementos por B A M

console.log('ciudad nueva: ' + ciudad);
console.log(ciudad);
