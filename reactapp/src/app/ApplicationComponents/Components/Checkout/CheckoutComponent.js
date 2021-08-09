//

import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {NavLink} from "react-router-dom";
import DisplayUserDetail from "../User/DisplayUserDetail";
import Cart from "../Cart/CartComponent";

import { saveItemsForRecentOrders} from "../../../State/RecentOrders/RecentOrdersAction"


let CheckoutComponent = (props) => {

    let user = useSelector((state)=>state.userReducer.user);
    let carts = useSelector(state=>state.cartReducer);
    const [isPaid, setIsPaid] = useState(false);
    let couponNumber = useSelector(state=>state.couponReducer.couponNumber);

    let saveToRecentOrders = useDispatch();

    let processCheckout = (user, carts) => {
        setIsPaid(true);

        saveToRecentOrders(saveItemsForRecentOrders(user._id, carts));


        
    }

    return (
        <Fragment>
            { isPaid ? 
            <Fragment>
                <h2>Payment Component</h2>
            </Fragment>
            :
            <Fragment>
                <h2>Checkout Component</h2>
            </Fragment>
            }             
            <DisplayUserDetail user={user} />
            
            { couponNumber == 0 ? 
            <Fragment>
                Please generate a coupon to apply: <NavLink to="/coupon" className="text" activeClassName="coupon" >Click here </NavLink>
            </Fragment>
            :
            <Fragment>
                <p>Coupon is applied: {couponNumber} </p> 
            </Fragment>
            }
            {isPaid ?                 
            <Fragment>
                <p>Thankyou for the payment, your items under process!</p>
            </Fragment>
            :
            <Fragment>
                <Cart readOnly = {true}></Cart>
                <button onClick={() => processCheckout(user, carts)}> Process the Purchase</button>
            </Fragment>  

            }
        </Fragment>
    )
}

export default CheckoutComponent;








// Checkout Page - 08/02/2021
// Create A functional component and use react hook or using container to read data from store
// Show - User Details (Name, address) //We will deliver products to below address kind of message as well
// Show Table of cart put up for purchase (you need to re-use the cartlist and cartitem components)
// Show the purchase Summary (total qty and total amount)
// Show a Button to Proceed to Payment
// Integrate this page on CartComponent Button (Go to checkout) 

// Second Task :
// Create a state using useState to show hide (Make Payment Message)
// Upon Clicking on MakePayment button, hide everything and just show the message - "Thankyou for the payment, your items under process!"
// Change the header from Checkout Page to Payment Page


// Upon Coupon Creation
// Use the coupon created in coupon page to show it on checkout page
// If coupon is not generated show users a link to go to Coupon Page and generated it
// If coupon is present then show that a coupon has been applied and benefits are added