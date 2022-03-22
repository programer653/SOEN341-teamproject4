import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

import Login from "./Login";
import { useStateValue } from "./StateProvider";
import NavigationBar from "./NavigationBar";
import ProductDetails from "./ProductDetails";
import Admin from "./Admin";
import Payment from "./Payment";
import DisplayProduct from "./DisplayProduct";
import {auth} from "./Config/Config";


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

        <BrowserRouter>
        <div className="App"> 
            <Header/>
            <NavigationBar/>

            {/* This is where we will have the banner, which will contain a few navigation fields */}
        
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
            <Route path = "/Payment" >
                <Payment />
            </Route> 
            { /* page2-- > the cart page */} 
            {/*page3-- > filtering page*/} 
            { /* page4-- > the promotion page*/} 
            {/*page5-- > login page */}
            <Route path ="/Login">
                <Login />
            </Route>
            {/* page6-- > product detail page */}

            <Route path = "./DisplayProduct">
                <DisplayProduct />
            </Route>

            <Route path = "./ProductDetails">
                <ProductDetails/>
            </Route>
            { /* pageX --> the default page, home page */ } { /* this is the default route */ }
            <Route path="/Admin" component={Admin}>
                    
            </Route>

            <Route path = "/Home" >
                <Home/>
            </Route> 
                
            </Switch >

            </div> 
        </BrowserRouter>
    );
}


export default App;