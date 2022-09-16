
console.log("Buscar el ultimo elemento del array y cambiarle su informacion sin ciclos for, sin function");

arregloFormas = ['triangulo,','cuadrado','circulo','equis']; //equis es el incorrecto a remplazar

// arregloFormas.push('esfera'); //esfera no la tiene en cuenta en el nuevo listado

//console.log(arregloFormas);

arregloFormas.forEach(function(listadoFormas){
    console.log(listadoFormas);
});

let nuevoValor = 'rectangulo';
let ultimo = arregloFormas.length - 1; //ultimo hace referencia al ultimo indice mas no al ultmo valor
arregloFormas[ultimo] = nuevoValor;    //nuevoValor se ubica en la posicion contenida en ultimo

console.log('-------------------------------------------');

console.log('agregando: ' + nuevoValor + ' al final de la lista');

//console.log(arregloFormas);

arregloFormas.forEach(function(listadoFormasNuevo){
    console.log(listadoFormasNuevo)
});
