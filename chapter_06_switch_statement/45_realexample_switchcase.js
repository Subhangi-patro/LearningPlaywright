//you are working with api alidation and response code is 200,201,202,204,400,401,403,404,500,502,503
//you want to print the meaning of the response code
let responseCode = 404;
switch (responseCode) {
    case 200:
        console.log("OK");
        break;
    case 201:
        console.log("Created");
        break;
    case 202:
        console.log("Accepted");
        break;
    case 204:
        console.log("No Content");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case 401:
        console.log("Unauthorized");
        break;
    case 403:
        console.log("Forbidden");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Internal Server Error");
        break;
    case 502:
        console.log("Bad Gateway");
        break;
    case 503:
        console.log("Service Unavailable");
        break;
    default:
        console.log("Unknown Response Code");
}