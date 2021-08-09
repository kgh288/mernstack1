import * as ActionTypes from "../actiontypes";

let INITIAL_STATE = {
    couponNumber: 0
}

let couponReducer = (previousState = INITIAL_STATE, action) => {
        
    switch (action.type) {        
        case ActionTypes.UPDATE_COUPON: {
            console.log("Coupon generated: ", action.payload);
            return {...previousState, couponNumber:action.payload};
        }
        default:
            return previousState;
    }
}

export default couponReducer;