
//create a component hook requires a hobit of user (required:true) save hobit

import React, {Fragment, useRef, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

let UserHabitHook = () => {

    const inputUserName = useRef(null);
    const inputHabit = useRef(null);
    
    const user2 = useSelector((state)=>state.userReducer.user2);

    return ( 
        <Fragment>
            <p>--------Save Habit Component Hook ------</p>
            <form className={"form col-md-10"} onSubmit={onButtonClick}>
                <label>
                    User Name:
                    <input type="text" className={"form-control col-md-12"} ref={inputUserName} placeholder="Please enter user name"/>
                </label>
                <br/>
                <label>
                    <b>Habit :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputHabit} placeholder="Please enter password"/>
                </label>

                <br/>
                <input type="submit" className={"btn btn-primary"} value="Save Habit" />
            </form>
        </Fragment>
    )
}


export default UserHabitHook;