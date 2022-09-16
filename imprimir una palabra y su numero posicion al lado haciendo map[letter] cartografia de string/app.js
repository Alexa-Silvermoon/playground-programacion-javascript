
console.log('imprimir una palabra y su numero posicion al lado, haciendo map[letter], function mapString, ciclos for, cartografia de strings');

let word = 'christian';
console.log('-------------------------------------------');
console.log(word);
console.log('-------------------------------------------');

function mapString(string){

    let map = {};

    for (let i=0;i<string.length;i++){

        let letter = string[i];

        if (map[letter]){
            map[letter].push(i);

        }else{
            map[letter] = [i];
        }
    }
    // console.log(map);
    return map;
}

let stringMap = mapString(word);

for (let letter in stringMap){

    console.log(letter + ': ' + stringMap[letter]);
}

/*
let string = 'cris';
for (let i=0;i<string.length;i++){ //error
    let letter = string[i];
    console.log(letter);
    console.log(i);
}
*/
