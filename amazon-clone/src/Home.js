import React, {useEffect} from 'react'
import "./Home.css";
import Product from "./Product";
import {useStateValue} from "./StateProvider";
import Admin from "./Admin";
import {useState} from "react";
import {db} from "./firebase";
import {collection, getDocs} from "firebase/firestore";


function Home() {
    const [{}, dispatch] = useStateValue();
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

  return (
    <div className = "home">
        <div className = "home__container">
            {/* this is the home image background */}
            <img className = "home__image" src = "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>   
       
            <div className="homeContainer">
                <div className = "home__row">
                    <Product id = "1234" title = "Gucci Belt" price ={290.00} rating = {5} image = "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1580211003/406831_0YA0G_1000_001_100_0000_Light.jpg" />
                    <Product id = "1234" title = "Gucci Belt" price ={290.00} rating = {5} image = "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1580211003/406831_0YA0G_1000_001_100_0000_Light.jpg" />

                    {/* product component */}

                </div>

                <div className = "home__row">
                
                    <Product id = "1234" title = "Gucci Belt" price ={290.00} rating = {5} image = "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1580211003/406831_0YA0G_1000_001_100_0000_Light.jpg" />
                    <Product id = "1234" title = "Gucci Belt" price ={290.00} rating = {5} image = "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1580211003/406831_0YA0G_1000_001_100_0000_Light.jpg" />
                    <Product id = "1234" title = "Gucci Belt" price ={290.00} rating = {5} image = "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1580211003/406831_0YA0G_1000_001_100_0000_Light.jpg" />
                    <Product id = "1234" title = "Gucci Belt" price ={290.00} rating = {5} image = "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1580211003/406831_0YA0G_1000_001_100_0000_Light.jpg" />


                    {/* product component */}
                    {/* product component */}
                    {/* product component */}

                </div>

                <div className = "home__row">
                    <Product id = "1234" title = "Gucci Belt" price ={290.00} rating = {5} image = "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1580211003/406831_0YA0G_1000_001_100_0000_Light.jpg" />
                    <Product id = "1234" title = "Gucci Belt" price ={290.00} rating = {5} image = "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1580211003/406831_0YA0G_1000_001_100_0000_Light.jpg" />
                    <Product id = "1234" title = "Gucci Belt" price ={290.00} rating = {5} image = "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1580211003/406831_0YA0G_1000_001_100_0000_Light.jpg" />

                   
                    {/* product component */}
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Home;