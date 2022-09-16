
// convertir kilometros a millas KM = KM * 0,62137
let k = 20; // input
let m = 0;
let resultado = 0;

m = (k * 0.62137);
m *= 100;
m = Math.round(m);
m /= 100;

resultado = m;

console.log('convertir kilometros a millas KM = KM * 0,62137');
console.log(k, ' kilometros son equivalentes a ', resultado, ' millas'); //12.43

console.log('---------------------------------------------');


// convertir millas a kilometros mi = mi * 1.609
let m1 = 107; //input
let k1 = 0;
let resultado1 = 0;

k1 = (m1 * 1.609);
k1 = k1 * 100;
k1 = Math.round(k1);
k1 = k1 / 100;

resultado1 = k1;

console.log('convertir millas a kilometros mi = mi * 1.609 ');
console.log(m1, ' millas son equivalentes a ', resultado1, ' kilometros'); //172.16
