var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 8080;
console.log("go");
app.use(express.static(path.join(__dirname, 'dist')));
console.log("none");
app.listen(port, function() {
    console.log('Uygulama Başladı' + port);
});