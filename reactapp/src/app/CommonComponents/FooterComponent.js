import React from "react";
import {connect} from "react-redux";

let Footer = (props)=>{ //functional component
    // props.name = "New Name";
    let user = props.user ? props.user : {};
    return(
        <div className="footer">
            <p><h1>{user.userName}</h1></p>
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

//mapStateToProps : to make your component able to read data from store (subscriber)
let mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

// export default Footer;
export default connect(mapStateToProps, null)(Footer);