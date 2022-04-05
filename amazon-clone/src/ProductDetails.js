import React from 'react'
import Product from "./Product";
import "./ProductDetails.css";
import {useStateValue} from "./StateProvider";
import Admin from "./Admin";

function ProductDetails({id, title, image, description, price, rating}) {

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

    <div className="productDetails">
        
        <p className="productDetails__title">{title}</p>
        <img className="productDetails__image">{image}</img>
        <p className="productDetails__description"></p>
        <p className="productDetails__price">{price}</p>
        <div className="productDetails__rating">

        </div>
        <div className="productDetails">

        </div>
        <button onClick={addToBasket}>Add to Cart </button>

    </div>

}

export default ProductDetails