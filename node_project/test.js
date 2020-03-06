var express = require('express');
var app = express();

module.exports = function(req, res){
    return req.param.s;
}