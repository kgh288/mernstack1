let express = require("express");

let router = express.Router({});
let UserDataModel = require("../DataModel/UserDataModel");

//user signin signup api
router.post("/api/signinup", (req, res)=>{
    console.log("data ", req.body);

    UserDataModel.findOne({userName: req.body.userName}, (error, data)=>{
        if (error) {
            res.send("Error Occurred");
        } else if(data) { //if data returned means user is already present
            res.send(data); //data will be the user object
        } else {
            let userDataObject = new UserDataModel(req.body);

            userDataObject.save((err, newUserData)=>{ //error first callback
                if (err) {
                    res.send("Error in sign up user");
                } else {
                    res.send(newUserData); //if user gets successfully created we will get the mongodb unique id
                }
            })
        }
    });

});

router.post("/api/habit", (req, res)=>{
    console.log("data ", req.body);

    UserDataModel.findOne({userName: req.body.userName}, (error, data)=>{
        if (error) {
            res.send("Error Occurred");
        } else if(data) { //if data returned means user is already present
            res.send(data); //data will be the user object
        } else {
            let userDataObject = new UserDataModel(req.body);

            userDataObject.save((err, newUserData)=>{ //error first callback
                if (err) {
                    res.send("Error in sign up user");
                } else {
                    res.send(newUserData); //if user gets successfully created we will get the mongodb unique id
                }
            })
        }
    });

});

module.exports = router;