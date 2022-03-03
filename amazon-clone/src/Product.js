import React from 'react'
import "./Product.css";
import {useStateValue} from "./StateProvider";
import {Link} from "react-router-dom";

// to promote reusability, we are going to be making functions that we could call when needed
function Product({id, title, price, rating, image }) {
    // dispath: how we are going to be manipulating the data 
    const [{basket}, dispatch] = useStateValue();

    console.log("this is the basket >>>", basket);

    const addToBasket = () => {
        //dispatch (shoot) the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

  return (
    < div className = "product">
        {/* this is where we are going to be putting the id, price, name, photo of the product */}
        <div className = "product__info">
            <Link to="/ProductDetails"> 
                <p>{title}</p>
            </Link>
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