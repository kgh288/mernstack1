import React, {Component, PureComponent} from "react";
import PropTypes from "prop-types";
import Dummy from "./DummyComponent";

export default class Home extends PureComponent {
    
    constructor(props) {
        super(props); //super is mandatory to override if we implement 

        this.state = {
            name: "old name",
            address: "first address",
            age: 1
        }

        console.log("Home component constructor")

        //this.inputAddress.current.focus(); //view can't be accessed in constructor
        this.inputAddress = React.createRef(); //as we dont have any html selectors available in react so this provides a reference to html
        this.inputAge = React.createRef();
    }

    //--------------Life Cycles ----------------------
    //creation life cycle method
    componentDidMount(){
        console.log("componentDidMount")
        //view is accessible
        // setTimeout(() => {
        //     this.inputAddress.current.focus();
        //     this.inputAddress.current.value = "Added Value in Did Mount";   
            
        // }, 3000);
    }

    //destruction life cycle methods
    componentWillUnmount(){
        console.log("componentWillUnmount");
        //previous component needs to clear all subscriptions and any pending calls while navigating to other component
    }

    //update lifecycle method
    //this asks us to decide whether we need to stop calling the render method on state change
    // shouldComponentUpdate(nextState, nextProps) {
    //     console.log("shouldComponentUpdate");
    //     console.log("nextState",nextState);
    //     console.log("nextProps", nextProps);
        
    //     if (nextProps.name == this.state.name) {
    //         return false; //to not call the render method
    //     } else {
    //         return true;    
    //     }
    // }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
    }

    //------------------------------------------------

    //Handling submit in controlled way
    handleSubmit = (evt) => {
        let address = this.inputAddress.current.value;
        let age = this.inputAge.current.value;
        
        this.setState({
            address,
            age
        });

        alert("Form Posted Successfully" + this.state.address + this.state.age);

        evt.preventDefault();
    }


    updateNameEvent = () => {

        // first way to update data.
        this.setState( {
            name: "new name"
        })

        //second way to update the data
        // name = "new name"
        // console.log(name);

        //thrid way to update the data
        // this.forceUpdate( {
        //     name: "new name"
        // })
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
        console.log(target);
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
                    

                     {/* controlled Component implementation using ref keyword */}
                    {/* <form onSubmit={this.handleSubmit}>
                        <label>
                         Address:
                           <input type="text" ref={this.inputAddress} placeholder="Please enter address"/>
                        </label>
                      
                        <label>
                         Age:
                           <input type="text" ref={this.inputAge} placeholder="Please enter age"/>
                        </label>

                        <input type="submit" value="Submit" />
                    </form>
                    <label>
                         Address:
                           {this.state.address}
                    </label>
                    <label>
                         Age:
                         {this.state.age}
                    </label> */}



                    {/*<button className={"form-control btn btn-primary col-md-2"} onClick={()=> this.props.history.push("/userhook")}>GoTo User Hooks</button>
                      */}
                    {/* <img  src="/images/hm_pic4.jpg"/> */}
                    
                    {/* <input type="text" placeholder="please enter your name" value={this.state.name}></input><br/> */}

                    {/* <input type="text" placeholder="please enter your name" value={this.state.name} onChange={this.changeNameOnType}></input><br/>
                    <button className={"form-control btn btn-primary col-md-2"} onClick={this.updateNameEvent}>Update Name</button>
                    <Dummy name = {this.state.name} updateName = {this.updateNameAsCallBack}></Dummy><br/><br/> */}

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