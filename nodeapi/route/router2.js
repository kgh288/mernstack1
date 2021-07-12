let exprs = require("express");

let router = exprs.Router({caseSensitive:false});
let StudentModel = require("../DataModel/StudentModel")

//Path is /myRoute/.....

router.get("/path1", (req, res) => {
    res.send("this is myRoute/path1");
})

router.get("/student", (req, res) => {
    console.log("Query String", req.query);

    let StudentObj = new StudentModel(req.query);
    StudentObj.save((err, data)=> {
        if(!err) {
            console.log("data created/saved: ------ ", data);
            res.json(data);
        }
        else
        {
            console.log("Error", err);
            res.send("Error occured");
        }
    });
})
// http://localhost:3000/myRoute/student?dataID=1&time=07/09/2021


router.get("/showStudent", (req, res) => {

    StudentModel.find((err, data) => {

        console.log(data.values);
        if(!err) {
            console.log("data: ", data)
            res.json(data)
        }
        else {
            console.log(err);
            res.send("Error !!")
        }
    });
    // res.send(StudentModel.find());
})



router.get("/", (req, res) => {
    res.send("This is router driven API by router2.js file")
})

router.get("*", (req, res) => {
    
    res.send("Nothing matched to your requested route (route2)")

})

module.exports = router;