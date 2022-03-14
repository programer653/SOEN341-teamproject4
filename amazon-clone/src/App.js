import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import NavigationBar from "./NavigationBar";
import ProductDetails from "./ProductDetails";
import Footer from './Footer'
import AboutUs from "./AboutUs";
import filteringProduct from "./filteringProduct";
import Promotion from "./Promotion";
import FeaturedProducts from "./FeaturedProducts";


// import { useState } from "react";
// import firebase from "./firebase";

function App() {

    return (
        
        // wrapping everything with a router --> allow to have pages
        <Router >
            <div className = "App" >
                    { /* rendering the header, because it is always going to be in all the pages */ } 
                    <Header/>
                    <NavigationBar/>
                    {/* This is where we will have the banner, which will contain a few navigation fields */}
                    <FeaturedProducts />


                    { /* THIS IS WHERE THE <SWITCH></SWITCH> SHOULD BE PLACED FOR CASES */ } { /* Switch --> Routes in the newer version of React */ } 
                    <Switch >

                        { /* page1 --> the checkout page */ } 
                        <Route path = "/Checkout" >
                            <Checkout/>
                        </Route> 



                        <Route path = "/ProductDetails">
                            <ProductDetails/>
                        </Route>

                        <Route path = "/about-us" >
                            <AboutUs />
                        </Route>

                        <Route path = "/filtering-product" >
                            <filteringProduct />
                        </Route>

                        <Route path = "/promotions">
                            <Promotion />
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