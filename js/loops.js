 n=+prompt("Enter a number:");
 let sum=0
 for(let i=0; i<=n; i++) {
     console.log(i);
         sum += i;
 }
 console.log("Sum:", sum);



let num=+prompt("Enter a number:");
while(num != 0){
    console.log(num)
    num=+prompt("Enter a number:");
}



let cnt=9
do{
    let num=+prompt("Enter a number:");
    console.log("Enter a number:", +num);
    cnt-=1
}
while(cnt>4);


// Factorial using while loop
let fact=1;
let n1=+prompt("Enter a number:");
let i=1;
while(i<=n1){
    fact *= i;
    i++;
}
console.log("Factorial:", fact);


// Factorial using for loop
let n2=+prompt("Enter a number:");  
let fact1=1;
for(let i=1; i<=n2; i++){
    fact1 *= i;
}
console.log("Factorial:", fact1);

