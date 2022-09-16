
console.log('hola desde cambio-en-monedas.js');

/*
hacer un ejercicio que haga un cambio (la de vuelta) en monedas correctamente
*/

cambioEnMonedas = (cambio) => {

    if ( cambio < 1){

        return console.log('cantidad de monedas a devolver es 0');
    }

    var monedas = [25, 10, 5, 1];
    console.log(`Los tipos de monedas disponibles son: ${monedas}`);
    numeroDemonedas = 0;

    for ( moneda of monedas ){

        numeroDemonedas += Math.floor( cambio / moneda );

        cambio = cambio % moneda;

        if ( cambio === 0 ){

            break;
        }

        if ( moneda === monedas[i]){


            
        }
    }

    return console.log(`la cantidad de monedas a devolver es: ${numeroDemonedas}`);

}

let valor = 31;
console.log(`El valor dela devuelta es: ${valor}`);
console.log( cambioEnMonedas(valor));

console.log('-----------------------------------------------------');

var importe = 51;

// indicamos todas las monedas posibles

var monedas=Array(25, 10, 5, 1);

// creamos un array con la misma cantidad de monedas
// Este array contendra las monedas a devolver
var cambio=Array(0, 0, 0, 0);

// Recorremos todas las monedas
for(var i=0; i<monedas.length; i++){
  
     // Si el importe actual, es superior a la moneda
     if(importe>=monedas[i]){
  
         // obtenemos cantidad de monedas
         cambio[i]=parseInt(importe/monedas[i]);
  
         // actualizamos el valor del importe que nos queda por didivir
         importe=(importe-(cambio[i]*monedas[i])).toFixed(2);
     }
}

console.log('Se debe devolver:');

// Bucle para mostrar el resultado
for(i=0; i<monedas.length; i++){

     if(cambio[i]>0){

         if(monedas[i]>=1){

            console.log( ` ${cambio[i]} moneda de $${monedas[i]}` );

        }
    }
}

//ORIGINAL:
/*

<script>
 
var importe=prompt("Indica una cantidad: ");
 
document.write("<p>El cambio de la cantidad "+importe+"</p>");
 
// indicamos todas las monedas posibles
var monedas=Array(500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.20, 0.10, 0.05, 0.02, 0.01);
 
// creamos un array con la misma cantidad de monedas
// Este array contendra las monedas a devolver
var cambio=Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
 
// Recorremos todas las monedas
for(var i=0; i<monedas.length; i++)
{
 
    // Si el importe actual, es superior a la moneda
    if(importe>=monedas[i])
    {
 
        // obtenemos cantidad de monedas
        cambio[i]=parseInt(importe/monedas[i]);
 
        // actualizamos el valor del importe que nos queda por didivir
        importe=(importe-(cambio[i]*monedas[i])).toFixed(2);
    }
}
 
// Bucle para mostrar el resultado
for(i=0; i<monedas.length; i++)
{
    if(cambio[i]>0)
    {
        if(monedas[i]>=5)
            document.write("Hay: "+cambio[i]+" billetes de: "+monedas[i]+" &euro;<br>");
        else
            document.write("Hay: "+cambio[i]+" monedas de: "+monedas[i]+" &euro;<br>");
    }
}
 
</script>

*/

// https://www.lawebdelprogramador.com/codigo/JavaScript/2905-Desglosar-un-importe-en-billetes-y-monedas.html
// https://www.lawebdelprogramador.com/codigo/JavaScript/index1.html
