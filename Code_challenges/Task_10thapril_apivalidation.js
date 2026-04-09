let responses = [200, 201, 404, 500, 404, 200, 503];

// 1️⃣ Check if ALL responses are successful (200–299)
let allSuccessful = responses.every(code => code >= 200 && code <= 299);

// 2️⃣ Find the FIRST non-success code
let firstError = responses.find(code => code < 200 || code > 299);

// 3️⃣ Return all unique error codes
let uniqueErrors = [...new Set(responses.filter(code => code < 200 || code > 299))];

// Output results
console.log("All Successful:", allSuccessful);
console.log("First Error Code:", firstError);
console.log("Unique Error Codes:", uniqueErrors);
