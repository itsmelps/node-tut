const fs = require("fs")

//Callback hell

fs.readFile("./content/first.txt", "utf8", (err,res)=>{
    if(err){
        console.log(`The error is ${err}`)
        return;
    }
    const first = res;
    console.log(first)
    fs.readFile("./content/second.txt", "utf8", (err,res)=>{
        if(err){
            console.log(`The error is ${err}`)
            return;
        }
        const second = res;
        console.log(second)
        fs.writeFile("./content/result-async.txt",`The result is ${first}, ${second}`,(err,res)=>{
            if(err){
                console.log(`The error is ${err}`)
                return;
            }
            console.log("Completed the task")
        })
    })
})
console.log("Starting a new task")