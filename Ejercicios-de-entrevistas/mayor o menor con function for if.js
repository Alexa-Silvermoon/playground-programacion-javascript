
max = (numeros) => { //este reglon tambien puede ser function max(numeros){
    
    let mayor = -999999999;

    for (i=0; i<=numeros.length; i++){

        if (numeros[i]>mayor){

            mayor = numeros[i];
        }

    }
    
    return mayor;
}

let numeros = [5, 2, 6, 200, 10, -101, 101, 50];
console.log(numeros);

let resultado = max(numeros);
console.log('El mayor es: ', resultado); //200
