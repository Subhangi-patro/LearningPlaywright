let arr = [1, 2, 3];

//add to end
arr.push(4);
console.log(arr); //[1, 2, 3, 4]

arr.push(5, 6);
console.log(arr); //[1, 2, 3, 4, 5, 6]

//remove from end
arr.pop();
console.log(arr); //[1, 2, 3, 4, 5]

//add to beginning
arr.unshift(0);
console.log(arr); //[0, 1, 2, 3, 4, 5]

//remove from beginning
arr.shift();
console.log(arr); //[1, 2, 3, 4, 5]

//splice - add/remove at specific index
arr.splice(2, "a"); //add "a" at index 2
console.log(arr); //[1, 2, "a", 3, 4, 5]

arr.splice(2,3,7,8); //remove 3 items from index 2 and add 7, 8
console.log(arr); //[1, 2, 7, 8, 5]
