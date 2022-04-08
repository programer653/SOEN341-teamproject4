import React, {useEffect, useState, Fragment} from 'react';
import Product from "./Product";
import {db} from "./firebase";
import {collection, getDocs, orderBy} from "firebase/firestore";



function Clothing() {
    const productsCollectionRef = collection(db, "Clothing");

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




  return (
    <div>
        
        Clothing


        <div>
         <div>
            <div className = "filtering_two">
                {products.map((product) =>{
                 return (
                   <Product id = {product.id} itemName={product.itemName} itemPrice={product.itemPrice} itemImage = {product.itemImage}></Product>
                  )
             })}
            </div>
         </div>
        </div>


    </div>

  )
}

export default Clothing