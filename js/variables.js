var a;
console.log(a);
a = 10
console.log(a);
console.log(typeof a)
a="hello";
console.log(a)
console.log(typeof a);     
let b=90
console.log(b);
b = true
console.log(typeof b);
b = null
console.log(b);
console.log(typeof b);

const c = 200;
console.log(c);
//c = 300; // This will throw an error because 'c' is a constant and cannot be reassigned.
console.log(c);
// And after this error, the code will not execute further.
// console.log(c); // This line will not execute due to the error above.

let array = [1, 2, 3, 4, 5];
console.log(array);
console.log(typeof array);
console.log(array.length);
array[0] = 10;  
console.log(array[0]);

let object = {name: "John", rollno: 101, age: 20};
console.log(object);
console.log(typeof object);
console.log(object.name);

let n=+prompt("Enter a number");
console.log(n);
console.log(typeof n);