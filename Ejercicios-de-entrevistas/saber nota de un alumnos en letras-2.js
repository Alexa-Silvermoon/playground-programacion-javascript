
/*
crear funcion que permita determinar la calificacion de 3 alumnos 

uno con nota de 100, el otro con nota de 80, el ultimo con nota de 59

*/

function calcularNota(nota){

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

}

calcularNota(100); //estudiante uno con nota de 100
calcularNota(80);  //estudiante dos con nota de 80
calcularNota(59);  //estudiante 3 con nota de 59
