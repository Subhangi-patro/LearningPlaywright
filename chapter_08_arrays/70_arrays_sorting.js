//sorting

let fruits = ["banana","apple","cherry"];
fruits.sort(); //sorts the array in place and returns the sorted array
console.log(fruits); //["apple", "banana", "cherry"]

let nums = [11,2,21,1];
nums.sort();
console.log(nums);
nums.sort((a,b)=> a-b);//ascending
console.log(nums);
nums.sort((a,b)=> b-a);//descending
console.log(nums);