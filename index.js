const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=Chandigarh&appid=40cc33ed0a05d410e8f1db7a7a9bfc24"
    )
      .on("data", (chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        console.log(arrData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end("end");
      });
  } else {
    res.end("File not found");
  }
});

server.listen(8000, "127.0.0.1");
