
console.log('metodo includes con filter - morning evening');

let salidas = ['1am','3am','6am','9am','12pm','2pm','4pm','7pm','11pm','12am'];
console.log(salidas);
console.log('salidas: ' + salidas);

function functionHorasAM(salidas){

    return salidas.includes('am');
};

function functionHorasPM(salidas){

    return salidas.includes('pm');
};

let amHoras = salidas.filter(functionHorasAM);
let pmHoras = salidas.filter(functionHorasPM);
console.log('--------------------------');

console.log('horas AM: ' + amHoras);
console.log('horas PM: ' + pmHoras);
