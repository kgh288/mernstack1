let express = require("express");
let router = express.Router({});
let CartDataModel = require("../DataModel/CartDataModel");

//cart api's
router.post("/api/saveUserCart",(req, res)=>{

    CartDataModel.findOne({userid: req.body.userid},(err, cartDbObj) => {
        if (err){
            console.log("got an error!");            
            res.send(err);
        }

        if (!cartDbObj) { //checks for null cart of given user
          console.log("No cartitems Present, Adding / Inserting!"); 
          let cartObj = new CartDataModel(req.body);
          cartObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }else{ //update the cart for given user
          console.log("CartItems Present, Replacing / Updating!");
          cartDbObj.cart = req.body.cart;
          
          cartDbObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred while cartitem update"+ err);
            }    
            setTimeout(()=>{
                res.json(data);
            },2000)  
            
          });
        }
  });
});


router.post("/api/getUserCart",(req, res)=>{
    CartDataModel.findOne({userid: req.body.userid},(err, cart) => {         
        if (err) {
            res.send("Error Occurred (getUserCart) "+ err);
        }      
        res.json(cart);
      });
});

module.exports = router;