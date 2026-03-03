//true resultd

if ("hello") console.log("This will be printed because non-empty strings are truthy.");
if (42) console.log("This will be printed because non-zero numbers are truthy.");  
if (1) console.log("This will be printed because non-zero numbers are truthy.");
if (true) console.log("This will be printed because true is truthy.");
if ({}) console.log("This will be printed because objects are truthy.");
if ([]) console.log("This will be printed because arrays are truthy.");

//false results
if ("") console.log("This will not be printed because an empty string is falsy.");
if (0) console.log("This will not be printed because zero is falsy.");  
if (false) console.log("This will not be printed because false is falsy.");
if (null) console.log("This will not be printed because null is falsy.");
if (undefined) console.log("This will not be printed because undefined is falsy.");
if (NaN) console.log("This will not be printed because NaN is falsy."); 
