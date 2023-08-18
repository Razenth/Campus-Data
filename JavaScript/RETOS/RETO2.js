const prompt = require('prompt-sync')({sigint: true}); //Requiere instalar Node y npm install

array = []
let size = prompt('Type the size of the array: ')
while (size <= 5 || size >= 10**5){
    console.log('Error in size, please type again');
    size = prompt('Type the size of the array: ')
}

for (i = 0; i < size; i++){
    let number = prompt(`Number ${i+1}: `)
    while (array.includes(number)){
        console.log('The entering number already exists, please digit again');
        number = prompt(`Number ${i+1}: `)
    }
    array.push(number)
}

let targ = prompt('Type the target: ')
while (targ <= 1 || targ >= 10**9){
    console.log('Error, the target exceeds the range ');
    targ = prompt('Type the target: ')
}


function countPairs(projectsCosts,target){
    let pair = 0
    for (i = 0; i <= projectsCosts.length; i++){
        for (k = 0; k <= projectsCosts.length; k++){
            if (projectsCosts[i] - projectsCosts[k] == target){
                pair++
            }
            else{
                continue
            }
        } 
    }
    console.log(`Targets: ${pair}`);
}

countPairs(array,targ)