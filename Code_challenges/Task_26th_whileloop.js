//write playwright 5 times

let i = 1;    
while(i <= 5){
    console.log("Hello",i);
    i++;
}

//print numbers 1-10

let a = 1;
while(a<=20){
    console.log(a);
    a++;
}

//print even numbers 1- 20

let e = 1;
while(e<=20){
    if(e%2==0)
        console.log(e)
    e++
}

//sum of first 10 natural numbers

let n = 1;
let sum = 0;
while(n<=10){
    sum = sum + n;
    n++;
}
console.log("sum of first 10 natural numbers",sum);

//Mul table of 7

let m = 1;
let mul = 0;

while(m<=10){
    mul=m*7;
    console.log(m ,"* 5 =",mul);
    m++;
}