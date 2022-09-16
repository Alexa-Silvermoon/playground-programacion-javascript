
console.log('tabla del multiplicar en matriz del 5 con limite 5');
// imprimir matriz de la tabla del multiplicar en matriz del 5 con limite 5

for (i=1;i<=5;i++){
    
    let reglon = '';

    for (j=1;j<=5;j++){
        reglon += `${j * i} `;
    }
    console.log(reglon);
}
