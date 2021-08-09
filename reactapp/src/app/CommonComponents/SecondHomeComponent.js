import React, {Component, PureComponent} from "react";



export default class SecondHome extends Component {

    constructor(props) {


        super(props);

        this.state = {
            number: 1,
            string: "string value"
        }

        this.inputNumber = React.createRef();
        this.inputString = React.createRef();
    }


    //Life Cycles -----------------------------
    componentDidMout() {
        console.log("SecondHome component mounted");
    }

    componentWillUnmount() {
        console.log("SecondHome component will unmount")
    }

    shouldComponentUpdate(nextState, nextProps) {
        console.log("secondhome component's check - shouldComponentUpdate");

        console.log("nextState: ", nextState);
        console.log("nextProps: ", nextProps);

        if(nextProps.number==this.state.number && nextProps.string==this.state.string) {
            console.log("value is same, not rendering")
            return false
        }
        else {
            console.log("Value is different, start rendering")
            return true;
        }
    }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("secondHome component's getSnapshotBeforeUpdate");
        console.log("prevState: ", prevState);
        console.log("prevProps: ", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("secondHome component's componentDidUpdate");
        console.log("prevState: ",prevState);
        console.log("prevProps: ", prevProps);
    }

    handleSubmit = (event) => {

        let number = this.inputNumber.current.value;
        let string = this.inputString.current.value;

        this.setState({
            number,
            string
        })

        alert("Submitted the values...") 

        setTimeout(() => {
            if(this.state.number == this.inputNumber.current.number && 
                this.state.string == this.inputNumber.current.string) {
                    alert("Updated Successfully")
                }
        }, 1000);
        event.preventDefault();

    }

    render() {
        return (

            <div className={"loadSecondHomeBackground form"} style={{backgroundImage: "url(/images/background1.jpg)"}}>

                <button className={"form-control btn btn-primary col-md-2"} onClick={()=> this.props.history.push("/home")}>Go back to Home</button>
                <b className="feature">{"Welcome, this is Second home template"}</b>
                <ul>                     
                    {/* <li>this is slot for ul, li </li> */}
                </ul>


                <form onSubmit={this.handleSubmit}>
                        <label>
                        number:
                            <input type="text" ref={this.inputNumber} placeholder="Please enter number"/>
                        </label>
                        <br/>
                        <label>
                        String:
                           <input type="text" ref={this.inputString} placeholder="Please enter string"/>
                        </label>
                       <input type="submit" value="Submit" />
                </form>
                <label>
                    Number:
                    {this.state.number}
                </label>
                <br/>
                <label>
                    String:
                    {this.state.string}
                </label>

            </div>


        );
    }

}