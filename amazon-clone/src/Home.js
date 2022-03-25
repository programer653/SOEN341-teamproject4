import React, {useEffect} from 'react'
import "./Home.css";
import Product from "./Product";
import {useStateValue} from "./StateProvider";
import Admin from "./Admin";
import {useState} from "react";
import {db} from "./firebase";
import {collection, getDocs} from "firebase/firestore";

function Home() {
    
  return (
    <div className = "home">
        <div className = "home__container">
            {/* this is the home image background */}
            <img className = "home__image" src = "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>   
       
            <div className="homeContainer">
                <div className = "home__row">
                    <Product />
                    <Product />

                </div>

                {/* <div className = "home__row">
                
                    <Product />
                    <Product />
                    

                </div> */}

                {/* <div className = "home__row">
                    <Product />
                    <Product />
            
                </div> */}
            </div>
            
        </div>

    </div>
  )
}

export default Home;