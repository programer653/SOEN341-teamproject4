import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{user}] = useStateValue();

  return (
    <div className = "checkout">
      <div className = "checkout__left">
          <img className = "checkout__ad" src = "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>

          <div>
            <h3>{user.email}</h3>
            {/* <h3>Hello, {user?.email}</h3> function isn't working, It was to add hello before the name of th user. */}
            <h2 className="checkout__title">Your Cart</h2>
            {/* CartItem */}
            {/* CartItem */}
            {/* CartItem */}
            {/* CartItem */}
            {/* CartItem */}
          </div>
      </div> 

          <div className="checkout__right">
            <Subtotal/>
          </div>
       
    </div>
  );
}

export default Checkout
