import React, {useState} from "react";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";
import Admin from "./Admin";

function Payment() {
    const [{basket}, dispatch] = useStateValue();

    const [products, setProducts] = useState([]);
    const[itemName, setItemName] = useState('');
    const[itemPrice, setItemPrice] = useState(0);
    const[itemImage, setItemImage] = useState(null);

    return (
        <div className="payment">
            <div className="payment-container">
                <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>

                {/* Payment section - delivery address */}
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>User email</p>
                        <p>123 Code Avenue</p>
                        <p>Montreal, QC</p>
                    </div>
                </div>

                {/* Payment section - review items */}
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment-items">
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            itemName={item.itemName}
                            itemImage={item.itemImage}
                            itemPrice={item.itemPrice}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - payment method */}
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
                        {/* Use Stripe */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment;