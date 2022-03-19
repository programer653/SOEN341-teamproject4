import React from 'react'
import "./NavigationBar.css"

export default function NavigationBar() {
  return (
    <div class="navigationBar">

        <div class="dropdownMenu">
            <button class="dropbutton"> <strong>Expand to Find More↓</strong><i class="fa fa-caret-down"></i></button>
            <div class="dropdown-content">
                <h3>Trending Today!</h3>
                <hr></hr>
                <a href="#">Best Sellers</a>
                <a href="#">New Releases</a>
                <a href="#">Deals of the Day</a>
                <hr></hr>
                <a href="#"></a>
                <a href="#">Link 5</a>
                <a href="#">Link 6</a>
            </div>
        </div> 

        <a href="#new_releases">New Releases</a>
        <a href="#best_sellers">Best Sellers</a>
        <a href="#pet_supplies">Pet Supplies</a>
        <a href="#home_supplies">Home Supplies</a>
        <a href="#electronics">Electronics</a>
        <a href="#deals_of_the_day">Deals of the Day</a>
        <a href="#display_product">Display Products</a>
    </div>
  )
}
