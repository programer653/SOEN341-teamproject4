import React from 'react'
import "./NavigationBar.css"
import {Link} from "react-router-dom";
import FilteringProduct from './filteringProduct';


export default function NavigationBar() {
  return (
    <div class="navigationBar">

        <div class="dropdownMenu">
            <button class="dropbutton"> <strong>Product Categories↓</strong><i class="fa fa-caret-down"></i></button>
            <div class="dropdown-content">
                <h3>Category Name</h3>
                <hr></hr>
                <a href="#">Clothing</a>
                <a href="#">Accessories</a>
                <a href="#">Food</a>
                <a href="#">Electronics</a>
                {/* <a href="#">Filtering Products</a> */}
                <hr></hr> 
            </div>
        </div> 

        {/* <a href="#home_supplies">Clothing</a>
        <a href="#electronics">Electronics</a> */}

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
