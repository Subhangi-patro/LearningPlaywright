const responsetime=[120, 230, 450, 510, 180, 620];
const sla = 500;
let slabreachcount = 0;

for(let i = 0; i< responsetime.length; i++){
if (responsetime[i] > sla){
slabreachcount++;
}
}

console.log("==============================");
console.log("Total API calls: " + responsetime.length);
console.log("Maximum Response Time: " + Math.max(...responsetime));
console.log("Minimum Response Time: " + Math.min(...responsetime));
let slabreachperc = (slabreachcount / responsetime.length) * 100;  
console.log("SLA Breaches: " + slabreachcount + " (" + slabreachperc.toFixed(2) + "%)");
const overallStatus = slabreachcount === 0 ? "✅ ALL PASSED" : "❌ SLA VIOLATED";
console.log("Overall Status   : " + overallStatus);
console.log("==============================");