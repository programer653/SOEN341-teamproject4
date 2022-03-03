import React from "react";
import "CheckoutProduct.css";

function CheckoutProduct({id, image, title, price, rating}) {
    return (
        <div className="checkoutProduct">

            {/* contains only the image of the product */}
            <img className="checkoutProduct__image" src={image} alt="" />

            {/* contains every other information of the product - title, price, rating, 'Remove' button */}
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
            </div>
        </div>
    )
}

export default CheckoutProduct