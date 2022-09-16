
console.log('toma solo los pares y los suma');

hallarParesYSumarlos = (...numeros) => { //spread ...

    console.log('dentro de la funcion: ', numeros);

    let sum = 0;
    let result = numeros.filter(n => n % 2 === 0).map(n => sum += n);

    return sum;

}

const resultado = hallarParesYSumarlos(1,2,3,4,5,6);
console.log('resultado: ', resultado ); //12