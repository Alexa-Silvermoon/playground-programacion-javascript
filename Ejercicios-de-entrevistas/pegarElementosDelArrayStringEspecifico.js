
// OBJETIVO: agregar a cada elemento de array el signo $ al principio de cada elemento del array

class PegarElementosArray{

    constructor(...palabras){

        this.palabras = palabras;

        let newArray = [];

        let valor = '';

        for ( let i = 0; i < palabras.length; i++){

            valor = `$${ palabras[i]}`;

            newArray.push(valor);

        }

        return newArray;

    }

}

console.log('OBJETIVO: agregar a cada elemento de array el signo $ al principio de cada elemento del array');
console.log('original: ', 'haha', 'hehe', 'hihi', 'hoho', 'huhu');
console.log('original: ', 'Esto','Es','Asombroso');

let A = new PegarElementosArray('haha', 'hehe', 'hihi', 'hoho', 'huhu');
console.log(A); //['$haha', '$hehe', '$hihi', '$hoho', '$huhu']

let B = new PegarElementosArray('Esto','Es','Asombroso');
console.log(B); //['$Esto', '$Es', '$Asombroso']

console.log('-----------------------------------------------------------------');

// OBJETIVO: agregar a cada elemento de array el signo $ al principio de cada elemento del array
// y luego al final de todo el string tambien agregar el $
class PegarElementosArray2{

    constructor(...palabras2){

        this.palabras2 = palabras2;

    }

    imprimir(){

        let final = '';
        let elemento = '';
        
        for (elemento of this.palabras2){
            
            if(elemento == ','){
                
                elemento = '';
            
            } else {
                
                final += '$' + elemento;
            
            }
        
        }
        
        final = final + '$';
        
        return final;
  
    }

}

let resultado = new PegarElementosArray2('Christian','Alexander','Martinez','Millan');

console.log(resultado.imprimir()); //$Christian$Alexander$Martinez$Millan$
