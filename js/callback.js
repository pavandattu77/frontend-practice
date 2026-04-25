function instagram(id,callback){
    let error;// error is undefined so false if given any value then it's true(line 14)
    setTimeout(()=>{
         if(error){
            return callback(error);
        }
        console.log("Searching for user..")
        setTimeout(()=>{
             if(error){
            return callback(error);
        }
            console.log("Fecting frndlist..")
            setTimeout(()=>{
                error="error in fecthing posts"
                 if(error){
                          return callback(error);
                     }
                console.log("fectching user posts..")
                setTimeout(()=>{
                     if(error){
            return callback(error);
        }
                    console.log("fectching user comments")
                },1000)
            },2000)
        },3000)
    },4000)
}

function ErrorHandler(error){
    console.log("Error occured")
}
instagram("121",ErrorHandler)
