const os = require('os')
const path = require('path')
const fs = require('fs')
var home = os.homedir()
var alert = require('alert')
var http = require('http')
const app = require('express')()

app.use(require('express').static('public'))
app.listen(process.env.PORT||8080)

// http.createServer(function (req, res) {
//     if (req.method=='GET' && req.url == '/') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         var deskpath = path.join(home, 'Desktop', 'downloaded')
//         alert('directory create')
//         fs.mkdirSync(deskpath)
//         res.write('Hello new app')
//         res.end();
//     }

//   }).listen(8080);

