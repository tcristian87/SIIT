var express = require('express');
var app = express();

app.get('/', function(request, response) {
//  response.sendFile(__dirname + '/public/index.html');
response.send("hello world")
});

app.listen(3000, function() {
    console.log("Listening on port 3000")
});