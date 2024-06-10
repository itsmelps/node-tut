const path = require("path")

console.log(path.sep)   //This is specific to my system

filePath = path.join("\\content", "subfolder", "test.txt")   //returns the normalised path
console.log(filePath)

//To get the base file of a Path
const baseFile = path.basename(filePath)
console.log(baseFile)

//To get the absolute path to a file
const absolute = path.resolve(__dirname,"content","subfolder","test.txt")
console.log(absolute)
