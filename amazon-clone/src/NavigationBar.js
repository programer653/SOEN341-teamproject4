import React from 'react'
import "./NavigationBar.css"
import {Link} from "react-router-dom";
import FilteringProduct from './FilteringProduct';


export default function NavigationBar() {
  return (
    <div class="navigationBar">

        <div class="dropdownMenu">
            <button class="dropbutton"> <strong>Dropdown Menu↓</strong><i class="fa fa-caret-down"></i></button>
            <div class="dropdown-content">
                <h3>Category Name</h3>
                <hr></hr>
                <a href="#">Best Sellers</a>
                <a href="#">New Releases</a>
                <a href="#">Deals of the Day</a>
                <a href="#">Filtering Products</a>
                <hr></hr>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#">Link 6</a>
            </div>
        </div> 

        <a href="#new_releases">New Releases</a>
        <a href="#best_sellers">Best Sellers</a>
        <a href="#pet_supplies">Pet Supplies</a>
        <a href="#home_supplies">Home Supplies</a>
        <a href="#electronics">Electronics</a>

        <Link to = "/promotions">
           <a href = '/promotions'>Deals of the Day</a>
        </Link>

        <Link to = "/filtering-product">
           <a href = '/filtering-product'>Filtering Products</a>
        </Link>
       
    </div>
  )
}
