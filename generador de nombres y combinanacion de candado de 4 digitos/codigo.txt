console.log('generador de nombres usando for of y combinanacion de candado de 4 digitos');

let arrayNombres = ['gildardo','ofelia','adriana','andrea','christian','jeronimo','mauricio'];
let arrayApellidos = ['millan','vasquez','munoz','fernandez','martinez','viveros'];

for (var nombre of arrayNombres){
    for (var appelido of arrayApellidos){
        console.log(nombre + ' ' + appelido);
    }
}

console.log('------------------------------');
console.log('conbinanacion de candado de 4 digitos');

let rueda1 = ['0','1','2','3','4','5','6','7','8','9'];
let rueda2 = ['0','1','2','3','4','5','6','7','8','9'];
let rueda3 = ['0','1','2','3','4','5','6','7','8','9'];
let rueda4 = ['0','1','2','3','4','5','6','7','8','9'];

for (var a of rueda1){
    for (var b of rueda2){
        for (var c of rueda3){
            for (var d of rueda4){
            console.log(a + ' ' + b + ' ' + c + ' ' + d);
            }
        }
    }
}
