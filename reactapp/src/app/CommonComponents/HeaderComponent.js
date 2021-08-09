import React, {Fragment, useEffect} from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";


let Header = (props) => {
    // let userName = props.user && props.user.userName ? props.user.userName : "";
    
    let isLoggedIn = props.user && !props.user.userName=="";

    let userName ="";
    let navlinkArr = [];
    let loggedOutNavLinkArr = [];
    let loggedInNavLinkArr = [];

    function setLoggedOutLinks() {
        loggedOutNavLinkArr.push(<NavLink to="/home" className="button" activeClassName="success" >Home </NavLink>);
        loggedOutNavLinkArr.push(<NavLink to="/user" className="button" activeClassName="success" > Sign in </NavLink>)
        loggedOutNavLinkArr.push(<NavLink to="/about" className="button" activeClassName="success" >About </NavLink>)
        navlinkArr = loggedOutNavLinkArr;
    }
    function setLoggedInLinks() {
        loggedInNavLinkArr.push(<NavLink to="/home" className="button" activeClassName="success" >Home </NavLink>);
        loggedInNavLinkArr.push(<NavLink to="/user" className="button" activeClassName="success" > User </NavLink>)
        loggedInNavLinkArr.push(<NavLink to="/about" className="button" activeClassName="success" >About </NavLink>)
        loggedInNavLinkArr.push(<NavLink to="/product" className="button" activeClassName="success" >Product</NavLink>);
        loggedInNavLinkArr.push(<NavLink to="/cart" className="button" activeClassName="success" >Cart </NavLink>);
        loggedInNavLinkArr.push(<NavLink to="/coupon" className="button" activeClassName="success" >Coupon </NavLink>);
        loggedInNavLinkArr.push(<NavLink to="/checkout" className="button" activeClassName="success" >Checkout </NavLink>);
        loggedInNavLinkArr.push(<NavLink to="/recentorders" className="button" activeClassName="success" >Recent Orders </NavLink>);
        loggedInNavLinkArr.push(<NavLink to="/userhook" className="button" activeClassName="success" >UserHook </NavLink>) 
        loggedInNavLinkArr.push(<NavLink to="/funcTest" className="button" activeClassName="success" >funcTest </NavLink>) 
        loggedInNavLinkArr.push(<NavLink to="/secondhome" className="button" activeClassName="success" >second Home </NavLink>) 
        loggedInNavLinkArr.push(<NavLink to="/seconduserhook" className="button" activeClassName="success" >second user hook</NavLink>)
        
        navlinkArr = loggedInNavLinkArr;
    }
    
    if(isLoggedIn) {
        userName = props.user.userName;
        console.log(userName + " logged In");
        setLoggedInLinks();
    }
    else {
        console.log("not logged in");
        setLoggedOutLinks();
    }


    return( //return can only return one single parent (in this case, it is the <div>) 
    //by using Fragment, the restriction that we can only use single parent is kept
        <Fragment> 
            <br/><br/>
            {navlinkArr}
            <br/><br/>
        </Fragment>
    )
}

Header.defaultProps = {
    header: "-----Default Header slot------"
}

Header.propTypes = {
    header: PropTypes.string.isRequired
}





//named export 
// export function Footer(props){
//     return(
//         <Fragment >
//             <h1> Footer Component</h1>
//         </Fragment>
//     )
// };

// export const pi = 3.141;


// export default Header; //this is the value that will get assigned 



//mapStateToProps : to make your component able to read data from store (subscriber)
let mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        checkout: state.checkoutReducer
        }
}


export default connect(mapStateToProps, null)(Header);





//backups
// return( //return can only return one single parent (in this case, it is the <div>) 
// //by using Fragment, the restriction that we can only use single parent is kept
//     <Fragment> 
//     <p>Welcome {userName}</p>
//     <div> 
        

//         {/* <h1>{props.header}</h1> */}
//         <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
//         <NavLink to="/user" className="button" activeClassName="success" >User </NavLink> 
//         <NavLink to="/userhook" className="button" activeClassName="success" >UserHook </NavLink> 
//         <NavLink to="/about" className="button" activeClassName="success" >About </NavLink> 
//         <NavLink to="/funcTest" className="button" activeClassName="success" >funcTest </NavLink> 
//         <NavLink to="/secondhome" className="button" activeClassName="success" >second Home </NavLink> 
//         <NavLink to="/seconduserhook" className="button" activeClassName="success" >second user hook</NavLink> 
//         <NavLink to="/product" className="button" activeClassName="success" >Product</NavLink>
//         {navlinks}
//         {/* <h1> {props.name} - props test, Header component</h1>
//         {props.children[0]}
//         {props.children[1]} */}
//     </div>
//     </Fragment>
// )
// }