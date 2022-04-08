import React, {useState} from "react";
import "./OrderHistory.css";
import { getBasketTotal } from "./reducer";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";



function OrderHistory() {
    const [{basket}, dispatch] = useStateValue();

    const [products, setProducts] = useState([]);
    const[itemName, setItemName] = useState('');
    const[itemPrice, setItemPrice] = useState(0);
    const[itemImage, setItemImage] = useState(null);

    return(
        <div className="orders">
            <div className="order-container">
                <div className="order-title">
                    <h3>Order History</h3>
                </div>
                <div className="order-history">
                    {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            itemName={item.itemName}
                            itemImage={item.itemImage}
                            itemPrice={item.itemPrice}
                            />
                    ))}
                </div>

            </div>

        </div>
    )
}

export default OrderHistory;