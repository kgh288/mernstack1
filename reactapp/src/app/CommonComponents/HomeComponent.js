import React, {Component} from "react";
import PropTypes from "prop-types";
import Dummy from "./DummyComponent";

export default class Home extends Component {
    
    constructor(props) {
        super(props); //super is mandatory to override if we implement 

        this.state = {
            name: "old name"
        }
    }
    updateNameEvent = () => {

        this.setState( {
            name: "new name"
        })
    }

    updateNameAsCallBack = (name) => {
        this.setState( {
            name: name
        }) 
    }
    changeNameOnType = (event) => {
        //event : is the javascript object of html element, that has all details like who invoked this event
        let target = event.target;
        let value = target.value;
        console.log(value);
        this.setState({
            name:value
        })
    }

    render(){

        return(
            <div className={"loadimage form"} style={{backgroundImage: "url(/images/hm_pic4.jpg)"}}>
            
                {/* <h1>{this.props.header}</h1> */}
                    {/* <img src={"./images/hm_pic4.jpg"} /> */}
                    {/* {this.state.Title} */}
                    <b className="feature">{"Below Feature's We've Implemented in our project :"}</b>
                    <ul>                     
                        <li>Sign up new users</li>
                        <li>Login existing users.</li>
                        <li>Add products/items to create product collection.</li>
                        <li>Allow user's to add to cart.</li>
                        <li>Save the user's cart.</li>
                        <li>Checkout and pay for items.</li>
                        <li>Allow users to cancel the order.</li>
                        <li>Allow users to reorder the cart.</li>
                        <li>Allow users to give ratings to each product.</li>
                        <li>Have notifications on top right with logout.</li>
                    </ul>
                    
                    {/* <label>
                    Address:
                         <input type="text" ref={this.inputAddress} placeholder="Please enter age"/>
                     </label> */}
                    <button className={"form-control btn btn-primary col-md-2"} onClick={()=> this.props.history.push("/about/2500")}>GoTo About Page</button>
                    
                    {/*<button className={"form-control btn btn-primary col-md-2"} onClick={()=> this.props.history.push("/userhook")}>GoTo User Hooks</button>
                      */}
                    {/* <img  src="/images/hm_pic4.jpg"/> */}
                    
                    <input type="text" placeholder="please enter your name" value={this.state.name} onChange={this.changeNameOnType}></input><br/>

                    <button className={"form-control btn btn-primary col-md-2"} onClick={this.updateNameEvent}>Update Name</button>
                    <Dummy name = {this.state.name} updateName = {this.updateNameAsCallBack}></Dummy><br/><br/>
                </div>
        )
    }

}

Home.defaultProps = {
    counter : 0
}

Home.propTypes = {
    counter: PropTypes.number.isRequired
}