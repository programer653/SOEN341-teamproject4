import React, {useState, useEffect} from 'react';
import Product from "./Product";
import { motion } from "framer-motion";
import "./Promotion.css";
import "./filteringProduct.css";

// could add the filtering option in this page

function Promotion() {

    useEffect(()=>{
        setVisible(true);
    })

    const [visible,setVisible] = useState(false);

  return (
    <div className = "promotion">
        <div id="pageTitle" >
            <p>Deals of the Day</p>

            <div className='promo_container'>
                <div className='promo_row'>
                <Product id = "1234" title = "Gucci Belt" price ={290.00}  image = "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1580211003/406831_0YA0G_1000_001_100_0000_Light.jpg" />
                <Product id = "1234" title = "Gucci Belt" price ={290.00}  image = "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1580211003/406831_0YA0G_1000_001_100_0000_Light.jpg" />
                <Product id = "1234" title = "Gucci Belt" price ={290.00}  image = "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1580211003/406831_0YA0G_1000_001_100_0000_Light.jpg" />

                </div>

                <div className='promo_row'>

                </div>

            </div>

        </div>

    </div>
    
  )
}

export default Promotion; 
