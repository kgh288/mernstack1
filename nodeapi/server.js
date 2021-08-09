console.log("Server.js starts (this is the entry point of my web server)")

// const { response, Router } = require('express');
let express = require('express')
let app = express();
let port = 9090;
let router = require("./route/router")
let userRouter = require("./route/userrouter");
let productRouter = require("./route/prodRouter");
let cartRouter = require("./route/cartRouter");
let recentOrdersRouter = require("./route/recentOrdersRouter");

let cors = require("cors");// middleware to set cross origin resource sharing
let bodyParser = require("body-parser"); // a middle ware used to set the data coming in body of the post request

app.use(cors());//setting this cors at global level so that each api can be accessed by other port
app.use(bodyParser.urlencoded({extended:false})); //middle-ware 
app.use('/static', express.static('public'));

app.use(bodyParser.json({limit:'2mb', extended:false})); //json middle-ware

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/recentorders", recentOrdersRouter);
app.use('/', router);


app.listen(port)
console.log(`Express server is started on port ${port}`);