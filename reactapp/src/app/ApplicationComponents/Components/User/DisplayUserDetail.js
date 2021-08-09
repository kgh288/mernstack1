import React, {Fragment, useState } from "react";

let DisplayUserDetail = (props)=> {

    let user = props.user;

    return (
        <Fragment>
            <div>
                <ul>
                    <li>User name: {user.userName}</li>
                    <li>User Address: {user.street}</li>
                </ul>
            </div>
            
        
        </Fragment>
    )

}

export default DisplayUserDetail;