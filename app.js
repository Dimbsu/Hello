const os = require('os')
const path = require('path')
const serve = require('serve-index')
const fs = require('fs')
var alert = require('alert')
var home = os.homedir()
var http = require('http')
const express = require('express')
var app = express()
var port = process.env.PORT || 8080


app.use('/ftp', serve('public/', {'icons': true}))
app.get('/', function (request, response) {
    alert('this is test of message box')
    var deskdir = path.join(home, "Desktop", "Files")
    fs.mkdirSync(deskdir)
    response.send('this is the file page')
});


app.listen(port)
// app.use(require('express').static('public'), (req, res) => {
//     let alert = require('alert');  
//     alert("message")
// })
// app.listen(port)



