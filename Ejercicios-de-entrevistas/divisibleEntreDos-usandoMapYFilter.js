
console.log('disivibles-entre-dos-con-filter-y-map');
console.log('Numeros disivivles entre 2 pero usando .filter y .map');


const array = [1,2,3,4,5,6,998,999,1000];
const resultConFilter = array.filter(n => n % 2 === 0 );

console.log('array original: ', array);
console.log('divisible entre 2 usando filter: ', resultConFilter); //[2, 4, 6, 998, 1000]

const multiplicador = 2;
console.log('A los divisibles entre 2 se les multiplicara por', multiplicador);
const resultConFilterAndMap = array.filter( n => n % 2 === 0 ).map( n => n * multiplicador);
console.log(resultConFilterAndMap); //[4, 8, 12, 1996, 2000]