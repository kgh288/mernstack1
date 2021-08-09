import * as ActionTypes from "../actiontypes";

let INITIAL_STATE = [];

let recentOrdersReducer = (previousState = INITIAL_STATE, action) => {
        
    switch (action.type) {    

        case ActionTypes.ADD_RECENTORDERS:
            return [...previousState, action.payload.recentOrder];
        case ActionTypes.EMPTY_RECENTORDERS:
            return [];
        case ActionTypes.REMOVE_RECENTORDERS:
            return previousState.filter(order => order._id!=action.payload.id);

        // case ActionTypes.UPDATE_RECENTORDERS:
        //     return previousState;
        //     // return state.map(item => {
        //     //                 if(item._id==action.payload.id){
        //     //                     return {...item, qty:action.payload.qty}
        //     //                 }
        //     //             return item;
        //     //             })
        default:
            return previousState;
    }
}

export default recentOrdersReducer;

// (should have userid, order, dateTime)