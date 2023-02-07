// problem-1

function mindGame(number){
    let multiply = number * 3;
    addition = multiply + 10;
    division = addition / 2;
    deduction = division - 5;
    return deduction;
}

// let result = mindGame(33);
// console.log(result);

// problem-2

function evenOdd(string){
    let character = string.length 
    if(character % 2 == 0){
        console.log('Even');
    }
    else{console.log('Odd');
    }       
}
// evenOdd('chatgpt');

// problem-3

function isLGSeven(number){
    if(number < 7){
        let deductResult = number - 7;
        return deductResult;
    }
    else{
        let doubleOfInput = number * 2;
        return doubleOfInput;
    }
}
// var result = isLGSeven(15);
// console.log(result);

// problem-4 

function findingBadData(numbers){
    let count = 0;    
    for(var i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element < 0){
            count = count + 1;
        }
        else{
            count = count + 0
        }
        
    }
    return count;
}

let numbers = [1, 2, 10, 5,];
let totalCount = findingBadData(numbers);
console.log(totalCount);