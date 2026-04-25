// rest it allows a fucntion to accept an indefinite number of arguments as an array .
// The rest is denoted by three dots(...arrayName)
function sum(...numbers){
    let total=0;
    for(let num of numbers){
        total+=num
    }
    return total;
}
console.log(sum(1,2,3,2,4,43,5,3,5,3,5,3,5,3,5));

function greets(greeting,...names){
    for(let name of names){
        console.log(greeting,name)
    }
}
greets("Hello","abcd","wxyz")