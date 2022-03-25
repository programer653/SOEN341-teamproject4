import React from "react";
import AnimationPage from "./AnimationPage";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import {db} from "./firebase";

function CheckoutProduct({id, itemImage, itemName, itemPrice, rating}) {
    
    const [{basket}, dispatch] = useStateValue();


    // Function to delete an existing item from the cart
    const removeFromBasket = () => {
        dispatch({
            type : 'REMOVE_FROM_BASKET', 
            id: id,
        })
    }
    
    
    return (
        <div className="checkoutProduct">

            {/* contains only the image of the product */}
            <img className="checkoutProduct__image" src={itemImage}/>

            {/* contains every other information of the product - title, price, rating, 'Remove' button */}
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{itemName}</p>
                <p className="checkoutProduct__price"><small>$</small><strong>{itemPrice}</strong></p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p>*</p>
                    ))}
                </div>
                
                {/* When the 'Remove from Cart' button is clicked, the item will be removed*/}
                
                <AnimationPage>
                    <button onClick = {removeFromBasket}>Remove from Cart</button>
                </AnimationPage>
            </div>
        </div>
    )
}

export default CheckoutProduct