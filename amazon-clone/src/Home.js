import React, {useEffect} from 'react'
import "./Home.css";
import Product from "./Product";
import {useStateValue} from "./StateProvider";
import Admin from "./Admin";
import {useState} from "react";
import {db} from "./firebase";
import {collection, getDocs} from "firebase/firestore";
import banner from './HomePage/WelcomeForkShop.png'
function Home() {

    const productsCollectionRef = collection(db, "Products");

    const [products, setProducts] = useState([]);
    const[itemName, setItemName] = useState('');
    const[itemPrice, setItemPrice] = useState(0);
    const[itemImage, setItemImage] = useState(null);
    const[search, setSearch] = useState("");

    useEffect(() => {
        // will only run once when the app component loads
        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef);
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setItemName(data.docs.map((doc) => ({...doc.data(), itemName:doc.itemName})));
            setItemPrice(data.docs.map((doc) => ({...doc.data(), itemPrice:doc.itemPrice})));
            setItemImage(data.docs.map((doc) => ({...doc.data(), itemImage:doc.itemImage})));

        }
        getProducts()

    }, [])

    const searchItem = (e) => {
        e.preventDefault();
        setProducts(products.filter((product)=>
            products.itemName.toLowerCase().includes(search.toLowerCase())
        ));
    }
    
  return (
    <div className = "home">
        <div className = "home__container">
            {/* this is the home image background */}
            <img className = "home__image" src = "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>   
       
            <div className="homeContainer">
                {/* adding the home page banner */}
                <div>
                    <img src = {banner} ></img>
                    
                </div>

                <div>
                    {/* adding the search bar here  */}
                    <br />
                    <br />
                    <h1>Looking for something in particular?</h1>
                    <form onSubmit={(e) =>{searchItem(e)}}>
                        <input className = "header__searchInput" onChange={(e) => {setSearch(e.target.value)}}/>
                        <button type = "submit">Search</button>
                    </form>
                    {/* displaying the products on the home page */}
                    <div className = "home__row">
                        {products.map((product) =>{
                            return (
                                <Product id = {product.id} itemName={product.itemName} itemPrice={product.itemPrice} itemImage={product.itemImage}></Product>
                            )
                        })}
                    </div>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default Home;