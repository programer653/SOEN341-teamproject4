import React, {useState, useEffect} from 'react'
import Product from "./Product";
import "./ProductDetails.css";
import {useStateValue} from "./StateProvider";
import {db} from "./firebase";
import {useHistory, useParams, Link} from "react-router-dom";

function ProductDetails({id, itemName, itemPrice, itemDescription, itemImage, itemSale}) {  
    const [{basket}, dispatch] = useStateValue();

    const [product, setProduct] = useState([]);
    // const {id} = useParams();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                itemName: itemName,
                itemPrice: itemPrice,
                itemDescription: itemDescription,
                itemImage: itemImage,
                itemSale: itemSale,
            }
        })
    }

    // useEffect(() => {
    //     db.child(`/Products/${product.id}`).get().then((snapshot) => {
    //         if(snapshot.exists()) {
    //             setProduct({...snapshot.val()});
    //         }
    //         else {
    //             setProduct({})
    //         }
    //     });
    // }, [id]);

    // console.log("product", product);

    return (
        <div className="product-details">
            <div className="product-title">
                <h2>Belt</h2>
            </div>
            <div className="product-image">
                <img src="https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1581092103/409417_AP00T_1000_001_100_0000_Light.jpg"/>
            </div>
            <div className="product-price">
                <h3>$4.98</h3>
            </div>
            <div className="product-description">
                <p>A black belt with leather texture and golden buckle in double G form.</p>
            </div>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
        
    );
};

export default ProductDetails;