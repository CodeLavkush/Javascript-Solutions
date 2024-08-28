function confirmation(){
    let randomNum = Math.floor(Math.random() * 5000) + 1000;
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            return resolve("Ordered Confirmed!");
        }, randomNum)
    })
}


async function placeOrder() {
    try{
        return await confirmation();
    }
    catch(error){
        console.log(error);
    }
}

console.log(placeOrder());