
let moto_01= {
    marca: 'yamaha',
    tipo: 'naked',
    nombre: 'mt09' 
};

let moto_02 = {
    marca: 'kawasaki',
    tipo: 'naked',
    nombre: 'z900'
};

let motos = [moto_01, moto_02];

for (i=0;i<motos.length;i++){

    console.log('La moto ' + motos[i].nombre + ' es de tipo ' + motos[i].tipo + ' y pertenece a la marca ' + motos[i].marca);
}

console.log('----------------------------');
console.log('bloque de arriba usando objetos, arreglo , for');
console.log('----------------------------');
console.log('bloque de abajo usando class');
console.log('----------------------------');

class Moto {
    constructor (marca, tipo, nombre){
        this.marca = marca;
        this.tipo = tipo;
        this.nombre = nombre;
    }
}

let moto1 = new Moto('yamaha','naked','mt09');
let moto2 = new Moto('kawasaki','naked','z900');

console.log(moto1,moto2);
