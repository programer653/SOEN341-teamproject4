import React, {useState, useEffect} from 'react';
import Product from "./Product";
import { motion } from "framer-motion";
import "./Promotion.css";
import "./filteringProduct.css";
import {db} from "./firebase";
import {collection, getDocs, orderBy, QuerySnapshot} from "firebase/firestore";
// could add the filtering option in this page

function Promotion() {

    useEffect(()=>{
        setVisible(true);
    })

    const [visible,setVisible] = useState(false);

    const productsCollectionRef = collection(db, "Products");

    const [products, setProducts] = useState([]);
    const[itemName, setItemName] = useState('');
    const[itemPrice, setItemPrice] = useState(0);
    const[itemImage, setItemImage] = useState(null);
    const[itemSale, setItemSale] = useState(0);
    useEffect(() => {
        // will only run once when the app component loads
        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef);
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setItemName(data.docs.map((doc) => ({...doc.data(), itemName:doc.itemName})));
            setItemPrice(data.docs.map((doc) => ({...doc.data(), itemPrice:doc.itemPrice})));
            setItemSale(data.docs.map((doc) => ({...doc.data(), itemSale:doc.itemSale})));
            setItemImage(data.docs.map((doc) => ({...doc.data(), itemImage:doc.itemImage})));

        }
        getProducts();
  
    }, [])

  
  return (
    <div className = "promotion">
        <div id="pageTitle" >
            <p>Deals of the Day</p>
            <br/>
           

        </div>

        <div className='promo_container'>
                <div className='promo_row'>
                    {/* when you are going to be adding the product in the cart, we could see the modification in the cart */}
               
                {products.map((product) =>{
                        return (
                            <Product id = {product.id} itemName={product.itemName} itemPrice={product.itemSale} itemImage = {product.itemImage}></Product>
                            
                        )
                })}
                
                {/* <strike>
                {products.map((product) =>{
                        return (
                            <Product itemPrice={product.itemPrice}></Product>
                        )
                })}
                </strike> */}
 
                </div>

            </div>

    </div>
    
  )
}

export default Promotion; 
