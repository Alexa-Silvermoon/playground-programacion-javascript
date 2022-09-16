
let map = new Map();
console.log(map);

map.set('llave1', 'valor1').set('llave2', 'valor2');
console.log(map);

console.log('obtener valor con map.get()', map.get('llave1'));  // valor1

console.log('existe llave 2? con map.has()', map.has('llave2')); // true

for ( let LV of map.entries()){ //LLAVE : VALOR

    console.log( LV[0], ' : ', LV[1] );
    
}