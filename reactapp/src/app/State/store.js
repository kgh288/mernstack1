//only one store is allowed in one applicaiton, applications data model,
//one reducer per store so we need to combine if multilpe reducers are there
//store sends notification to view for change of state
// this allows to inject middlewares like thunk, promise in application 

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import userReducer from "./User/UserReducer";
import productReducer from "./Product/ProductReducer";
import cartReducer from "./Cart/CartReducer";
import loadingReducer from "./Loading/LoadingReducer";
import checkoutReducer from "./Checkout/CheckoutReducer";
import couponReducer from "./Coupon/CouponReducer";
import recentOrdersReducer from "./RecentOrders/RecentOrdersReducer";

let logger = () => (next) => (action) => {
    //currying in javasript where we pass function as input and receive function as output
    console.log("Logged Action : Store File ", action); 

    next(action); //move to the actual execution
};

export default createStore(
    combineReducers({
        userReducer, //short-hand ->  used to replace userReducer : userReducer with only - userReducer
        productReducer,
        cartReducer,
        loadingReducer,
        checkoutReducer,
        couponReducer,
        recentOrdersReducer
    }),
    {}, //intial state for store states
    applyMiddleware(logger, thunk, promise) //middle wares tp used at various places like action.js
)