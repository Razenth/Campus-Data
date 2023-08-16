const prompt = require('prompt-sync')({sigint: true});

const clave1 = prompt('Clave 1: ')
const clave2 = prompt('Clave 2: ')
let array1 = []
let array2 = []
let arrayUltra = [] 
let acumula = ""

if (clave1.length == clave2.length){
    for (let i = 0; i < clave1.length; i++) {
        array1.push(clave1[i])
    }
    for (let i = 0; i < clave2.length; i++) {
        array2.push(clave2[i])
    }
    for (let i = 0; i < array2.length; i++) {
        arrayUltra.push(array1[i])
        arrayUltra.push(array2[i])
    }
    for (let i = 0; i < arrayUltra.length; i++){
        acumula+= arrayUltra[i]
    }
    console.log(acumula);
}
