
console.log('que personas son mayores de 18 años (usando objetos, array, for, if)?');

let persona1 = {
    nombre: 'Christian',
    edad: 27
};

let persona2 = {
    nombre: 'jeronimo',
    edad: 14
};

let persona3 = {
    nombre: 'silvia',
    edad: 17
};

let persona4 = {
    nombre: 'Alberto',
    edad: 18
};

let persona5 = {
    nombre: 'Elverr',
    edad: 19
};

let personas = [persona1,persona2,persona3,persona4,persona5];

for (i=0;i<personas.length;i++){
    //let edad = 0;
    if (personas[i].edad <= 17){
        console.log(personas[i].nombre + ' es menor de edad y tiene ' + personas[i].edad + ' años');
    }else{
        console.log(personas[i].nombre + ' es mayor de edad y tiene ' + personas[i].edad + ' años');
    }
}

console.log('----------------------------------------------');
console.log('----------------------------------------------');


console.log('que personas son mayores de 18 años (usando function, if)?');

function verificarEdad(nombre,edad){

    if (edad <= 17){
        console.log(nombre + ' es menor de edad y tiene ' + edad + ' años');
    }else{
        console.log(nombre + ' es mayor de edad y tiene ' + edad + ' años');
    }
}

verificarEdad('sara',14);
verificarEdad('silvia1',17);
verificarEdad('alberto',18);
verificarEdad('elverr',19);
