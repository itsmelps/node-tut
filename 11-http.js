const http = require("http")

//Request and response are objects
const server = http.createServer((request, response)=>{
    // console.log(request)
    if(request.url === "/"){
        response.write("Welcome to our Home Page!")
        response.end()
    }
    else if(request.url === "/about"){
        response.end("Here is some basic info about us!")
    }
    else{response.end(`<h1>Oops!</h1>
                    <p>You have navigated to the wrong page :(</p>
                    <a href="/">Click here to go back HOME</a>`)
    }
})

server.listen(5000)