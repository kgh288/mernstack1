let exprs = require("express");

let router = exprs.Router({caseSensitive:true});
let myRouter = require("./router2");
let TrainingModel = require("../DataModel/TrainingModel")

//mongodb
router.get("/training", (req, res) => {
    console.log("Query String", req.query);

    let trainingObj = new TrainingModel(req.query);
    trainingObj.save((err, data)=> {
        if(!err) {
            res.json(data);         
        }
        else
        {
            console.log("Error", err);
            res.send("Error occured");
        }
    });

})
//
//http://localhost:3000/training?sessionName=Mongoose&duration=2&instructor=somebody2&location=webex%20online



router.get("/browse", (req, res) => {
    res.send("This is router driven API")
})

router.get("/request", (req, res) => {
    console.log("request===> ", req);
    // res.json(req) //error (too large)

    res.send("request printed successfully")
})

router.get("/response", (req, res) => {

    console.log("response===> ", res);

    res.send("response printed successfully")
    // res.json(res)
    
})

router.all("/response", (request, response )=>{
    console.log("response ===> ", response )

    response.json({'response':'printed successfully'})

})

router.use('/myRoute', myRouter);

router.get("*", (req, res) => {
    
    res.send("Nothing matched to your requested route")

})



module.exports = router;