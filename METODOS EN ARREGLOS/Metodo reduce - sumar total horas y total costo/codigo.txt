
console.log('Metodo reduce - sumar total horas y total costo');

let arregloHoras = [1,2,3,4,5]; //da 15
let arregloCostos = [10,20,30,40,50]; //da 150

console.log(arregloHoras);
console.log(arregloCostos);

let totalHoras = arregloHoras.reduce((suma, hoy)=>{
    return suma + hoy;
}, 0);

let totalCostos = arregloCostos.reduce((suma, precio)=>{
    return suma + precio;
}, 0);

console.log('Horas Totales: ' + totalHoras);
console.log('Costo Total: ' + totalCostos);
