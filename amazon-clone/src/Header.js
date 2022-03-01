/*
this is where we are going to be putting 
the header of the website in this file
*/
import React from 'react'
import './Header.css'

// these imports are going to be taken from material-ui.com
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function header() {
  return (
    <div className = "header">
        <img className = "header__logo"
        src = "https://logodix.com/logo/595167.png" 
        />

        <div className = "header__search">

            <input 
            className = "header__searchInput" 
            type = "text"/>

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

                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    {/* this is going to be having two classNames, and there is a space in between */}
                    <span className = "header__optionLineTwo header__basketCount">0</span>
                </div>

            </div>
            

        </div>



    </div>
  )
}

export default header