let original = [1,2,3]; //shallow copy

let copy1 = [...original]; //spread
//console.log(copy1);
let copy2 = original.slice();
//console.log(copy2);
let copy3 = Array.from(original);
//console.log(copy3);
let copy4 = original.concat();
//console.log(copy4);

copy1.push(99);
console.log(original);
console.log(copy1);

//deep copy(JSON)
original.push(99);
console.log(original);
console.log(copy1);

let cc = original;
cc.push(5);
console.log(cc);
console.log(original);