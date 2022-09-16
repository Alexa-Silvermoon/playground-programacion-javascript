console.log("metodo reverse - voltea la lista de los elementos de un arreglo");

let palomitas = {
    nombre:'palomitas',
    precio: 15000
}

let gaseosa = {
    nombre:'gaseosa',
    precio:5000
}

let perroCaliente = {
    nombre:'perro caliente',
    precio:10000
}

let papitas = {
    nombre:'papitas',
    precio: 4000
}

let chicles = {
    nombre:'chicles',
    precio:500
}

let comidaCine= [palomitas,gaseosa,perroCaliente,papitas,chicles];
//console.log(comidaCine);

comidaCine.forEach(function(listaComidaCine){
    console.log(listaComidaCine);
});

console.log('A continuacion la lista se imprimira en reversa usando .reverse');

function functionComidaCine(comidaCine){
    console.log(comidaCine.nombre + ': $' + comidaCine.precio);
};

comidaCine.reverse();
comidaCine.forEach(functionComidaCine);
