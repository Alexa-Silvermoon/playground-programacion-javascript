
let heroes = ['deadpool', 'ciclope','Z', 'profesor charles xavier', 'xd', 'fulanito', 'pepito'];
console.log(heroes);

masCorto = (arr) => {

    let nombreLargo = '';

    for(let i=0;i<arr.length;i++){
        
        let nombre = arr[i];

        if(nombre.length > nombreLargo.length){

            nombreLargo = nombre;
            
        }
    }

    for ( let i = 0; i < arr.length; i++){

        let nombre = arr[i];

        // if (nombre.length < nombreLargo.length){
        if (nombre.length < nombreLargo.length){

            nombreLargo = nombre;
            // nombreCorto = nombre;

        }
    }

    let nombreCorto = '';
    nombreCorto = nombreLargo;

    return nombreCorto;

}

let heroeCorto = masCorto(heroes);

console.log('El personaje con el nombre mas corto es: ', heroeCorto); //Z
// console.log('El personaje con el nombre mas largo esss: ' + masCorto(heroes));
