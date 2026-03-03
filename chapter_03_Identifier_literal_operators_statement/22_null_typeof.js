//Null - "intentionally absent value"

let selecteditem = null;
console.log(selecteditem); // Output: null

let declareonly;
console.log(declareonly); // Output: undefined

//The typeof operator can be used to check the type of a variable. However, it returns "object" for null, which is a known quirk in JavaScript.
console.log(typeof selecteditem); // Output: "object"
console.log(typeof declareonly); // Output: "undefined"