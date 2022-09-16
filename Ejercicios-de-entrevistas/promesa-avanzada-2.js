
promesaEnviarADireccion = (mensaje) => {

    return new Promise( (resolve, reject) => {

        let isDireccion = true
        // console.log(mensaje); // objeto smartphone
        // console.log(isDireccion); boolean

        if ( mensaje && isDireccion ){

            let celular = JSON.stringify(mensaje);

            // resolve(`Se ha entregado un ${celular} a la direccion`);
            resolve(celular);

        } else {

            reject('No se ha podido entregar smartphone por que no habia direccion');

        }

    });

}



miPromesa = () => {

    return new Promise((resolve, reject) => {

        let istareaRealizada = true

        if ( istareaRealizada === true ){

            let smartphone = {

                marca: 'samsung',
                referencia: 'm12',
                color: 'azul'
            }

            resolve( smartphone );

        } else {

            reject('No hiciste la tarea, No te mereces el celular');

        }

    });
}


miPromesa().then( (mensaje) => {

    console.log('Si hiciste la tarea, te mereces un: ', mensaje);
    return promesaEnviarADireccion(mensaje);

}).then( (mensaje) => {

    // return promesaEnviarADireccion(mensaje);
    // console.log( mensaje );
    console.log(`Se ha entregado un ${mensaje} a la direccion`);
    // console.log('Se ha entregado un ', mensaje, ' a la direccion');

}).catch( (error) => {

    console.error(error);
});
