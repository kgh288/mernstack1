import React, {Fragment} from "react";
import {useSelector, useDispatch } from "react-redux";
import {NavLink} from "react-router-dom";
import {updateCoupon} from "../../../state/Coupon/CouponAction"

let CouponComponent = (props) => {

    let couponNum = useSelector(state=>state.couponReducer.couponNumber);
    let dispatchCouponToSave = useDispatch();


    //generate a random coupon of 6 digits
    function generateCoupon() {
        //it doesn't generate 6 digit number between 000000-100000 //need to be fixed
        let randomNum =  Math.random() * (999999 - 100000) + 100000;
        

        dispatchCouponToSave(updateCoupon(randomNum))
    }

    return(
        <Fragment>


            <br/> 
            <p>Coupon Number: {couponNum==0 ? "-" : 
            <Fragment>
                {couponNum}
                <br/>
                Coupon generated!
            </Fragment>}</p>

            <div>
                <button onClick={() => generateCoupon()}> Generate Coupon </button>
                <NavLink to="/checkout" className="button" activeClassName="checkout" >Go back to Checkout </NavLink> 
            </div>
            
        </Fragment>
    )
}

export default CouponComponent;

// Coupon Page - 05/27/2021
// Create a component with Name - CouponComponent (Functional Component and Use Hooks)
// On the page add a Button - GenerateCoupon
// Upon Click Generate a random coupon of - 6 digits (basically a numeric random value)
// Dispatch this generated coupon using useDispatch
// Create a Coupon Reducer to have Coupon Value, Use Reducer to update the coupon value (useSelector coupon)
// Create action to pass coupon to reducer, with type and payload