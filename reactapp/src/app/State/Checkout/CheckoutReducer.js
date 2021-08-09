// reducers are used to generate new state on the basis of action raised
// no surprises just simple calculation

import * as ActionTypes from "../actiontypes";

let INITIAL_STATE = {
    // readOnly: false,
    // isPaid: false
}

let checkoutReducer = (previousState = INITIAL_STATE, action) => {
        
    switch (action.type) {        

        default:
            return previousState;
    }
}

export default checkoutReducer;