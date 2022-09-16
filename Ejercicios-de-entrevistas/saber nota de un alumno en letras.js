
/*
CREAR UN ALGORITOMO QUE PERMITA DETERMINAR LA CALIFICACION EN LETRAS DE UN ALUMNO

si la nota se encuentra entre 100 a 90 = A
si la nota se encuentra entre 80 a 89 = B
si la nota se encuentra entre 70 a 79 = C
si la nota se encuentra entre 60 a 69 = D
si la nota es inferior a 60 = F

*/

let nota = 89;
console.log('su nota fue: ', nota);
let notaLetra = '';

if (nota >= 90){
    notaLetra = 'A';
} else if (nota >= 80){
    notaLetra = 'B';
} else if (nota >= 70){
    notaLetra = 'C';
} else if (nota >= 60){
    notaLetra = 'D';
} else if(nota >= 0){
    notaLetra = 'F';
}
console.log(nota, ' la nota es ', notaLetra);
