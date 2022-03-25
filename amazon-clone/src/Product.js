import React, {useEffect} from 'react'
import "./Product.css";
import {useStateValue} from "./StateProvider";
import Admin from "./Admin";
import {useState} from "react";
import {db} from "./firebase";
import {collection, getDocs} from "firebase/firestore";
import {Link} from "react-router-dom";
import AnimationPage from './AnimationPage';

// to promote reusability, we are going to be making functions that we could call when needed
function Product({id, itemName, itemPrice, itemDescription, rating, itemImage }) {
    
    // dispath: how we are going to be manipulating the data 
    const [{basket}, dispatch] = useStateValue();

    const [products, setProducts] = useState([]);
    const productsCollectionRef = collection(db, "Products");

    useEffect(() => {
        // will only run once when the app component loads

        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef);
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getProducts()

    }, [])

    console.log("this is the basket >>>", basket);

    const addToBasket = () => {
        //dispatch (shoot) the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                itemName: itemName,
                itemPrice: itemPrice,
                itemDescription: itemDescription,
                itemImage: itemImage,
                rating: rating,
            }
        })
    }

  return (
    < div className = "product">
        {/* this is where we are going to be putting the id, price, name, photo of the product */}

        <div className = "product__info">
            {products.map((product) => {return <div>
                    <Link to="/ProductDetails"> 
                        <p>{product.itemName}</p>
                    </Link>
                    <p className = "product__price"><small>$ </small><strong>{product.itemPrice}</strong></p>
            </div>
            })}
            <div className = "product__rating">
            {/* this is going to be rating, but dynamic because it could change anytime */}
                    {Array(rating)
                    .fill()
                    .map( (_, i) => (<p>☆</p>) 
                    )}
            </div>
        </div>
        
        <img src = {itemImage} alt = ""/>
        <AnimationPage>
            <button onClick={addToBasket}>Add to Cart </button> 
        </AnimationPage>
    </div>
    )
}
export default Product