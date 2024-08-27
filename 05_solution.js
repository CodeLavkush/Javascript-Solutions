function sumAll(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 0){
            sum += numbers[i]
        }
    }
    
    return sum;
}

let numbers = [1,2,4,5,6,3,-1,-2,-3,-5];
console.log(sumAll(numbers));