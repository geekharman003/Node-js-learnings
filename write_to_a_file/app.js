const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {

  const url = req.url;
  if(url === "/"){
    res.setHeader("Content-Type","text/html");
    res.end(`
        <form action="/message" method="POST">
          <label>Name:</label>
          <input type="text" name="username">
          <button>Add</button
        </form
        `)
  }
  else if(url === "/message"){
    let body = "";
      req.on("data",(chunk)=>{
        body += chunk.toString();
    })

    req.on("end",() => {
        const params = new URLSearchParams(body);
        body = params.get("username");
        fs.writeFile("formData.txt",body,()=>{});
    })

    res.writeHead(302,{'Location':'/'});
    res.end();
  }
})

server.listen(3000,()=>{
    console.log("server is listening");
})