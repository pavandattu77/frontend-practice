function Sum(num1,num2){
    let res=num1+num2;
    return res;
}
console.log(Sum(2,3));
console.log(Sum(2,39));


// // function Expression :Assigning function to a variable
// // 1.named function (function decleration)
// // 2.anonymous function (function expression)
// // 3.immediately invoke function expression(IIFE)
// // 4.Arrow function


let Add=function(num1,num2){
    let res=num1+num2;
    return res;
}
console.log(Add(22,3));


function Product(n1,n2){
    let result=n1*n2;
    return result;
}
a=+prompt("Enter a value")
b=+prompt("Enter b value")
console.log(Product(a,b))


let div=(n1,n2)=>{
    let res=n1/n2;
    return res;
}
console.log(div(2,6))



let cube=(n)=>n*n*n
console.log(cube(6))

// // immediately invoked function expression (IIFE)
// (function product(n1,n2){
//     let result=n1*n2;
//     console.log("The product of " + n1 + " and " + n2 + " is: " + result);
//     return result;
// })(6,7);


// to print prime numbers in a range 1 to 100
console.log("Prime numbers between 1 and 100:");
function Prime(nu){
    if(nu<2) return false;
    for(i=2;i<=nu/2;i++){
        if(nu%i==0) return false;
    }
    return true;
}
if(Prime(2)) console.log(2);
for(let i=3;i<=100;i++){
    if(Prime(i)) console.log(i);
}


const greetings = (name,callbackFn)=>{
    console.log("Hello",name)
    callbackFn()
}
const message =() => console.log("Bye")
greetings("divya",message)


function calculate(a,b,resultpara){
    let result=a*b;
    resultpara(result);
}
function display(result){
    console.log("The Product of the given numbers is :",result);
}
calculate(5,6,display);
