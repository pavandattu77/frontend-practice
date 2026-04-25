let a=90
let b=9;
if(a > b) {
    console.log("a is greater than b");
}
else if(a < b) {
    console.log("a is less than b");
}
else{
    console.log("a is equal to b");
}


let x=+prompt("Enter a number:")
if(x>10){
    console.log("x is greater than 10");
    if(x%2==0){
        console.log("x is even");
    }
    else{
        console.log("x is odd");
    }
}
else{
    console.log("x is less than or equal to 10");
}


let y = +prompt("Enter a number:");
if (y > 10) {
    console.log("y is greater than 10");

    if (y % 3 === 0 && y % 7 === 0) {
        console.log("y is divisible by both 3 and 7");
    } else if (y % 3 === 0) {
        console.log("y is divisible by 3");
    } else if (y % 7 === 0) {
        console.log("y is divisible by 7");
    } else {
        console.log("y is not divisible by 3 or 7");
    }

} else {
    console.log("Given number is less than or equal to 10");
}


let p=+prompt("Enter a number:")
let q=+prompt("Enter another number:")
operation=prompt("Enter an operation (+, -, *, /, %):")
switch(operation) {
    case '+':
        console.log("Result +:", p + q);
        break;
    case '-':
        console.log("Result -:", p - q);
        break;
    case '*':
        console.log("Result *:", p * q);
        break;
    case '/':
        if(q !== 0) {
            console.log("Result /:", p / q);
        } else {
            console.log("Cannot divide by zero");
        }
        break;
    case '%':
        if(q !== 0) {
            console.log("Result %:", p % q);
        } else {
            console.log("Cannot perform modulo by zero");
        }
        break;
    default:
        console.log("Invalid operation");
        break
}


week=+prompt("Enter a week number (1-7):");
switch (week){
    case 1:
        console.log("Monday");
        break;              
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;          
    case 4:
        console.log("Thursday");
        break;  
    case 5:
        console.log("Friday");
        break;  
    case 6:
        console.log("Saturday");
        break;  
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid number. Please enter a number between 1 and 7.");
        break;
}


