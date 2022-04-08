import React from "react";
import "./CheckoutApproved.css";
import {useHistory} from "react-router-dom";

function CheckoutApproved() {
    const history = useHistory();

    return(
        <div>
            <h1>Your Order Has Been Placed</h1>
            <h3>Thank You for Shopping!</h3>
            <button onClick={e => history.push('./OrderHistory')}>View my Orders</button>
        </div>
    )
}

export default CheckoutApproved;