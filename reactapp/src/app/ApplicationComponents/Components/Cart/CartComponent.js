import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItemComponent from "./CartItemComponent";
import CartSummary from "./CartSummary";

import { saveItemsForCheckout } from "../../../State/Cart/CartAction";
import {removeRecentOrders} from "../../../State/RecentOrders/RecentOrdersAction";

let CartComponent = (props) => {
    
    let RecentOrder = props.recentOrder;
    let CartList = RecentOrder ? props.recentOrder.order : useSelector((state)=>state.cartReducer);
    
    console.log("Test1-----------------------", RecentOrder);
    // if(props.recentOrder) {
    //     console.log("test------", props.recentOrder);
    // }

    let user = useSelector((state)=>state.userReducer.user);
    let loading = useSelector((state)=>state.loadingReducer.loading);
    //console.log(CartList)
    let dispatchItemToSave = useDispatch();
    let dispatch = useDispatch();

    let clickToSaveCart = (cart, userid)=>{
        if (!userid) {
            alert("Please Login to save to your cart!")
        } else {
            dispatchItemToSave(saveItemsForCheckout(cart, userid))    
        }        
    }

    let cancelTheOrder = (id) => {
        dispatch(removeRecentOrders(id));
    }

    //to be used in cart summary component
    let recalculate = (cartItems) => {
        let amount = 0, 
            count = 0;
    
        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }
    
        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }

    return(
        <Fragment>
            {props.readOnly ? "" :
                <h2>Cart Component</h2>
            }      
            {
                CartList && CartList.length >=1 ?
                <Fragment>
                    {loading ? "We are saving your data. Please wait" :
                <Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            {
                                props.readOnly ?  "" : 
                                    <Fragment>
                                        <th>Remove</th>
                                        <th>Edit</th>
                                    </Fragment>
                            }
                            {
                                RecentOrder ? 
                                <Fragment>
                                    <th>Cancel</th>
                                </Fragment>
                                : ""
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CartList.map(item=>{
                                //return item.name
                                
                                return <CartItemComponent 
                                                item={item}
                                                key={item._id}
                                                readOnly = {props.readOnly}
                                                RecentOrder = {RecentOrder}
                                    />
                            })
                        }
                        {
                            RecentOrder ? 
                            <Fragment>
                                <button onClick={() => cancelTheOrder(RecentOrder._id)}>
                                    Cancel
                                </button>
                            </Fragment> : ""
                        } 
                    </tbody>
                </table>

                <CartSummary readOnly = {props.readOnly} summData={recalculate(CartList)}/>

                {
                    props.readOnly ? "" : 
                        <React.Fragment>
                            <button onClick={() => clickToSaveCart(CartList,user._id)} >
                                    Save For Checkout
                            </button>
                            
                            <button onClick={() => props.history.push("/checkout")} >
                                Go To Checkout
                            </button>
                        </React.Fragment> 
                }
                </Fragment>
                }
                </Fragment>
                :
                <div>{`No Items Added, Please add products from Product Component!`} </div>
            }
            
        </Fragment>
    )
}

export default CartComponent;
