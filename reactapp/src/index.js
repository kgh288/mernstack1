// console.log("This is entry point of my react application (client side) shopping cart to be built in react");

import React from "react";
import {render} from "react-dom";

import App from "./app/app.js"

render(

    <App/>, //application that would be rendered on single page
    document.getElementById("root") //bootstrapping the application root container
)



//ex)
//1. Create an application with webpack settings, where start file should be index.js and root html should be index.html
//2. Hook up an app.js file, keep the project name as Dummy Project
//3. Create a react Component with name FirstModule and import it as default component in app.js
//4. Also pass username userage from App component to child component