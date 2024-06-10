//synchronous

const fs = require("fs")
// console.log(fs)
console.log("Start")

const first = fs.readFileSync("./content/first.txt","utf8")
const second = fs.readFileSync("./content/second.txt","utf8")

console.log(first,second)

//creates a new file if file by that name is not present, otherwise overwrites it
fs.writeFileSync("./content/result-sync.txt",
    `Here is the result ${first},${second}`)
 
//If we wanted append something instead:

fs.writeFileSync("./content/result-sync.txt","This is the new text",
    {flag : "a"}
)

console.log("Ending the first task")
console.log("Starting the new task")