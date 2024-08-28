function getSum(arr) {
    let sum = [];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < arr.length; i++) {
                sum.push(arr[i] * 2);
            }
            resolve(sum);
      }, 500);
    });
  }


async function multiple() {
    try{
        let numbers = [1,2,4,6,7];
        return await getSum(numbers);
    }
    catch(error){
        return console.log(error);
    }
}



console.log(multiple());