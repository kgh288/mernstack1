

console.log("Server.js starts (this is the entry point of my web server)")

let express = require('express')
let app = express()
let port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World - MERNStack')
})

app.get('/test1', function (req, res) {
    res.send('Directory path = /test1')
})
  
   
app.listen(port)


console.log(`Express server is started on port ${port}`);