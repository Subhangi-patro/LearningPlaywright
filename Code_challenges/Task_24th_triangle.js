let a = 10;
let b = 10;
let c = 10;

if ((a===b && b===c && a===c)){
    console.log("This traingle is equilateral.")
}
else if ((a===b || b===c || c===a)) {
    console.log("This triangle is isoceles.")
}
else {
    console.log("this triangle is scalene")
}
//Triangle classifier