// SANTIAGO GONZALEZ AGUDELO
//  DESARROLLO PRIMER ENUNCIADO

function edad(x){
    actual = 2023
    final = 2023-x
    console.log("El año en el que nació fue",final);
}

edad(19)


// DESARROLLO SEGUNDO ENUNCIADO 

function fahrenheit(c){
    f= 32+(9*c/5)
    console.log(`${c}º Celsius son ${f} Fahrenheit`)
}
fahrenheit(0)

// DESARROLLO TERCER ENUNCIADO

let array = [2,4,3,6,5,9,8]
let array2 = []
let target = 10 

function mostrar_target(){
    for (let i=0;i<=array.length;i++){
        for (let j=i+1;j<=array.length;j++){
            if(array[i]+array[j] == target){
                array2.push([array[i],array[j]])
            }
        }
    }
    console.log(array2);    
}

mostrar_target()
