/*
this is where we are going to be putting 
the header of the website in this file
*/
import React from 'react'
import './Header.css'
import FilteringProduct from './FilteringProduct';

// these imports are going to be taken from material-ui.com
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

// this will import Link to direct pages when clicked
import {Link} from "react-router-dom";

import {useStateValue} from "./StateProvider";
import AnimationPage from './AnimationPage';

function Header() {
  const[{basket}, dispatch] = useStateValue();

  return (
    <div className = "header">

      {/* This will direct the user to the home page when the logo is clicked */}
      <Link to="/">
        <img className = "header__logo"
          src = "https://fontmeme.com/permalink/220303/6b84738cdb21cd136e6d897b78c23768.png"
          />
      </Link>

        <div className = "header__search">

            <input className = "header__searchInput" type = "text"/>

            {/* logo */}
            <SearchIcon className = "header__searchIcon" />
            
            <div className = "header__nav">

                <div className = "header__option">
                  
                  <span className = "header__optionLineOne">Hello, namePerson!</span>
                  <span className = "header__optionLineTwo">Sign In</span>

                </div>

                <div className = "header__option">
                  <span className = "header__optionOne">Returns</span>
                  <span className = "header__optionTwo">& Orders</span>

                </div>

                <div className = "header__option">
                  <span className = "header__optionOne">Your</span>
                  <span className = "header__optionTwo">Prime</span>

                </div>

                {/* This will direct the user to the checkout page when the cart is clicked */}
                <Link to="/checkout">
                  <div className="header__optionBasket">
                      <ShoppingBasketIcon />
                      {/* this is going to be having two classNames, and there is a space in between */}
                      <span className = "header__optionLineTwo header__basketCount">{basket?.length}</span>
                  </div>
                </Link>

            </div>
          
          
        </div>
    </div>
 
  )
}

export default Header