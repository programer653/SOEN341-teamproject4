import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, image, title, price, rating}) {
    
    const [{basket}, dispath] = useStateValue();


    const removeFromBasket = () => {
        // this is going to be remove the item fro the basket 
        dispatchEvent({
            type : 'REMOVE_FROM_BASKET', 
            id: id,
        })

    }
    
    
    return (
        <div className="checkoutProduct">

            {/* contains only the image of the product */}
            <img className="checkoutProduct__image" src={image} alt="" />

            {/* contains every other information of the product - title, price, rating, 'Remove' button */}
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price"><small>$</small><strong>{price}</strong></p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p>*</p>
                    ))}
                </div>
                <button onClick = {removeFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct