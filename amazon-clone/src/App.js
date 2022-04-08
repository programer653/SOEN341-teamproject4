import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import NavigationBar from "./NavigationBar";
import ProductDetails from "./ProductDetails";
import Admin from "./Admin";
import {useState} from "react";
import Payment from "./Payment";
import {auth} from "./firebase";
import {db} from "./firebase";
import {collection, getDocs} from "firebase/firestore";
import Footer from './Footer'
import AboutUs from "./AboutUs";
import Promotion from "./Promotion";
import FeaturedProducts from "./FeaturedProducts";
import FilteringProduct from "./filteringProduct";
import CheckoutApproved from "./CheckoutApproved";
import FeatProd from "./FeatProd";
import Electronics from "./Electronics"
import Food from "./Food"
import Clothing from "./Clothing"
import Product from "./Product";


function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        // will only run once when the app component loads

        auth.onAuthStateChanged(authUser => {
            console.log('The user is >>>', authUser);

            if (authUser) {
                //user logged in or w   as logged in
                dispatch({
                    type: 'SET_USER', //set User to the authUser
                    user: authUser
                })
            } 
            else {

                //the user is logged out
                dispatch({
                    type: 'SET_USER', //set User to nyll value so no one is logged in
                    user: null
                })
            }
        })
    }, [])

    return (
        
        // wrapping everything with a router --> allow to have pages
        <BrowserRouter >
            <div className = "App" >
                    { /* rendering the header, because it is always going to be in all the pages */ } 
                    <Header/>
                    <NavigationBar/>
                    {/* This is where we will have the banner, which will contain a few navigation fields */}

                    { /* THIS IS WHERE THE <SWITCH></SWITCH> SHOULD BE PLACED FOR CASES */ } { /* Switch --> Routes in the newer version of React */ } 
                    <Switch >
                        <Route path="/login">
                            <Login />
                        </Route>

                        { /* page1 --> the checkout page */ } 
                        <Route path = "/checkout" >
                            <Checkout/>
                        </Route> 

                        <Route path="/payment">
                            <Payment />
                        </Route>

                        <Route path="/CheckoutApproved">
                            <CheckoutApproved />
                        </Route>


                        <Route path = "/filtering-product" >
                            <FilteringProduct />
                        </Route>

                        <Route path = "/ProductDetails">
                            <ProductDetails/>
                        </Route>

                        <Route path="/Admin">
                            <Admin />
                        </Route>

                        <Route path = "/about-us" >
                            <AboutUs />
                        </Route>

                        <Route path = "/FeatProd">
                            <FeatProd />

                        </Route>

                        <Route path = "/promotions">
                            <Promotion />
                        </Route>

                        <Route path = "/electronics">
                            <Electronics />
                        </Route>

                        <Route path = "/food">
                            <Food />
                        </Route>

                        <Route path = "/clothing">
                            <Clothing />
                        </Route>


                        { /* pageX --> the default page, home page */ } { /* this is the default route */ }
                        <Route path = "/" >
                            {/* <FeaturedProducts /> */}
                            <Home/>
                        </Route> 
                    </Switch > 

                    <Footer />

            </div> 

        </BrowserRouter>
    );
}


export default App;