import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

let Header = (props) => {
    return( //return can only return one single parent (in this case, it is the <div>) 
    //by using Fragment, the restriction that we can only use single parent is kept
        <Fragment> 
        <div className="extraDiv"> 
            <h1>{props.header}</h1>
            <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
            <NavLink to="/about" className="button" activeClassName="success" >About </NavLink> 
            <NavLink to="/funcTest" className="button" activeClassName="success" >funcTest </NavLink> 
            {/* <h1> {props.name} - props test, Header component</h1>
            {props.children[0]}
            {props.children[1]} */}
        </div>
        </Fragment>
    )
}

// Header.defaultProps = {
//     header: 0
// }

Header.propTyeps = {
    header: PropTypes.string.isRequired
}

export default Header; //this is the value that will get assigned 



//named export 
export function Footer(props){
    return(
        <Fragment >
            <h1> Footer Component</h1>
        </Fragment>
    )
};

export const pi = 3.141;