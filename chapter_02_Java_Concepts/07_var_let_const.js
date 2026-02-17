//var,let,const
//var is function-scoped, let and const are block-scoped
//var can be re-declared and updated, let can be updated but not re-declared, const cannot be updated or re-declared

var a = 10;//global scope
console.log(a); // 10

function testVar() {
var a = 20;//function scope
console.log(a); // 20
if(true){
    var a = 30;
    console.log(a); // 30
}
console.log("F -- > " ,a); // 30
}
testVar();
