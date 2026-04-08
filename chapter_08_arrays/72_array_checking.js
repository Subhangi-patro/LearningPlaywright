//checking arrays - if something is array or not

let result = Array.isArray([1,2,3]);
let result1 = Array.isArray("1,2,3");
console.log(result);
console.log(result1);

//every
let r = [80,90,85].every(s=> s>+70)
console.log(r)

//some - Atleast ONE must pass
let t = [80,60,85].some(s => s<70);
console.log(t);