var express = require('express');
var exp = express();
var http = require("http");
exp.use(express.static(__dirname + '/'));
// exp.listen(8080);
var PORT = process.env.PORT || 8088;
http.createServer(exp).listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT);
});