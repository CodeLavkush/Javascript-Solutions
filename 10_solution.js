function brewCoffe(coffe){
    let randomNum = Math.floor(Math.random() * 5000) + 1000;
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(coffe){
                return resolve("Your Coffe is ready");
            }
        }, randomNum)
    })
}


async function coffe() {
    try{
        return await brewCoffe(true);
    }
    catch(error){
        console.log(error);
    }
}

console.log(coffe());