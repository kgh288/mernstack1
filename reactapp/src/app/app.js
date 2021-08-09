import React, {Component, PureComponent} from "react";
import "./app.css";
// import Header, {Footer as hFooter, pi} from "../app/CommonComponents/HeaderComponent";
import Header from "../app/CommonComponents/HeaderComponent";
import Footer from "../app/CommonComponents/FooterComponent"; 
import About from "../app/CommonComponents/AboutComponent"; 
import Home from "../app/CommonComponents/HomeComponent"; 
import NotFound from "../app/CommonComponents/NotFoundPage"; 
import FunctionalComp from "../app/CommonComponents/FunctionalComponent";
import SecondHome from "../app/CommonComponents/SecondHomeComponent";
import User from "../app/ApplicationComponents/Container/UserContainer/UserContainer";
import UserHooks from "../app/ApplicationComponents/Components/User/UserComponentHook";
import SecondUserHook from "../app/ApplicationComponents/Components/User/SecondUserComponentHook";
import ProductComponent from "./ApplicationComponents/Components/Product/ProductComponent";
import DisplayProduct from "./ApplicationComponents/Components/Product/DisplayProductComponent";
import Cart from "./ApplicationComponents/Components/Cart/CartComponent";
import Checkout from "./ApplicationComponents/Components/Checkout/CheckoutComponent";
import CouponComponent from "./ApplicationComponents/Components/Coupon/CouponComponent";
import RecentOrdersComponent from "./ApplicationComponents/Components/RecentOrders/RecentOrdersComponent"

import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
 
export default class App extends Component {


    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         name: "unchaged name"
    //     }

    //     this.changeName();
    //     this.sessionName = "MERNStack";
    // }

    // changeName = ()=>{

    //     setTimeout(() => {
    //         console.log("this.sessionName "+this.sessionName)
    //         this.sessionName = "React";
    //         console.log("this.sessionName "+this.sessionName)
    //         this.setState({
    //             name : "Luke"
    //         })
    //     }, 2000);

        
    // }

    render() {
        // let count = 0;
        // console.log("render in app", count++);
        // let name = "variable!!";
        // let a = 5, b = 4;

        
        //JSX: React doesn't have any seperate html templating so it creates html+js using below code
        //Virtual DOM: Document object model
        return(
            <Router>
                <Header/> 
                <Switch>
                    {/* <Route exact path="/" render={()=>{admin ? <Redirect to="/home" /> : <About/> }} /> */}
                    <Route path="/home" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/about/:id" exact component={About} /> 
                    <Route path="/funcTest" exact component={FunctionalComp} />
                    <Route path="/secondhome" exact component={SecondHome}/>
                    <Route path="/user" exact component={User}/>
                    <Route path="/userhook" exact component = {UserHooks}/>
                    <Route path="/seconduserhook" exact component = {SecondUserHook}/>
                    <Route path="/product" exact component = {ProductComponent}/>
                    <Route path="/display" exact component={DisplayProduct} /> 
                    <Route path="/cart" exact component={Cart} /> 
                    <Route path="/checkout" exact component={Checkout} /> 
                    <Route path="/coupon" exact component={CouponComponent} /> 
                    <Route path="/recentorders" exact component={RecentOrdersComponent} />
                    <Route path="/" component={Home} />
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