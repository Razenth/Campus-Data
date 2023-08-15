let numeroMax = 578934
let pares = 0
let impares = 0

for (i = 0; i <= numeroMax; i++){
    if (i%2==0){
        pares+=i
    }
    else if (i%2==1){
        impares+=i
    }
}
console.log(`Total de pares ${pares} y total de impares ${impares}`);