//iterate - Go from the first element to the last element of an array

let tests =["login","signup","checkout"];
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}
console.log("----");

//for of loop - iterates over the values of an array
for (let test of tests) {
    console.log(test);
}

console.log("----");

//forEach - executes a provided function once for each array element
tests.forEach((test, index) => {
    console.log(`${index}: ${test}`);
});