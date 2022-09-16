
let heroes = ['deadpool', 'ciclope', 'profesor charles xavier' , 'fulanito', 'pepito'];
console.log(heroes);

masLargo = (arr) => {

    let nombreLargo = '';

    for(let i=0;i<arr.length;i++){
        
        let nombre = arr[i];

        if(nombre.length > nombreLargo.length){

            nombreLargo = nombre;
            
        }
    }
    return nombreLargo;
}

let heroeLargo = masLargo(heroes);

console.log('El personaje con el nombre mas largo es: ', heroeLargo); //'profesor charles xavier'
// console.log('El personaje con el nombre mas largo esss: ' + masLargo(heroes));
