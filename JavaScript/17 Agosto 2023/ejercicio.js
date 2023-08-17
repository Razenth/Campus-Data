// EJERCICIOS 17 DE AGOSTO DE 2023
// SANTIAGO GONZÁLEZ AGUDELO

// EJERCICIO 1
// CREAR ARREGLO DE 10 POSICIONES CON NUMEROS ALEATORIOS, MOSTRAR EN CONSOLA

let arrayNumbers = []
let arrayIndex = []
let targets = 10


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

function random(target,arrayNumber,arrayExtra){
    for (i = 0; i <= target; i++){
        arrayNumber.push(getRandomInt(20))
        arrayExtra.push([arrayNumber[i],i])
    }
    console.log(arrayExtra);

}

function index(otherArray){
    for (i = 0; i < otherArray.length;i++){
        console.log(`Valor ${otherArray[i][0]} Indice ${otherArray[i][1]}`);
    }

}
random(targets,arrayNumbers,arrayIndex)
index(arrayIndex)

