let scores = [10, 65, 70, 40, 85];

//map - creates a new array by applying a function to each element of the original array

let grades = scores.map(s => s > 60 ? "Pass" : "Fail"); //returns a new array of boolean values indicating if each score is greater than 60
console.log(grades); // ["Fail", "Pass", "Pass", "Fail", "Pass"]

//filter - creates a new array with all elements that pass a test implemented by a function

let passimg = scores.filter(s => s > 60); //returns a new array of scores that are greater than 60
console.log(passimg); //[65, 70, 85]

//reduce - applies a function against an accumulator and each element in the array to reduce it to a single value       
let total = scores.reduce((sum, s) => sum + s, 0); //returns the sum of all scores
console.log(total); //270

//flat - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let nested = [1, [2, 3], [4, [5, 6]]];
let flat = (nested.flat()); //returns a new array with all sub-array elements concatenated into it, default depth is 1
console.log(flat); //[1, 2, 3, 4, 5, 6]