 // Say hello 5 times

for (let i = 1;i <= 5;i++){
    console.log("Hello",i)
}

// Print 1-100

for (let a = 1;a <=100 ;a++ ){
    console.log(a);
} 

//Print even numbers 1 - 20

for (b= 1; b <=20 ; b++){
    if(b%2 === 0)
    console.log(b);
}

//print sum of first 10 natural numbers

let sum = 0 ;
for(n=1 ; n<=10 ; n++){
    sum = sum + n ;
}
console.log("The sum of frist 10 natural numbers is",sum);

//print the multiplication table of 5

let mul = 0;
for (let m = 1 ; m <=10 ; m++ ){
    mul = m * 5 ;
    console.log("5 * ",m ,"=",mul);
}