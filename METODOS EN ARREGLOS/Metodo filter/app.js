
console.log('metodo filter');

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words);

const masCaracteres = 6;
const result = words.filter(word => word.length > masCaracteres);

console.log('filtrando palabras con mas de ' + masCaracteres + ' letras');
console.log(result);
