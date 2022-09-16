/*
for (let i=1;i<=10;i++){
    resultado=2*i;
    console.log('2 x ' + i + ' = ' + resultado);
}
*/
//imprimir tabla del 10 hasta pero que llega hasta el 20 usando function

imprimirTabla = (base,limite) => {
    
    for (let i=1; i<=limite; i++){
        
        resultado = base * i;
        
        console.log( base, ' x ', i, ' = ', resultado);

    }
}

imprimirTabla(10,5);
imprimirTabla(3,10);
