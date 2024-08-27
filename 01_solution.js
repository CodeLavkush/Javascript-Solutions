

function getElementLength(array){
    let lengths = []
    
    for(let i = 0; i < array.length; i++){
        lengths.push(array[i].length);
    }
    return lengths
}

let sNames = ["Shubham", "Sunil", "Cristiano","Massy","shrinivasaniyer"]
let hName = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]

let sNameLengths = getElementLength(sNames);

for(let i = 0; i < sNameLengths.length; i++){
    if(sNameLengths[i] < 6){
        console.log(`${sNames[i]} ${hName[0]}`)
    }
    else if(sNameLengths[i] < 8){
        console.log(`${sNames[i]} ${hName[1]}`)
    }
    else if(sNameLengths[i] < 12){
        console.log(`${sNames[i]} ${hName[2]}`)
    }
    else if(sNameLengths[i] >= 12){
        console.log(`${sNames[i]} ${hName[3]}`)
    }
}

