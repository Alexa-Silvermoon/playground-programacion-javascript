console.log('map filter forEach find sort some every concat reduce findIndex');

/*map() permite recorrer el array y modificar los nuevos elementos presentes en el,
retornando un nuevo array con la misma longitud del origianl
*/
console.log('metodo map() en este caso multiplicando * 2');
const array = [0,1,2,3,4,5];
console.log('original: ', array);
const resultArray = array.map(item => item * 2); //multiplica * 2
console.log('resultado: ', resultArray); //[0, 2, 4, 6, 8, 10]

//
console.log('--------------------------------------------------');

/*filter() recorre el array y retorna un nuevo array con aquellos elementos que pasen
una determinada condicion
*/
console.log('filter() filtra elementos divisibles entre 2');
const array1 = [0,1,2,3,4,5];
console.log('origianl: ', array1);
const resultArray1 = array.filter((item) => item % 2 == 0); //filtra elementos divisibles entre 2
console.log('resultado: ', resultArray1); //[0, 2, 4]

//
console.log('--------------------------------------------------');

/*forEach() permite iterar el contenido de un array. Recibe un callback que toma como parametro
el elemento actual de la iteracion y el indice mismo
*/
console.log('forEach() iterar contenido con elemento e indice');
const heroes = ['superman','batman','flash','aquaman'];
console.log('original: ', heroes);
const newHeroes = heroes.forEach((element, i) => {
    console.log(`${element} se encuentra en el indice ${i}`); //superman se encuentra en el indice 0 ...
});

//
console.log('--------------------------------------------------');

/*find() recorre el array y retorna la primera coincidencia del elemento que se busca
*/
console.log('find() recorre el array y retorna la primera coincidencia del elemento que se busca');
const array2 = [0,1,2,3,4,5];
console.log('original: ', array2);
console.log('cual es el primer item mayor a 3?');
const resultArray2 = array2.find((item) => item > 3);
console.log('resultado: ', resultArray2); //4

//
console.log('--------------------------------------------------');

/* sort() ordena los elementos del array y retorna el arreglo ordenado. Los elementos se ordenan
en orden ascendente (del A al Z) por defecto, funciona tanto con numeros como con letras
*/
console.log('sort() ordena los elementos del array y retorna el arreglo ordenado');
const array3 = [2,4,1,3,5];
console.log('original: ', array3);
const descArray = array3.sort((a,b) => (a>b? -1 : 1)); //orden descendente
console.log('orden descendente: ', descArray);

const ascArray = array3.sort((a,b) => (a>b? 1 : -1)); //orden ascendente
console.log('orden ascendente: ', ascArray);

//----

console.log('sort() tambien ordena alfabeticamente');
const heroes2 = ['superman','batman','flash','aquaman'];
console.log('origianl: ', heroes2);
const descHeroes = heroes2.sort((a,b) => (a>b? -1 : 1)); //orden descendente
console.log('orden descendete: ', descHeroes);

const ascHeroes = heroes2.sort((a,b) => (a>b? 1 : -1)); //orden ascendente
console.log('orden ascendete: ', ascHeroes);

//
console.log('--------------------------------------------------');

/*some() itera el array y retorna un booleano si como minimo uno de los elementos presentes
en el array pasa una condicion determinada. Recibe un callback que se encargara de preguntar
aquello que queremos dentro del array
*/
console.log('some() retorna true o false si almenos un elemento cumple una condicion');
const array4 = [0,1,2,3,4,5];
console.log('origianl: ', array4);
const isGreaterThanFour = array4.some((item) => item > 4);
console.log('al menos un numero mayor que 4?: ', isGreaterThanFour); //true

//----

const isLessThanZero = array4.some((item) => item < 0);
console.log('al menos un elemento menor a 0?: ', isLessThanZero); //false

//
console.log('--------------------------------------------------');

/*every() es similar al some() ya que itera el array y retorna un booleano, pero esta vez lo hara
si todos los elementos de array cumplen una condicion dada
*/
console.log('every() es como el some() pero esta vez lo hara si todos los elementos de array cumplen una condicion dada');
const array5 = [0,1,2,3,4,5,6,7];
console.log('original: ', array5);
const isGreaterThanFour1 = array5.every((item) => item > 4); //todos son mayores que 4?
console.log('todos son mayores que 4?: ', isGreaterThanFour1); //false

//----

const isLessThanTen = array5.every((item) => item < 10); //todos son menores que 10?
console.log('todos son menores que 10?: ', isLessThanTen); //true

//
console.log('--------------------------------------------------');

/*concat() se utiliza para unir dos o mas arrays, este metodo no cambia los arrays existente,
sino que devuelve un nuevo array
*/
console.log('concat() pega los array uno tras otro');
const array6 = ['A','B','C'];
const array7 = ['D','E','F'];
console.log('original: ', array6);
console.log('original: ', array7);

const arrayCombinados = array6.concat(array7); //combinar
console.log('arrays combinados: ', arrayCombinados); //['A', 'B', 'C', 'D', 'E', 'F']

//
console.log('--------------------------------------------------');

/* reduce() aplica una funcion a un acumulador y a cada valor de un array, (de izquerda a derecha),
para reducirlos a un unico valor
*/
console.log('reduce() aplica una funcion a un acumulador y a cada valor de un array, (de izquerda a derecha), para reducirlos a un unico valor');
const array8 = [0,1,2,3,4,5,6,7,8,9,10];
console.log('original: ', array8);
const resultArray3 = array8.reduce((accumulator, current) => accumulator + current);
console.log('arreglo sumando entre si: ', resultArray3); //55

//
console.log('--------------------------------------------------');

/* findIndex() retorna el indice del primer elemento de un array que cumpla con la funcion de prueba
proporcionada, en caso contrario devuelve -1
*/
console.log('findIndex() encuntra el indice del elemento en un array');
const array9 = ['superman','batman','flash','aquaman'];
console.log(array9);
const newHeroes2 = array9.findIndex((element) => element === 'aquaman');
console.log(newHeroes2); //3
