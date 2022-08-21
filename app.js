const http = require("http");
const fs = require('fs');
// http.createServer().listen(3000);

http
  .createServer(function (request, response) {
    // response.end('hello my first server on Node');
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]);
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url == "/") {
      response.end("mail");
    } else if (request.url == "/cat") {
      response.end("Category <h2> Hello<h2> привет мир");
    } else if (request.url == "/dat") {
      let myFile = fs.readFileSync('.1.dat');
      console.log(myFile);
      response.end(myFile);
    }
    //
    //     console.log(http.request.headers['user-agent']);
  })
  .listen(3000);
