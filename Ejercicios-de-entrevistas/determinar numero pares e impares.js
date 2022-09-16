
let numeros = [1,6,8,4,2,7,10,3,5,89];

//se usa % para sacar residuo, si el residuo es 0 entonces el numero es par, si el residuo es 1 entonces el numero es impar


for(i=0; i<numeros.length; i++){

    let residuo = numeros[i] % 2; //% saca el residuo

    if(residuo === 0){

        console.log('El numero ', numeros[i], ' es par');

    } else if (residuo === 1){

        console.log('El numero ', numeros[i], ' es impar');
    }
}

