console.log(greet);
var greet = "Hello, World!";
console.log(greet);

// Explanation: In JavaScript, variable declarations using 'var' are hoisted to the top of their scope. This means that the declaration of 'greet' is moved to the top of the code, but its assignment is not. Therefore, when we try to log 'greet' before it has been assigned a value, it returns 'undefined'. After the assignment, logging 'greet' will return "Hello, World!".
