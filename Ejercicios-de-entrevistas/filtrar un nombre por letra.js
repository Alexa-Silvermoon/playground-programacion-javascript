
console.log('Imprimir el nombre de los personajes pero filtrando por la letra s al principio del nombre');

let heroes = ['deadpool' , 'doom' , 'spiderman' , 'shehulk' , 'chapulin'];
console.log(heroes);

filtrarPorLetra = (arr, letra) => {

    let nuevoArr = [];

    for (let i=0; i<arr.length; i++){

        let nombre = arr[i];

        if (nombre[0] === letra){
            /*
            nombre[0] significa que toma la primera letra de cada nombre y lo compara con
            la letra s que esta dentro de la variable letra
            */
            nuevoArr.push(nombre);//.push mete la variable nombre dentro del arerglo nuevoArr
        }
    }
    return nuevoArr;
}

let letraABuscar = 's';
let heroesCon = filtrarPorLetra(heroes, letraABuscar);
console.log('Heroes por la letra: ', letraABuscar, ' : ', heroesCon); //'spiderman' , 'shehulk'

//let nombre = 'cris';
//console.log(nombre[0]);
