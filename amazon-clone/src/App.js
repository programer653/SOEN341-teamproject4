import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import NavigationBar from "./NavigationBar";
import ProductDetails from "./ProductDetails";
import Footer from './Footer'
// import { useState } from "react";
// import firebase from "./firebase";

function App() {

    // const [pants, setPants] = useState([]);
    // const ref = firebase.firestore().collection("Pants")

    // console.log(ref);



    return (

 
        
        // wrapping everything with a router --> allow to have pages
        <Router >
            <div className = "App" >
                    { /* rendering the header, because it is always going to be in all the pages */ } 
                    <Header/>
                    <NavigationBar/>
                    {/* This is where we will have the banner, which will contain a few navigation fields */}
                
                    {/* <div>
                        <h1>Pants</h1>
                        {pants.map((pant) => (
                            <div key={pant.id}>
                                <h2>{pant.title}</h2>
                                <p>{pant.price}</p>
                            </div>

                         ))}
                    </div>                 */}



                    { /* THIS IS WHERE THE <SWITCH></SWITCH> SHOULD BE PLACED FOR CASES */ } { /* Switch --> Routes in the newer version of React */ } 
                    <Switch >

                    { /* page1 --> the checkout page */ } 
                    <Route path = "/Checkout" >
                        <Checkout/>
                    </Route> 


                    <Route path = "/filteringProduct" >
                        <filteringProduct />
                    </Route>


                    { /* page2-- > the cart page */} 
                    {/*page3-- > filtering page*/} 
                    { /* page4-- > the promotion page*/} 
                    {/*page5-- > login page */}
                    {/* page6-- > product detail page */}
                    <Route path = "/ProductDetails">
                        <ProductDetails/>
                    </Route>



                    <Route path = "/aboutUs">
                        <aboutUs/>
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