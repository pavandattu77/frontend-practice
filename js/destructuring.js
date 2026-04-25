// Array Desturcturing 
const numbers=[10,20,30]
const [a,b,c]=numbers
console.log(a,b,c)

//Skipping Elements
const [first,,third]=numbers
console.log(first,third)

const [,y,]=numbers
console.log(y)

//default value
const [p,q,r=100]=[1,2,]
console.log(p,q,r)

//Swapping
let s=20;
let t=30;
[s,t]=[t,s]
console.log(s)//30
console.log(t)//20

//Object Destructuring
const person={name:"john",age:25,city:"paris"}

const{name,age}=person
console.log(name,age);

const{name:fullname,city:place}=person
console.log(fullname,place);

const user={
    id:123,
    profile:{
        username:"john",
        email:"john@gmail.com"
    }
}

const{profile:{username,email}}=user
console.log(username);
console.log(email);

const{profile:{username:Name,email:mail}}=user
console.log(Name)
console.log(mail)
