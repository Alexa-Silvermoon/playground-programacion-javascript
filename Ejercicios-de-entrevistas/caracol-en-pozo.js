
console.log('El caracol en el pozo');
console.log('Forma 1:');

const caracol = (sube, baja, pasosParaSalir) => {

    let acumulador = 0;
    let dias = 0;

    while (acumulador < pasosParaSalir ){
        
        acumulador += sube;
        
        dias++;

		if (acumulador < pasosParaSalir ){
            
            acumulador -= baja;	

		}

    }

	// console.log(dias);

    console.log('Dias que le tomo al caracol salir', dias);
    console.log('Pasos que avanza por dia: ', sube);
    console.log('Pasos que retrocede por noche: ', baja);

    // return `Dias que le tomo al caracol salir ${dias}`;

}

const sube = 7;
const baja = 2;
const pasosParaSalir = 31;

caracol(sube, baja, pasosParaSalir);


console.log('----------------------------------------------------------');

console.log('Forma 2:');

const caracol2 = (sube2, baja2, pasosParaSalir2) => {

    let acumulador = 0;
    let dias = 0;

    for ( i = 0; i <= pasosParaSalir2; i++ ){

        if ( acumulador <= pasosParaSalir2){

            acumulador += sube2;
            dias++;

            if ( acumulador <= pasosParaSalir2 ){

                acumulador -= baja2;

            }

        }

    }

    console.log('Dias que le tomo al caracol salir', dias);
    console.log('Pasos que avanza por dia: ', sube);
    console.log('Pasos que retrocede por noche: ', baja);

}

const sube2 = 7;
const baja2 = 2;
const pasosParaSalir2 = 31;

caracol2(sube2, baja2, pasosParaSalir2);
