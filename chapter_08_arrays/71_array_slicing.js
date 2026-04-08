// //slicing & combining

// let arr = [1,2,3,4,5];

// //slice(start,end) - returns new arr - doesn't mutate the actual -> (start,end-1) index = 0 

// console.log(arr.slice(1,3));
// console.log(arr.slice(-2)); // 4,5
// console.log(arr.slice(2)); // 3,4,5
// console.log(arr);

//concat

let arr1 = [1,2,3,4,5]
let a = [1,2]
let b = [3,4]
let c = a.concat(b,[5,6])
console.log(c);

//spread
let d = [...a,...b,5,6];
console.log(d);

//...,===
//Join
let s= ["pass","fail","skip"].join("+");
console.log(s);