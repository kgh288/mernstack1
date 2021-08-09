//this will contain all the actions that are going to be raised by action creators on user page
//action is an object that contains - type (action type) and payload (the data to be passed to store)
import * as ActionTypes from "../ActionTypes";
import { getUserCart } from "../Cart/CartAction";
import { getRecentOrders } from "../RecentOrders/RecentOrdersAction";

//action that would be dispatched to the store (eventually to reducer)
export const addUserToStore = (user) => ({        
    type: ActionTypes.AddUserToStore,
    payload: {user}
})

export const addhabitToStore = (habit) => ({        
    type: ActionTypes.addhabitToStore,
    payload: {habit}
})


export const signinUpuser = (userObject) => {
    // thunk, returns function as an action
    return function(dispatch, getState) {
        // here we go with ajax call : to save data to the server or fetch is from the server
        // thunk shall call
        console.log("called by thunk");
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/user/api/signinup",//uri or end point of singninup api
                {
                    method: 'POST', //rest method type to save the data
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userObject)
                })
            .then(response => response.json())//response from the server/ api
            .then(userresp => {
                console.log("response ", userresp); // this response will come with _id
                
                let action = addUserToStore(userresp);
                dispatch(action); // it will keep the current context to update the user object and takes it to the reducer
                
                //dispatch(loading(false));
                dispatch(getUserCart(userresp._id));

                dispatch(getRecentOrders(userresp._id));
            })
            .catch((err)=>{
                console.log("Error While Login - (UserAction)", err)
            });
    }
}

export const saveHabit = (hobitObj) => {
    return function(dispatch, getState) {

        console.log("saveHabit function started");
        window.fetch("http://localhost:9090/user/api/habit", 
            {
                method: 'POST', //rest method type to save the data
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObject)
            })
        .then(res => res.json())
        .then(userres => {
            console.log("response: ", userres);
            let action = addhabitToStore(userres);
            dispatch(action);
        })
        .catch((err) => {
            console.log("error while saving Hobit");
        })

    }
}