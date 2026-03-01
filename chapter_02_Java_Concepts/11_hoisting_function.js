// Step 1 - Definition of function
function greet() {
    console.log(status_code);
    var status_code = "Hello, World!";
    console.log(status_code);
}


// Step 2 - Calling the function
greet(); // Output: Hello, World!

// Explanation: In JavaScript, function declarations are hoisted to the top of their scope. This means that you can call a function before it is defined in the code. In this example, we define a function named 'greet' that logs "Hello, World!" to the console. We then call the function before its declaration, and it works correctly because of hoisting.   