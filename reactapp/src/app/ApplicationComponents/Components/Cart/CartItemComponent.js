import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../../State/Cart/CartAction";

let CartItemComponent = (props) => {

    let item = props.item;
    let [qty, setQty] = useState(item.qty);

    let dispatchToRemove = useDispatch();
    let dispatchToUpdate = useDispatch();

    
    let removeItemFromCart = ( productid )=>{
        dispatchToRemove(removeItem(productid))
    }

    let updateItemFromCart = ( productid, qty )=>{
        dispatchToUpdate(updateItem(productid, qty))
    }



    return(
        <Fragment>
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>

            <td>{item.desc}</td>
            <td>{item.rating}</td>
            <td>{!props.readOnly ? 
                    <input type={"number"} value={qty} 
                    onChange={(evt)=>{setQty(evt.target.value)}} 
                    maxLength={"2"}/>
                : 
                    item.qty}
            </td>
            <td>{item.price*item.qty}</td>
                {props.readOnly ?"" :
                        <td>
                            <button onClick={()=>removeItemFromCart(item._id)}>
                                Remove
                            </button>
                        </td>
                }
                {props.readOnly ?"" :
                    <td>
                        <button onClick={() => updateItemFromCart(item._id, qty)}>
                            Update
                        </button>
                    </td>
                }
        </tr>
        </Fragment>
    )
}

export default CartItemComponent;