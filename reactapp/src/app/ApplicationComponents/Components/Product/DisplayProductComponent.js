import React, {Fragment, useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

import { fetchProducts } from "../../../State/Product/ProductAction";
import DisplayDetailedProduct from "./DisplayDetailedProduct";

let DisplayProduct = (props)=>{
    
    //mapstate to props
    let products = useSelector((state)=>state.productReducer.products)

    //mapDispatchToProps
    let dispatchToGetProduct = useDispatch();

    useEffect(()=>{
        products && products.length<1 ?
            dispatchToGetProduct(fetchProducts()) : ""; //works in a callback
    },[]) //if you initialize the value it will work for one time - componentDidMount
    
    console.log("Product Display ", products);
    return(
        <Fragment>
            {products && products.length>0?
                products.map((product)=>{
                    //return product.name
                    return <DisplayDetailedProduct product={product} key={product._id}/>
                }) 
                :
                <h2>{`No Products Added So Far!`}</h2>
            }
        </Fragment>
    )
}

export default DisplayProduct;