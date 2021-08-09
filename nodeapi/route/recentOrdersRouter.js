let express = require("express");
let router = express.Router({});
let RecentOrdersDataModel = require("../DataModel/RecentOrdersDataModel");

// recent orders' api's
router.post("/api/saverecentorders",(req, res)=>{

    RecentOrdersDataModel.findOne({userid: req.body.userid},(err, recentOrderDbObj) => {
        if (err){
            console.log("got an error!");            
            res.send(err);
        }
        let recentOrderObj = new RecentOrdersDataModel(req.body);
        recentOrderObj.save((err, data, next)=>{        
          if (err) {
              res.send("Error Occurred"+ err);
          }      
          res.json(data);
        });
      
  });
});

router.post("/api/getrecentorders", (req, res)=>{
  
    console.log("getting recent order in api...");
    
    //findOne or find ???

    RecentOrdersDataModel.find({userid: req.body.userid},(err, recentOrders) => {         
        if (err) {
            res.send("Error Occurred"+ err);
        }      
        res.json(recentOrders);
      });
});

router.post("/api/deleterecentorder", (req, res) => {

    console.log("deleting recent order in api...");

    RecentOrdersDataModel.findOneAndDelete({userid: req.body.userid}, (err, recentOrders) => {
        if(err) {
            res.send("Error occured (delete recent order in api)" +err);
        }
        res.json(recentOrders);
    })
})



module.exports = router;