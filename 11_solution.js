function filterProducts(products, filterCriterion){
    let output = products.filter(product => product.catogory == filterCriterion);
    for (let i = 0; i < output.length; i++) {
        console.log(output[i].product)
    };
}

let productObj = [{
    key: "1",
    product: "Smart Phone",
    catogory: "techProducts"
}, 
{
    key: "2",
    product: "Laptop",
    catogory: "techProducts"
},
{
    key: "3",
    product: "Tshirt",
    catogory: "Beauty and Fashion"
}
,{
    key: "4",
    product: "Potato chips",
    catogory: "Food and Lifestyle"
}]
console.log(filterProducts(productObj, "Beauty and Fashion"))