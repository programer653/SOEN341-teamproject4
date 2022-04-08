import React, {useState, useEffect} from 'react'
import Product from "./Product";
import "./ProductDetails.css";
import {useStateValue} from "./StateProvider";
import {db} from "./firebase";
import {useHistory, useParams, Link} from "react-router-dom";

function ProductDetails() {  

    const [product, setProduct] = useState([]);
    const {id} = useParams();

    // useEffect(() => {
    //     db.child(`Products/${id}`).get().then((snapshot) => {
    //         if(snapshot.exists()) {
    //             setProduct({...snapshot.val()});
    //         }
    //         else {
    //             setProduct({})
    //         }
    //     });
    // }, [id]);

    console.log("product", product);

    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default ProductDetails;