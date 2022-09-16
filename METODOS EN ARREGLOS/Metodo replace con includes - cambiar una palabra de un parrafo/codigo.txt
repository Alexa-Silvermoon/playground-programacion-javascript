console.log("Metodo replace con includes - cambiar una palabra de un parrafo");

let parrafo = 'Al que madruga, Dios NO le ayuda'; //NO sera la palabra a remplazar por SI
console.log('vieja: ' + parrafo);

function ActualizarParrafo(parrafo, parteVieja, parteNueva){

    if (parrafo.includes(parteVieja) === false){
        return parrafo;
    }

    parrafo = parrafo.replace(parteVieja, parteNueva);
    return ActualizarParrafo(parrafo, parteVieja, parteNueva);

};

parteVieja = 'NO';
parteNueva = 'SI';

console.log('nueva: ' + ActualizarParrafo(parrafo, parteVieja, parteNueva));
console.log('------------------------------------------');
console.log('la palabra: "' + parteVieja + '" a sido cambiada por la palabra: "' + parteNueva + '"');
