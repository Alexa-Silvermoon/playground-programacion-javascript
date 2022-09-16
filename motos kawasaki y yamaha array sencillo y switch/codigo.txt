
console.log('usando array y switch, que marca de moto te gusta, kawasaki o yamaha?');
let marca = 'yamaha'; //o kawasaki
console.log('marca elegida: ' + marca);

let motosKawasaki = ['ninja 300', 'ninja400', 'z800', 'z900', 'z1000', 'zh2', 'H2'];
let motosYamaha = ['R15', 'R3', 'R6', 'MT09', 'R1'];

switch (marca){
    case 'kawasaki':
        console.log(motosKawasaki);
        break;

    case 'yamaha':
        console.log(motosYamaha);
        break;

        default:
            console.log('marca no encontrada');
            break;
};

console.log('---------------------');
console.log('Equivalentes de motos');

console.log(motosKawasaki[0] + ' es rival directa de la ' + motosYamaha[1]);
