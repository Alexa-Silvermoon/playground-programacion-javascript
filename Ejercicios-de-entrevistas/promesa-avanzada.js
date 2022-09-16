
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

}).catch( (error) => {

    console.error(error)
});
