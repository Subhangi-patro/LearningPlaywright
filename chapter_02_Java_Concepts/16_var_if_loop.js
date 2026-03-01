var a = "Subhangi";

if (true) {

  console.log(a); // local var, tdz starts here
  var a = "local"; 
  console.log(a); // "local"
}