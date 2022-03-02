import React from 'react'
import "./Product.css";


// to promote reusability, we are going to be making functions that we could call when needed
function Product({id, title, price, rating, image }) {

    const addToBasket = () => {
        //dispatch the item into the data layer
    }

  return (
    < div className = "product">
        {/* this is where we are going to be putting the id, price, name, photo of the product */}
        <div className = "product__info">
            <p>{title}</p>
            <p className = "product__price"><small>$ </small><strong>{price}</strong></p>
            <div className = "product__rating">
            {/* this is going to be rating, but dynamic because it could change anytime */}
                    {Array(rating)
                    .fill()
                    .map( (_, i) => (<p>*</p>) 
                    )}
            </div>
        </div>
        <img src = {image} alt = ""/>
        <button onClick={addToBasket}>Add to Cart </button> 
    </div>
    )
}
export default Product