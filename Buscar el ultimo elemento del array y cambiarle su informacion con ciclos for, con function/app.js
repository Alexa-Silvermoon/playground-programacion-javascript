
console.log("Buscar el ultimo elemento del array y cambiarle su informacion con ciclos for, con function");

arregloFormas = ['triangulo,','cuadrado','circulo','equis']; //equis es el incorrecto a remplazar

/*
for (elemet1 of arregloFormas){
    console.log(elemet1);
}
*/

for (i=0;i<arregloFormas.length;i++){
    console.log(arregloFormas[i]);
}

console.log('---------------------------------');

function FunctionNuevaForma(arrayFormas, newForma){

    let ultimo = arrayFormas.length -1;
    arrayFormas[ultimo] = newForma;

    for (elemetF of arrayFormas){
        console.log(elemetF);
    }

}

let nuevaForma = 'rectangulo';
FunctionNuevaForma(arregloFormas, nuevaForma);
