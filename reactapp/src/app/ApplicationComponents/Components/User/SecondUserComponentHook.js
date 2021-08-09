import React, {useRef, Fragment, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import {signinUpuser} from "../../../State/User/UserAction"; //async call

let SecondUserHook = (props) => {

    const inputUserName = useRef(null);
    const inputPassword = useRef(null);
    const inputStreet = useRef(null);
    const inputMobile = useRef(null);
    

    const user = useSelector((state)=>state.userReducer.user);

    const dispatchUser = useDispatch();

    useEffect(() => {
        inputUserName.current.value = user.userName;
        inputPassword.current.value = user.password;
        inputStreet.current.value = user.street;
        inputMobile.current.value = user.mobile;
    })

    let onButtonClick = (event) => {

        let userObj = {
            userName : inputUserName.current.value,
            password : inputPassword.current.value,
            street : inputStreet.current.value,
            mobile : inputMobile.current.value,
        }
        dispatchUser(signinUpuser(userObj))
        event.preventDefault();
    }

    return(
        <Fragment>
            <form className={"form col-md-10"} onSubmit={onButtonClick}>
                <label>
                    User Name:
                    <input type="text" className={"form-control col-md-12"} ref={inputUserName} placeholder="Please enter user name"/>
                </label>
                <br/>
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} ref={inputPassword} placeholder="Please enter password"/>
                </label>
                <br/>
                <label>
                    <b>Street :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputStreet} placeholder="Please enter address"/>
                </label>
                <br/>
                <label>
                    <b>Mobile :</b>
                    <input type="number" className={"form-control col-md-12"} ref={inputMobile} placeholder="Please enter mobile" maxLength={"10"}/>
                </label>
                <br/>
                <input type="submit" className={"btn btn-primary"} value="Signin" />
            </form>
        </Fragment>

    )

}

export default SecondUserHook;