function doubleUniqueElements(arr) {
    const uniqueElements = new Set(arr);
    const doubledUniqueElements = [];
  
    for (let element of uniqueElements) {
      doubledUniqueElements.push(element + element);
    }
  
    return doubledUniqueElements;
}
  
let elements = ["hi", "hello", "ohhh", "myGod", "hi"];
console.log(doubleUniqueElements(elements));