import React, {useEffect} from 'react'
import Product from "./Product";
import "./ProductDetails.css";
import {useStateValue} from "./StateProvider";
import {useState} from "react";
import Admin from "./Admin";
import {db} from "./firebase";
import {getDoc, doc} from "firebase/firestore";
import { useParams } from "react-router-dom";

function ProductDetails() {

    const [product, setProduct] = useState();
    const params = useParams();

    useEffect(() => {
        // will only run once when the app component loads
        const getProduct = async () => {
            const product = await getDoc(doc(db, "Products", params.id));

        }
        getProduct()

    }, [])

    return(
        <div>

        </div>
    );
}

export default ProductDetails