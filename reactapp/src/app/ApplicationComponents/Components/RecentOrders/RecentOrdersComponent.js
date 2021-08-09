import React, {Fragment} from "react";
import { useSelector } from "react-redux";
import Cart from "../Cart/CartComponent";



let RecentOrdersComponent = (props) => {

    
    let RecentOrder = useSelector(state=>state.recentOrdersReducer);
    return(
        <Fragment>
            {
                RecentOrder.map(order=>{
                    return <Cart readOnly={true} recentOrder={order}></Cart>
                })
            } 
            
        </Fragment>
    )
}


export default RecentOrdersComponent


// Recent Orders - 08/04/2021
// Upon MakePayment Click
// Save the cart to RecentOrders collection (should have userid, order, dateTime)
// Make API to Save and Fetch from RecentOrders
// Make a component RecentOrders to Show all previous Orders of current user
// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days after that it should be marked delivered


//tasks left
//display time,
//display cancel
//order can be cancelled in 2 days only