console.log("Metodo join para interconectar elementos de un arreglo justo en la coma");

let partesHumanas = ['cerebro','cuello','columna','cadera','piernas'];

partesHumanas.forEach(function(listaPartes){
    console.log(listaPartes);
});

console.log(' .join = se conecta con');
console.log(partesHumanas.join(' se conecta con '));
