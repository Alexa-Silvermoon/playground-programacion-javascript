
console.log('comparar si hay o no hay elementos de un array en el otro array, si lo hay es true, sino false');

let invetarioTienda = ['comida','libros','bolsa de leche'];

let listaDeCompras = ['ropa','comida','libros','cuchillo','paca de arroz'];

for (let item of listaDeCompras){
    console.log(item + ': ' + invetarioTienda.includes(item));
}

console.log('-------------------------------------------');

for (let item2 of listaDeCompras){

    if (item2, invetarioTienda.includes(item2)){
        console.log(item2 + ': si disponible');
    }else{
        console.log(item2 + ': no disponible');
    }
}
