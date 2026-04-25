// declaration of a object
let object1={}; //empty object
console.log(object1)

let object2={
    name:"tfd",
    age:67,
    marks:95,
    grade:"A+",
    greets:function(){
        console.log("Hello",this.name);
    }
}
console.log(object2)

let object3=new Object();// create an empty object
console.log(object3);

//accessing elements in an object
console.log(object2.name)
console.log(object2["age"]);
console.log(object2["grade"]);
console.log(object2.marks[1]);

for(x in object2){
    console.log(x) //keys
    console.log(object2[x]) //values
}

//add elements to an object
object3.colot="redrflag"
object3.length=26
console.log(object3)

object2.city="Hyd"
console.log(object2)
object2.name="pqr"

delete object2.age
console.log("name" in object2)

console.log(object3.hasOwnProperty("age"))

console.log(Object.keys(object3))
console.log(Object.values(object3))
console.log(Object.entries(object3))

object2.greets()

let a=object2;
a.city="Hyderabad"
console.log(object2)

mydata={
    fullname:"abc dfvbdf",
    age:30,
    contact:{
        mbl:5436754435676,
        email:"dthbs@gmail.com",
        place:"hyd"
    }
}

console.log(mydata.contact.mbl)
console.log(mydata.contact["email"])
console.log(mydata["contact"]["place"])
