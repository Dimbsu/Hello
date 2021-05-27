const os = require('os')
const path = require('path')
const serve = require('serve-index')
var fs = require('fs-extra')
var alert = require('alert')
var home = os.homedir()
var http = require('http')
const express = require('express')
const extra = require('')
var app = express()
var port = process.env.PORT || 8080


app.use('/ftp', serve('public/', { 'icons': true }))

app.get('/', function (request, response) {
    
    fs.emptyDirSync('public/test')
    response.send('this is the file page')
});

app.get('/ftp', function (request, response) {

});



app.listen(port)
// app.use(require('express').static('public'), (req, res) => {
//     let alert = require('alert');  
//     alert("message")
// })
// app.listen(port)



