import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";


function App() {
    return (

        // wrapping everything with a router --> allow to have pages
        <Router >
            <div className = "App" >
            { /* rendering the header, because it is always going to be in all the pages */ } 
            { /* THIS IS WHERE THE <SWITCH></SWITCH> SHOULD BE PLACED FOR CASES */ } { /* Switch --> Routes in the newer version of React */ } 
            <Switch >
                <Route path= "/login">
                    <Login/>
                </Route>
            { /* page1 --> the checkout page */ } 
            <Route path = "/Checkout" >
                <Header/>
                <Checkout/>
            </Route> 
            { /* page2-- > the cart page */} 
            {/*page3-- > filtering page*/} 
            { /* page4-- > the promotion page*/} 
            {/*page5-- > login page */}
            { /* pageX --> the default page, home page */ } { /* this is the default route */ }
            <Route path = "/" >
                <Header />
            <Home/>
            </Route> 
            </Switch > 
            </div> 
        </Router>
    );
}


export default App;