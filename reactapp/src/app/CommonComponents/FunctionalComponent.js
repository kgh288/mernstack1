//one component - functional, which should have two input boxes and one button

import React from 'react';  
import {NavLink} from "react-router-dom";


let FunctionalComp = (props)=>{ //functional component

    return(
        <div className="functionalComp">
            {/* <NavLink to="/home" className="button" activeClassName="success" >Button 1 </NavLink>  */}
            input box 1: <input type="text" value="" placeholder="Please enter age"></input><br/>
            input box 2: <input type="text" value="" placeholder="Please enter age"></input><br/>
            <input type="submit" value="Submit"></input>
        </div>
     )
}

export default FunctionalComp;