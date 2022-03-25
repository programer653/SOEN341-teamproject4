import { ListItem } from "@material-ui/core";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import Admin from "./Admin";
import {db} from "./firebase";

function Checkout() {
//To render out the cart
const [{basket}, dispatch] = useStateValue();

  return (
    <div className = "checkout">
      <div className = "checkout__left">
          <img className = "checkout__ad" src = "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>

          <div>
            <h2 className="checkout__title">Your Cart</h2>
            {/* this is going to be displaying the content of the backet in the checkout */}
            {basket.map(item => (
              <CheckoutProduct
              id= {item.id}
              itemName= {item.itemName}
              itemImage = {item.itemImage}            
              itemPrice={item.itemPrice}
              rating={item.rating}
              />
              
            ))}
 
          </div>
      </div> 

          <div className="checkout__right">
            <Subtotal/>
          </div>
       
    </div>
  );
}

export default Checkout
