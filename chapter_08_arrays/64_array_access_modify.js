let status = ["open", "closed", "pending"];
console.log(status[0]); //open
console.log(status[1]); //closed

console.log(status.at(-1)); //pending, at() method supports negative indices
console.log(status.at(-2)); //closed