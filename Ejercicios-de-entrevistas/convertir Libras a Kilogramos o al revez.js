
// convertir de libras a kilos KG = LIBRAS / 2.2046
let L = 160; //input
let K = 0;
let resultado = 0;

K = (L / 2.2046);

K = K * 100;     //kilogramos *= 100;
K = Math.round(K); //este bloque de 3 lineas es para agregar dos decimales al resultado
K = K / 100;     //kilogramos /= 100;

resultado = K;

console.log('convertir libras a kilos');
console.log('KG = LIBRAS / 2.2046');
console.log(L, ' libras equivalen a ', resultado, ' kilogramos'); //72.58

console.log('----------------------------------------------');

// convertir de kilos a libras LB = KG * 2.2046
let K1 = 405; //input
let L1 = 0;
let resultado1 = 0;

L1 = K1 * 2.2046;

L1 = L1 * 100;
L1 = Math.round(L1);
L1 = L1 / 100;

resultado1 = L1;

console.log('convertir kilos a libras');
console.log('LB = KG * 2.2046');
console.log(K1, ' kilos equivalen a ', resultado1, ' libras'); //892.86
