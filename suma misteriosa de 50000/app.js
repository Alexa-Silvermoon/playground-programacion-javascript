
let capital = 50000;

let prestamo1 = 20000;
let prestamo2 = 15000;
let prestamo3 = 9000;
let prestamo4 = 6000;
let resultPrestamos = (prestamo1+prestamo2+prestamo3+prestamo4);

let r1 = capital - prestamo1;
let r2 = capital - prestamo2;
let r3 = capital - prestamo3;
let r4 = capital - prestamo4;

console.log('capital inicial: ' + capital);
console.log('suma de prestamos: ' + resultPrestamos);

console.log('------------------------------------');

console.log(capital + ' - prestamo 1 de ' + prestamo1 + ' es: ' + r1);
console.log(capital + ' - prestamo 2 de ' + prestamo2 + ' es: ' + r2);
console.log(capital + ' - prestamo 3 de ' + prestamo3 + ' es: ' + r3);
console.log(capital + ' - prestamo 4 de ' + prestamo4 + ' es: ' + r4);

let sumasDeR = (r1+r2+r3+r4);
console.log('cada prestamo - capital original es: ' + sumasDeR);

console.log('------------------------------------');

console.log('capital original: ' + capital);
let capitalA = capital - prestamo1;
console.log(capital + ' - prestamo 1 de ' + prestamo1 + ' es: ' + capitalA);

let capitalB = capitalA - prestamo2;
console.log(capitalA + ' - prestamo 2 de ' + prestamo2 + ' es: ' + capitalB);

let capitalC = capitalB - prestamo3;
console.log(capitalB + ' - prestamo 3 de ' + prestamo3 + ' es: ' + capitalC);

let capitalD = capitalC - prestamo4;
console.log(capitalC + ' - prestamo 4 de ' + prestamo4 + ' es: ' + capitalD);

let totalABCD = (capitalA + capitalB + capitalC + capitalD);
console.log('suma del capital del prestador: ' + totalABCD);
