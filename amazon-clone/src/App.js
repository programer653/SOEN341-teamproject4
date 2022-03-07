import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import NavigationBar from "./NavigationBar";
import ProductDetails from "./ProductDetails";
import Footer from './Footer';


function App() {
    return (

        // wrapping everything with a router --> allow to have pages
        <Router >
            <div className = "App" >
            { /* rendering the header, because it is always going to be in all the pages */ } 
            <Header/>
            <NavigationBar/>

            {/* This is where we will have the banner, which will contain a few navigation fields */}
        
            { /* THIS IS WHERE THE <SWITCH></SWITCH> SHOULD BE PLACED FOR CASES */ } { /* Switch --> Routes in the newer version of React */ } 
            <Switch >

            { /* page1 --> the checkout page */ } 
            <Route path = "/Checkout" >
                <Checkout/>
            </Route> 


            <Route path = "/filtering-product" >
                <filtering-product />
            </Route>


            { /* page2-- > the cart page */} 
            {/*page3-- > filtering page*/} 
            { /* page4-- > the promotion page*/} 
            {/*page5-- > login page */}
            {/* page6-- > product detail page */}
            <Route path = "/ProductDetails">
                <ProductDetails/>
            </Route>
            { /* pageX --> the default page, home page */ } { /* this is the default route */ }
            <Route path = "/" >
            <Home/>
            </Route> 
            </Switch > 


            <Footer /> 

            </div> 

        </Router>
    );
}


export default App;