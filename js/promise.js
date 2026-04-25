// //callback function is mandatory
// let prom=new Promise((resolve,reject)=>{
//     // resolve({name:"brfgt",age:23});
//     // reject("error");
//     resolve("fulfill");
// });
// console.log(prom)
// //pending, fulfilled, unfulfilled states

// prom
// .then((result)=>{
//     console.log("success")
//     console.log(result)
// })
// .catch(()=>console.log("faliure"))


// let prom1=new Promise(
//     function fun1(resolve,reject){
//         console.log("fun1 started");
//         setTimeout(()=>{
//             console.log("fun1 completed")
//             // resolve();
//             reject();
//         },2000)
//     }
// );

// prom1.then(()=>{
//     console.log("promise successful")
// })
// .catch(()=>{
//     console.log("promise failure")
// });

function fun2(){
    return new Promise((resolve,reject)=>{
        console.log("fun2 started")
        setTimeout(()=>{
            console.log("fun2 ended")
            resolve();
        },3000)
    }
)
}
function fun3(){
    return new Promise((resolve,reject)=>{
        console.log("fun3 started")
        setTimeout(()=>{
            console.log("fun3 ended")
            resolve()
        },2000)
    }
)
}

function fun4(){
    return new Promise((resolve,reject)=>{
        console.log("fun4 started")
        setTimeout(()=>{
            console.log("fun4 ended")
        },2000)
    }
)
}
// fun2()
// .then(fun3)
// .then(fun4)
// .then(()=>console.log("all funs are successfully executed"))
// .catch(()=>{
//     console.log("failure")
// })
async function run(){
//     try{
//     await fun2();
//     console.log("Promise fulfilled")
// }
// catch{
//     console.log("failure")
// }
// }
// run();
    try{
        await fun2();
        await fun3();
        await fun4();
        console.log("all funs are successful")
    }
    catch{
        console.log("failure")
    }
}
run();