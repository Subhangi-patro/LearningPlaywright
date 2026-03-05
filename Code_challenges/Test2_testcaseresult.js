//Test case result counter

const testresults = ["pass","pass","fail","pass","skip","pass","fail","pass"];
let pass = 0 ;
let fail = 0 ;
let skip = 0 ;

for(let i = 0; i<testresults.length ; i++ ){
  if(testresults[i]=== "pass"){
    pass++;
}
  else if(testresults[i]=== "fail"){
    fail++;
}
  else if(testresults[i]=== "skip"){
    skip++;
  }
}

console.log("Total tests :", testresults.length , "Pass :", pass,"Failed :" , fail , "Skipped :", skip);
console.log("Pass rate :",((pass/testresults.length)*100),"%");

if (pass === testresults.length)
    console.log("Verdict:All passed -- > ready for release")
else if(fail <= 2)
    console.log("Verdict: Minor Failures -- > review before release")
else
    console.log("Verdict: failures --> block release")
