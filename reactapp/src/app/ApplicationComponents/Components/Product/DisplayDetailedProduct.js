import React, {Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../../../State/Cart/CartAction";

let DisplayDetailedProduct = (props)=>{
    let product = props.product;

    let [showDetails, showHide] = useState(false);

    let dispatchItem = useDispatch();

    let showHideDetails = (evt)=>{
        showHide(!showDetails); //toggle the value of showDetails state

        evt.preventDefault()
    }

    let addProductToCart = (product) => {        
        dispatchItem(addItemToCart(product))
        // event.preventDefault();
    }
    return(
        <Fragment>
            <ul className={"product"} >
                <li className={"product"} onClick={showHideDetails}>
                        {product.name}
                        {showDetails ?
                        <div>
                        <ul className={"productDetails"}>
                            <li>{product.price}</li>
                            <li>{product.desc}</li>
                            <li>{product.rating}</li>
                            <input type="button" className={"btn btn-primary col-md-2"} value={"Add to Cart"} onClick={()=> addProductToCart(product)}/>
                        </ul> 
                        
                        </div>
                        : ""}
                </li>
            </ul>
        </Fragment>
    )

}

export default DisplayDetailedProduct;