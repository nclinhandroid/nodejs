// npm install express ejs --save
// npm install config --save
// npm install body-parser --save
// npm install express-session --save
var express = require("express");
var app = express();
var config = require("config");
var bodyParser = require("body-parser");
var controllers = require(__dirname + "/apps/controllers");
app.use(controllers);
app.use(bodyParser.json());
// Thiet Lap ejs vao thu muc view
app.set("views", __dirname + "/apps/views");
app.set("view engine","ejs");

// Static folder
app.use("/static", express.static(__dirname + "/public"))

var host = config.get("server.host");
var port = config.get("server.port");
app.listen(port, host, function(){
    console.log("Server is running on port ",port);
});