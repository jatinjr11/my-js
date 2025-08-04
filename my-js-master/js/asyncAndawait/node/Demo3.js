import http from "http";

const server = http.createServer((req,res) => {
    if(req.url === "/api"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        // res.end("This is my first server");
        // res.end(JSON.stringify({ message: "Hello from API" }));
        res.end(JSON.stringify({ message: "Hello from API", data: [1,2,3,4,5] }));
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Page not found");
    }
});

server.listen(3000, ()=> {
    console.log("server running on port 3000");
});