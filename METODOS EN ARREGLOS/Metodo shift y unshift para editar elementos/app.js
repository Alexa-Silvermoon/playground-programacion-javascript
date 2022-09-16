console.log("metodo shift y unshift");

let tv1 = {
    pulgadas: '32"',
    precio: 100
};

let tv2 = {
    pulgadas: '40"',
    precio: 253
};

let tv3 = {
    pulgadas: '50"',
    precio: 353
};

let televisoresArray = [tv1,tv2,tv3];

console.log(tv1);
console.log(tv2);
console.log(tv3);

let tvConDescuento = televisoresArray.shift(); //.shift me toma el primer elemento del array, para poder modificarlo
tvConDescuento.precio = tvConDescuento.precio / 2; //aqui la modificacion al precio

televisoresArray.unshift(tvConDescuento); //.unshif me vuelve a meter el elemento modificado al arreglo

console.log(televisoresArray);
console.log('----------------------------------------------');
console.log('.shift me toma el primer elemento del array, para poder modificarlo');
console.log('.unshif me vuelve a meter el elemento modificado al arreglo');
