

let heroes = ['deadpool', 'ciclope','Z', 'profesor charles xavier', 'xd', 'fulanito', 'pepito'];
console.log(heroes);

const longitudPersonajes = (arr) => {

    let nombreLargo = '';

    for(let i=0;i<arr.length;i++){
        
        let nombre = arr[i];

        if(nombre.length > nombreLargo.length){

            nombreLargo = nombre;
            
        }
    }

    let returnLargo = nombreLargo;

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

    return {

         heroeCorto: nombreCorto,
         heroeLargo: returnLargo

    };

}

let { heroeCorto, heroeLargo } = longitudPersonajes(heroes);

console.log('El personaje con el nombre mas largo es: ', heroeLargo); // 'profesor charles xavier'
console.log('El personaje con el nombre mas corto es: ', heroeCorto); // 'Z'

// retornar cosas multiples
// https://www.youtube.com/watch?v=ERVUtjBojGo