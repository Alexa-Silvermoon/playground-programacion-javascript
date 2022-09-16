
console.log('convertir de Fahrenheit a Celsius (°F - 32) x 5/9 =°C');
let c;
let f = 90; // input
c = (f - 32) * (5/9);

c = c * 100;
c = Math.round(c);
c = c / 100;

console.log(f, " grados Fahrenheit equivalen a ", c, " grados Celsius"); // 32.22

console.log("-----------------------------------");

console.log('convertir de Celsius a Fahrenheit (°C x 9/5) + 32 =°F');
let f1;
let c1 = 50; // input
f1 = (c1 * 9/5) + 32;

f1 = f1 * 100;
f1 = Math.round(f1);
f1 = f1 / 100;

console.log(c1, " grados Celsius equivalen a ", f1, " grados Fahrenheit."); //122
