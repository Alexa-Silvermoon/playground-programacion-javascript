
console.log('secuencia Fibonacci');

fibonacci = (num) => {
    const fib = [0,1];

    for(let i = 2; i <= num; i ++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[num];
}

const a = 1;
const b = 3;
const c = 10;

console.log(`el fibonacci de ${a} es: ` ,fibonacci(a)); //1
console.log(`el fibonacci de ${b} es: ` ,fibonacci(b)); //2
console.log(`el fibonacci de ${c} es:` ,fibonacci(c)); //55




console.log('---------------------------------------------------');



console.log('forma 2 de hacer el fibonacci:');

function fibonacci2(numero){

    let numeros=[0,1];

    for (let i = 2; i < numero; i++) {
        
        numeros[i] = numeros[i - 2] + numeros[i - 1];
        
        console.log(`${numeros[i - 2]} + ${numeros[i - 1]} = ${numeros[i]}`);

            /* resultado:
            0 + 1 = 1  <----- eso debe ser coregido a pesar de que no genera errores, no es correcto

            1 + 1 = 2
            1 + 2 = 3
            2 + 3 = 5
            */

            //otras formas de hacerlo:
            //console.log(numeros[i - 2], numeros[i - 1], numeros[i]);
            //console.log(numeros[i], numeros[i - 2], numeros[i - 1]);
            //console.log(numeros);

    }

    // return numeros;
}

//  fibonacci2(cantidad de numeros que queremos imprimir) ej: fibonacci2(10);
let renglonesAImprimir = 10;
fibonacci2( renglonesAImprimir + 2 ); // 0,1,1,2,3,5,8,13,21,34, 55, 89



/*

console.log('forma 2 de hacer el fibonacci:');

function fibonacci2(numero)
    {
        let numeros=[0,1];

        for (let i = 2; i < numero; i++) {
            
            numeros[i] = numeros[i - 2] + numeros[i - 1];

            console.log(`${numeros[i - 2]} + ${numeros[i - 1]} = ${numeros[i]}`);
            //console.log(numeros[i - 2], numeros[i - 1], numeros[i]);
            //console.log(numeros[i], numeros[i - 2], numeros[i - 1]);
            //console.log(numeros);
        }
        // return numeros;
    }
 
    //  fibonacci2(cantidad de numeros que queremos imprimir) ej: fibonacci2(10);
    fibonacci2(10); // 0,1,1,2,3,5,8,13,21,34


*/