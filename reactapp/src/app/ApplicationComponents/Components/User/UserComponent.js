import React, {Component, Fragment} from "react";


export default class User extends Component {
    constructor(props, context) {
        super(props);

        //initializing the state from store (userReducer)
        this.state = {
            userName: props.user.userName,
            password: props.user.password,
            street: props.user.street,
            mobile: props.user.mobile
        }
    }

    onTextChange = (event) => {
        let target = event.target;
        let classList = target.classList;
        let value = target.value;

        if(classList.contains("username")) {
            this.setState( {
                userName: value
            })
        }
        else if (classList.contains("pass")) {
            this.setState({
                password : value
            })
        } else if(classList.contains("street")){
            this.setState({
                street: value
            })
        } else if (classList.contains("mobile") && value.length <= 11) {
            this.setState({
                mobile: value
            })    
        }


        event.preventDefault();

    }

    loginUser = () => {
        // alert(JSON.stringify(this.state));
        // this.props.addUser(this.state);

        this.props.loginUser(this.state);
    }
    
    render() {
        return(
            <Fragment>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>User Name</b>
                            <input type="text" className="form-control col-md-6 username" value={this.state.userName}
                            placeholder="enter user name" onChange={this.onTextChange} maxLength={40}/>
                        </div>    
                        <div className="col-md-12">
                            <b>Password</b>
                            <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                            placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
                        </div>
                        <div className="col-md-12">
                            <b>Street </b>
                            <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                            placeholder="Street Name" onChange={this.onTextChange} />
                        </div> 
                        <div className="col-md-12">
                            <b>Mobile </b>
                            <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                            placeholder="Mobile" maxLength="11" onChange={this.onTextChange} />
                        </div>              

                        <input type="button" className={"btn btn-primary col-md-2 saveUser"} value={"SignIn-Up"} onClick={this.loginUser}/>   

                    </div>
                </section>
            </Fragment>
        )
    }
}