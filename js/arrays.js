// let colors=["red","green","blue","yellow","orange"];
// console.log(colors)

// let fruits=new Array("apple","banana","mango","grapes");
// console.log(fruits)

// console.log(colors[2])
// fruits[4]="kiwi";
// console.log(fruits)
// console.log(fruits[2])
// colors[3]="purple";
// console.log(colors)

// fruits.length
// console.log(fruits.length)
// console.log(fruits[fruits.length-1])
// console.log(fruits[fruits.length-2])

// colors[90]="pink";
// console.log(colors)

// fruits.push("peach");
// console.log(fruits)

// fruits.pop();
// console.log("A element had been removed:")
// console.log(fruits)

// fruits.unshift("strawberry");
// console.log("A element had been added at the beginning:")
// console.log(fruits)

// console.log("A element had been removed from the beginning:"+fruits.shift())   
// console.log(fruits)

// console.log(fruits.at(-3))

// delete fruits[3]
// console.log(fruits)

// console.log(fruits.toString())

// console.log(fruits.join("/"))
// console.log(fruits.join("."))

// console.log(fruits.indexOf("kiwi"))
// console.log(fruits.indexOf("orange"))
// fruits.push("kiwi")
// console.log(fruits)
// console.log(fruits.indexOf("kiwi"))
// console.log(fruits.lastIndexOf("kiwi"))

// let combine=fruits.concat(colors)
// console.log(combine)

// console.log(fruits.slice(1,8))
// fruits.splice(2,0,"orange")
// // splice(index ,   no of elements to be removed ,   extra element or new element)
// console.log(fruits)
// fruits.splice(5,1)
// console.log(fruits)
// console.log(colors)
// colors.splice(0,2,"brown","grey")
// console.log(colors)

// let num=[[1,2],[3,4],[5,6]]
// console.log(num)
// console.log(num.flat())

// console.log(fruits.includes("orange"))
// console.log(fruits.includes("avocado"))

// console.log(fruits.sort())

// console.log(fruits.reverse())

/*
foreach()---this method is used to iterate over elements 
of an array and perform a specified action on each elements.
    it doesn't return a new array, it applies the 
    callback function to each element in the original array
    */
/*array.foreach(function
         fnName(value,index,array){
    });
array.foreach(fnName)*/

let salaries=[20000,400000,35000]
salaries.forEach(increment)
console.log(salaries)

function increment(salary,index){
    let inc=salary/10;
    salaries[index]=salary+inc;
    return salaries
}

let flavours=["chocolate","vanilla","grape"]
flavours.forEach(add)
console.log(flavours)

function add(flavou,index){
    let str="A";
    flavours[index]=flavou+str;
    return flavours
}


let rents=[20000,400000,35000]
rents.forEach(increments)
console.log(rents)

function increments(rent,index){
    let inc=rent/5;
    rents[index]=rent-inc;
    return rents
}

/* map() method: used to iterate over each element of an array and 
create a new array with the results of applying callback function to each element.*/

let a=[6,5,45,45,45]
let b=a.map(test)
console.log(a)
console.log(b)

function test(value){
    let c=value*4;
    return c
}

let c=[6,5,45,45,45]
let d=a.map(test1)
console.log(c)
console.log(d)

function test1(value){
    let e=value*value;
    return e
}

let array=[43,4353,45,3,32,54,56,523,5]
let array2=array.filter(test2)
console.log(array)
console.log(array2)

function test2(value){
    return value>155
}

let array1=[43,4353,45,3,32,54,56,523,5]
let array21=array1.filter(test21)
console.log(array1)
console.log(array21)

function test21(value){
    return value%2===0
}

let color=["red","blue","pink"]
for(x in color){//indexes of value
    console.log(x)
}
for(y of color){// values in indexes
    console.log(y)
}
