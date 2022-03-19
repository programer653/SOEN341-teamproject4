import React from 'react'
import "./Home.css";
import Product from "./Product";


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

                <div className = "home__row">
                
                    <Product id = "1234" title = "Gucci Belt" price ={290.00} rating = {5} image = "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1580211003/406831_0YA0G_1000_001_100_0000_Light.jpg" />
                    <Product />
                    <Product />

                </div>

                <div className = "home__row">
                    <Product />
                </div>
                <div className="home__row">
                    Browse
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Home;