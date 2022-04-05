import React, {useEffect} from 'react'
import "./Home.css";
import Product from "./Product";
import {useStateValue} from "./StateProvider";
import Admin from "./Admin";
import {useState} from "react";
import {db} from "./firebase";
import {collection, getDocs} from "firebase/firestore";

function Home() {

    const productsCollectionRef = collection(db, "Products");

    const [products, setProducts] = useState([]);
    const[itemName, setItemName] = useState('');
    const[itemPrice, setItemPrice] = useState(0);
    const[itemImage, setItemImage] = useState(null);

    useEffect(() => {
        // will only run once when the app component loads
        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef);
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setItemName(data.docs.map((doc) => ({...doc.data(), itemName:doc.itemName})));
            setItemPrice(data.docs.map((doc) => ({...doc.data(), itemPrice:doc.itemPrice})));

        }
        getProducts()

    }, [])


   
   //for the product calling 
    /*
        {products.map((product) => {return <div>
                    <Link to="/ProductDetails"> 
                        <p>{product.itemName}</p>
                    </Link>
                    <p className = "product__price"><small>$ </small><strong>{product.itemPrice}</strong></p>
            </div>
    */
            //function Product({id, itemName, itemPrice, itemDescription, rating, itemImage }) {

    
  return (
    <div className = "home">
        <div className = "home__container">
            {/* this is the home image background */}
            <img className = "home__image" src = "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>   
       
            <div className="homeContainer">
                <div className = "home__row">
                    {products.map((product) =>{
                        return (
                            <Product id = {product.id} itemName={product.itemName} itemPrice={product.itemPrice}></Product>
                        )
                    })}
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default Home;