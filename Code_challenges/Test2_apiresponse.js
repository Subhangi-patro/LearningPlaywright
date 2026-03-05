//API Response Status code validator


let statuscode = 401 ;

switch (statuscode) {
 case 200: console.log("Status code : 200 Result : PASS - OK: Request succesful" );
           break;
 case 201: console.log("Status code : 201 Result : PASS - Created Resource created succesfully");
           break; 
 case 301 : console.log("Status code : 301 Result : Warning -Moved Permanwntly:URL has changed");
           break;
 case 400 : console.log("Status code : 400 Result : FAIL -Bad request:check request payload");
           break;   
 case 401 : console.log("Status code : 401 Result : FAIL - Unauthorized: Check auth token");
           break;        
 case 403 : console.log("Status code : 403 Result : FAIL - Forbidden: Insufficient permissions");
           break; 
 case 404 : console.log("Status code : 404 Result : FAIL - Not Found: Check emdpoint URL");
           break;                     
 case 500 : console.log("Status code : 500 Result : FAIL - Internal Server Error : Backend issue");
           break;          
 default:
    console.log("UNKNOWN - Unhandled status code")
}
