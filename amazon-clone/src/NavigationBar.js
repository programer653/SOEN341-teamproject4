import React from 'react'
import "./NavigationBar.css"
import {Link} from "react-router-dom";
import FilteringProduct from './filteringProduct';


export default function NavigationBar() {
  return (
    <div class="navigationBar">

        <div class="dropdownMenu">
            <button class="dropbutton"> <strong>Filter Products by Category ↓</strong><i class="fa fa-caret-down"></i></button>
            <div class="dropdown-content">
                <hr></hr>
                <a href="/clothing">Clothing</a>
                <a href="/food">Food</a>
                <a href="/electronics">Electronics</a>
                {/* <a href="#">Filtering Products</a> */}
                <hr></hr> 
            </div>
        </div> 

        <Link to = "/FeatProd">
           <a href = '/FeatProd'>Featured Products</a>
        </Link>

        <Link to = "/promotions">
           <a href = '/promotions'>Deals of the Day</a>
        </Link>

        <Link to = "/filtering-product">
           <a href = '/filtering-product'>Filtering Products</a>
        </Link>


       
    </div>
  )
}
