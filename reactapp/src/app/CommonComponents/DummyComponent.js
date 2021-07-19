import React, {Fragment} from "react";



export default function Dummy(props) {

    // props.name = "new name" // not available - props must not be updated in child component (immutable)
    return (
        <Fragment> 
            <b>{props.name}</b>
            <button className={"form-control btn btn-primary col-md-2"} onClick={() => props.updateName("new name from child")}>Update Name From Child Component</button>
            {/* need to use onclick ()=> for child to parent*/}
        </Fragment>
    )
}