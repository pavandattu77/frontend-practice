/*function fun1(){
    console.log("Welcome to fun1")
    console.log("fun1 Ended")
}
function fun2(){
    console.log("fun2 Started")
    let start=Date.now();
    console.log(start);
    let delay=5000;
    let end=start+delay;
    while(Date.now() <=end){

    }
    console.log("fun2 Ended")
}
function fun3(){
    console.log("fun3 started")
    console.log("fun3 ended")
}

function fun4(){
    console.log("fun4 started")
    console.log("fun4 ended")
}
fun1();
setTimeout(fun2,3000);
fun3();
setTimeout(fun4,2000);

// setTimeout(callbackfn,delay)*/

function fun(){
    console.log("fectching info........")

}

let intervalid=setInterval(fun,2000);
setTimeout(()=>clearInterval(intervalid),20000)
