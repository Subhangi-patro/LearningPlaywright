//Array

let x = [];
let y = ["a", "b", "c","c"];
let z = [2,3,4];
console.log(y.length); //4
console.log(z[0]); //2

let a = [1, "a", true, null, undefined, {name: "John"}, [1,2,3]];
//js arrays can hold any type of data, including other arrays and objects.

//Array constructors

let arr1 = new Array(); //empty array
let arr2 = new Array(5); //array of length 5, filled with empty items
let arr3 = new Array(1, 2, 3); //array with elements 1, 2, 3
let arr4 = new Array("a", "b", "c"); //array with elements "a", "b", "c"

console.log(arr4); //["a", "b", "c"]

let arr5 = Array.of(1, 2, 3); //array with elements 1, 2, 3
console.log(arr5); //[1, 2, 3]
console.log(arr5[2]); //3

let char = Array.from("hello"); //array from string, each character becomes an element
console.log(char); //["h", "e", "l", "l", "o"]