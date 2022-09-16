
console.log('Object.assign protege el objeto original');

const obj1 = {
    a: 0,
    b: 2,
    c: 4
};

const obj2 = Object.assign({c:5, d:6}, obj1);

console.log('objeto original: ', obj1);

console.log(obj2); // {c: 4, d: 6, a: 0, b: 2}

// se respeto c:4

console.log('--------------------------------------');

let persona = {

    nombre: 'Alexander',
    edad: 27
};

let nuevaPersona = Object.assign({}, persona);
nuevaPersona.nombre = 'Christian';

console.log('persona: ', persona); //{nombre: 'Alexander', edad: 27}
console.log(persona.nombre); //Alexander

console.log('nuevaPersona: ', nuevaPersona); //{nombre: 'Christian', edad: 27}
console.log(nuevaPersona.nombre); // Christian
