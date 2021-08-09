import * as ActionTypes from "../ActionTypes";

const INITIAL_STATE = []; //instead of objet in array we are directly putting array

export default function CartReducer(state = INITIAL_STATE, action) {
    // console.log("cart Reducer", state, action);
    // additem, removeitem, updateitem, emptyitem


    switch(action.type) {

        case ActionTypes.ADD_ITEM:

            //checking for duplicate item with _id
            let newState = state.filter(item => item._id != action.payload.item._id);

            //checking if quantity is present or not, if no then add default quantity to 1 else do nothing 
            !action.payload.item["qty"] ? action.payload.item["qty"] = 1 : "";

            return [...newState, action.payload.item];//creating a new state with new item
    
        //empty cart
        case ActionTypes.EMPTY_CART:
            return [];
        
        case ActionTypes.REMOVE_ITEM:
            return state.filter(item => item._id!=action.payload.id)
            
        case ActionTypes.UPDATE_ITEM:
            return state.map(item => {
                            if(item._id==action.payload.id){
                                //...item : product - name, desc, price, rating
                                return {...item, qty:action.payload.qty}
                            }
                        return item;
                        })

        default :
            return state;
    }
}