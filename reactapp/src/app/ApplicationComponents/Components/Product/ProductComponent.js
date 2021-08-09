import React, {useRef, useEffect, useState, Fragment}from "react";
import {useSelector, useDispatch} from "react-redux";
import { saveProduct} from "../../../State/Product/ProductAction";

import DisplayProduct from "./DisplayProductComponent";

let ProductComponent = (props) => {

    //initializes the name and returns a callback to save name on state change
    const [name, setName] = useState("Product Name");
   
    // this can be used at the event where we want to update the value when user make some change
    //setName("Updated Value") 
    const [price, setPrice] = useState(0);
    const [desc, setDescription] = useState("Product Description");
    const [rating, setRating] = useState("Product Rating");    
    
    // this.state = {
    //     name: "Product Name"
    // }

    const saveProductDispatch = useDispatch();

    const captureValueFromTextBoxes = (event) => {

        let target = event.target;
        let value = target.value;
        let classList = target.classList;

        if(classList.contains("pname")) {
            setName(value);
        }else if(classList.contains("price")){
            setPrice(parseInt(value))
        }else if(classList.contains("desc")){
            setDescription(value)
        }else{
            setRating(value)
        }
        event.preventDefault();
    }


    const saveProductClick = ()=>{
        let productObj = {name, price, desc, rating};

        alert("We are going to save this product - "+ JSON.stringify(productObj));

        saveProductDispatch(saveProduct(productObj))
    }


    return(
        <Fragment>
            <p>--------Product Component Start---------</p>
            <section className={"componentClass"}>
                <div className={"form col-md-8"}>
                    <div className={"col-md-12"}>
                        <b>Product Name:</b>
                        <input type="text" className="form-control col-md-6 pname" value={name} placeholder="Product name" onChange={captureValueFromTextBoxes} />

                    </div>
                    <div className="col-md-12">
                        <b>Price: </b>
                        <input type="number" className="form-control col-md-6 price" value={price} placeholder="Product Price" onChange={captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Description: </b>
                    <input type="text" className="form-control col-md-6 desc" value={desc} placeholder="Please Describe the product" onChange={captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Ratings: </b>
                    <input type="text" className="form-control col-md-6" value={rating} placeholder="Ratings" onChange={captureValueFromTextBoxes} />
                    </div>

                    <input type="button" className={"form-control btn btn-primary col-md-3"} value={"Save Product"} onClick={saveProductClick}/>

                </div>
                <br/>
                <DisplayProduct/>
            </section>
        </Fragment>
    )
}

export default ProductComponent;