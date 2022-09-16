console.log('7 trucos de arrays y funciones en javascript');

console.log('crea un array de N posiciones');
const posiciones = 10;
const numeros = [...Array(posiciones).keys()];
console.log({posiciones});
console.log('y salen: ', numeros); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//------------
console.log('-------------------------------------------------------');

console.log('ordena array de forma aleatoria');
const numerosA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numerosA);
numerosA.sort(() => Math.random() -0.5);
console.log('orden aleatorio: ',numerosA);

//------------
console.log('-------------------------------------------------------');

console.log('recupera aleatoriamente un item del array');
const numerosB = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numerosB);
const IndiceRandom = Math.floor(Math.random() * numerosB.length)
const numeroRandom = numerosB[IndiceRandom];
console.log({numeroRandom}); //?

//------------
console.log('-------------------------------------------------------');

console.log('filtra valores unicos en un array');
const numerosC = [0,0,1,1,1,2,3,3,4,4,4,4,4,4,5];
console.log(numerosC);
const numerosUnicos = [...new Set(numerosC)];
console.log('sin repetirlos: ', numerosUnicos); // [0, 1, 2, 3, 4, 5]

//------------
console.log('-------------------------------------------------------');

console.log('suma array de numeros con reduce');
const numerosD = [1,2,3];
console.log(numerosD);
const suma = numerosD.reduce((x,y) => x + y);
console.log({suma}); //6

//------------
console.log('-------------------------------------------------------');

console.log('intercambia valores de variables');
let l = 5;
console.log({l});
let r = 10;
console.log({r});
[l,r] = [r,l];
console.log({l});
console.log({r});

//------------
console.log('-------------------------------------------------------');

console.log('traer ultimo elemento del array solo usando Array.at()');
const frutas = ['manzana','pera','banana','aguacate'];
console.log(frutas);
const ultimaFruta = frutas.at(-1); //forma tradicional: let ultimafrutAA = frutas[frutas.length-1]; console.log({ultimafrutAA});
console.log({ultimaFruta}); //aguacate
