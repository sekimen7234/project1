var express = require('express');
var app = express();
var test = require('./test')

app.get('/', function(req, res){
    test();
    res.send('<form action="./first/first" method="get"><input type="text" name="s"><input type="submit"></form>');
})

app.get('/first/first', function(req, res){
    var res = test();
    res.send('Hello world1-1\n' + res);
})

app.get('/first/second', function(req, res){
    res.send('Hello world1-2');
})

app.get('/second', function(req, res){
    res.send('Hello world2');
})

app.get('/third', function(req, res){
    res.send('Hello world3');
})

app.listen(3000, function() {
    console.log('サーバー起動');
});