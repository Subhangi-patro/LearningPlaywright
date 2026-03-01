let a = "global";

if (true) {

  console.log(a); // local var, tdz starts here
  let a = "local"; // block scope works here
}
console.log(a); // "global"