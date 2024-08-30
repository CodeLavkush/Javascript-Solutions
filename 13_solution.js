function calculateTotal(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += Number(arr[i].price) * Number(arr[i].quantity)
    }
    return total
}

let products = [{
    name: "Lian Li Pc case",
    quantity: "1",
    price: "3469"
},
{
    name: "RTX 3050 graphic card",
    quantity: "1",
    price: "17560"
},
{
    name: "MSI pro-vdh wifi MotherBoard",
    quantity: "1",
    price: "10400"
},
{
    name: "Amd ryzen 5600x",
    quantity: "1",
    price: "14500"
}] 

console.log(calculateTotal(products));