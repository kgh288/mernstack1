console.log("Server.js starts (this is the entry point of my web server)")

// const { response, Router } = require('express');
let express = require('express')
let app = express();
let port = 3000;
let router = require("./route/router")







app.use('/static', express.static('public'));
app.use('/', router);


app.listen(port)
console.log(`Express server is started on port ${port}`);