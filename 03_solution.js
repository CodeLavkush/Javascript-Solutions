function reverseString(str){
    return str.split('').reverse('').join('');
}

let mesg = "hello";
let reverseMesg = mesg + reverseString(mesg);
console.log(reverseMesg);