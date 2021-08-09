import * as ActionTypes from "../ActionTypes";

import {loading} from "../Loading/LoadingAction";

export const addRecentOrders = (recentOrder)=>({
    type: ActionTypes.ADD_RECENTORDERS,
    payload: {recentOrder} 
})

export const emptyRecentOrders = () => ({
    type: ActionTypes.EMPTY_RECENTORDERS
});

export const removeRecentOrders = (id) => ({
    type: ActionTypes.REMOVE_RECENTORDERS,
    payload: id
});

export const updateRecentOrders = (id, qty) => ({
    type: ActionTypes.UPDATE_RECENTORDERS,
    payload: {
        id,
        order: Object
    }
});

export const saveItemsForRecentOrders = (userid, order) => {
    console.log("item added into recent orders", order); 
    return function(dispatch) {
        // dispatch(loading(true));
        window.fetch("http://localhost:9090/recentorders/api/saverecentorders",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, order:order, dateTime: new Date()})})
        .then (response => response.json())
        .then (recentOrdersresponse => {
            console.log("response ", recentOrdersresponse);
            // dispatch(loading(false));
            dispatch(getRecentOrders(userid));
        })
        .catch((err)=>{
            // dispatch(loading(false));
            console.log("Error While saving recent orders ", err);
        }) 
    }
}

export const getRecentOrders = (userid) => {
        
    return function(dispatch) {
        console.log("Get List Of recent orders");
        window.fetch("http://localhost:9090/recentorders/api/getrecentorders",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
        .then (response => response.json())
        .then (recentOrdersResponse => {
            console.log("response - get recent orders ", recentOrdersResponse);
            
            dispatch(emptyRecentOrders());

            for (const order of recentOrdersResponse) {
                console.log("Recent Order adding: ------------------", order);
                let action = addRecentOrders(order);
                dispatch(action);    
            }                
                       
        })
        .catch((err)=>{
            console.log("Error While RecentOrder", err)
        })  
    }       
}

