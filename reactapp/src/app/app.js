import React, {Component, PureComponent} from "react";
import "./app.css";
import Header, {Footer as hFooter, pi} from "../app/CommonComponents/HeaderComponent";
import Footer from "../app/CommonComponents/FooterComponent"; 
import About from "../app/CommonComponents/AboutComponent"; 
import Home from "../app/CommonComponents/HomeComponent"; 
import NotFound from "../app/CommonComponents/NotFoundPage"; 
import FunctionalComp from "../app/CommonComponents/FunctionalComponent";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
 
export default class App extends Component {


    constructor(props) {
        super(props)

        this.state = {
            name: "unchaged name"
        }

        this.changeName();
        this.sessionName = "MERNStack";
    }

    changeName = ()=>{

        setTimeout(() => {
            console.log("this.sessionName "+this.sessionName)
            this.sessionName = "React";
            console.log("this.sessionName "+this.sessionName)
            this.setState({
                name : "Luke"
            })
        }, 2000);

        
    }

    render() {
        // let count = 0;
        // console.log("render in app", count++);
        // let name = "variable!!";
        // let a = 5, b = 4;
        //JSX: React doesn't have any seperate html templating so it creates html+js using below code
        //Virtual DOM: Document object model
        return(
            <Router>
                <Header name={"My name"}>
                    {/* <div>First child div component of parent</div>
                    <div>second child div component of parent</div> */}
                </Header> 

                <Switch>
                    {/* <Route exact path="/" render={()=>{admin ? <Redirect to="/home" /> : <About/> }} /> */}
                    <Route path="/home" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/about/:id" exact component={About} /> 
                    <Route path="/funcTest" exact component={FunctionalComp} />                   
                    {/* <Route path="/" component={Home} /> */}
                    <Route path="*" component={NotFound} />
                </Switch>

                {/* <h1>The very first React component. Basically App component (7/12)</h1>
                <h1>this is the variable name: {name}</h1>
                <h2>Muliply: {a*b}</h2> */}

                <Footer></Footer>
            </Router>
        )
    }



}