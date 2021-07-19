import React from "react";

let Footer = (props)=>{ //functional component
    // props.name = "New Name";

    return(
        <div className="footer">
                © Copyright 2019 All rights reserved. &nbsp;|&nbsp; <a href="https://www.google.com" target="_blank">Company name</a> &nbsp;|&nbsp; <a href="http://www.google.com" target="_blank">google site map?</a>
                {/* {`This is footer component. Received address through props is ${props.address} and Name is ${props.name}
                ${props.user.name}
                ${props.user.pwd}
                `}

                {props.children[0]}
                {props.children[1]} */}
        </div>
     )
}

export default Footer;