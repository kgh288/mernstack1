import React from "react";

export default function CartSummaryComponent(props) {
    let {
        count,
        amount
    } = props.summData; //destructuring //{...result} == {amount , count}

    console.log()
    //count = props.count , amount = props.amount
    return (
        <div> 
            {props.readOnly ?< h3></h3> : <h2>Cart Summary</h2>}
            <p> Amount: {amount} </p>
            <p> Count: {count} </p>
        </div>
    )     
}