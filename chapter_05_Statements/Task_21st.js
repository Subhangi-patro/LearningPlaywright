let x = 70;
if (x >= 90 && x <= 100) {
    console.log("Grade: A");
} else if (x >= 80 && x < 90) {
    console.log("Grade: B");
} else if (x >= 70 && x < 80) {
    console.log("Grade: C");
} else if (x >= 60 && x < 70) {
    console.log("Grade: D");
} else if (x >= 0 && x < 60) {
    console.log("Grade: F");
} else {
    console.log("Invalid marks. Please enter a value between 0 and 100.");  
}

// Code for grading system based on marks obtained. The program checks the value of x and prints the corresponding grade based on the defined criteria. In this case, since x is 70, it will print "Grade: C".