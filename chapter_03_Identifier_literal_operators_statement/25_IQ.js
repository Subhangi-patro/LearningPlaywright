0 == "" // Output: true
0 == "0" // Output: true
0 == false // Output: true
null == undefined // Output: true

"\t\n" == 0 // Output: true
"\t\n" == false // Output: true

//Rule breakers

null == 0 // Output: false
undefined == 0 // Output: false
undefined == false // Output: false
null == false // Output: false
undefined == "" // Output: false
null == "" // Output: false
NaN == NaN // Output: false

//In JavaScript, the loose equality operator (==) performs type coercion when comparing values. This means that it will convert the values to a common type before making the comparison. For example, when comparing 0 and "", JavaScript will convert the empty string to a number, which results in 0, making the comparison true. Similarly, when comparing 0 and "0", JavaScript will convert the string "0" to a number, which also results in 0, making the comparison true. When comparing 0 and false, JavaScript will convert false to a number, which results in 0, making the comparison true. When comparing null and undefined, JavaScript considers them equal because they both represent the absence of a value. However, when comparing null or undefined with other values like 0 or false, they are not considered equal because they are of different types and do not represent the same concept of "no value".

console.log("" === false); // Output: false
console.log("" == false); // Output: true

console.log(null ==  undefined); // Output: true
console.log(null === undefined); // Output: false

console.log(0 === false); // Output: false

//Dangerous comparisons

console.log(0 == false); // Output: true    
console.log("0" == false); // Output: true
console.log("" == "0"); // Output: false
 