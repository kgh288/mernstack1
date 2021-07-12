

console.log("Server.js starts (this is the entry point of my web server)")

const { response } = require('express');
let express = require('express')
let app = express()

let adminApp = express(); //this app will serve the request that comes to /admin route

let port = 3000;


//ex) http://localhost:3000/static/GreetUser.js
app.use('/static', express.static('public')); 


let pathMyName = "/Luke"
app.get(pathMyName, function (req, res) {
    res.send(`path: ${pathMyName}`)
})

let pathUser = "/user";
let user = { 
    name: 'user name',
    password: 'password',
    age: '123',
}

app.get(pathUser, function (req, res) {
    res.send(`path: ${pathUser} <br/> user: ${JSON.stringify(user)}`);
})

app.get('/html', function (req, res) {
    res.sendFile(__dirname+"/index.html")
})

//__dirname, __filename

app.get("/queryparam", function (req, res) {
    console.log("Query object: ", req.query)
    res.json(req.query);
})
//
//localhost:3000/queryparam?name=luke&age=123&address=first%20lake%20city

app.get("/routeparam/:id/details", function (req, res) {
    console.log("route param: ", req.params["id"])
    res.json(req.params["id"]);
})
//
//http://localhost:3000/routeparam/2021
//http://localhost:3000/routeparam/2021/details


//path mounted to serve the request from the other concurrent express application
app.use('/admin', adminApp);

//http://localhost:3000/admin/hello
adminApp.get("/hello", (req, res) => {
    res.send("Hello admin")
})

app.get('/', function (req, res) {
    res.send('Hello World - MERNStack')
})

//nothing matched
app.get('*', function (req, res) {
    res.send("Nothing matched to route you\'ve given")
})

app.listen(port)


console.log(`Express server is started on port ${port}`);

//