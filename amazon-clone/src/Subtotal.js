import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();

    return (<div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        {/* This is the part being rendered onto the screen, what we see */}
                        <p>
                            Subtotal({basket.length} items):
                            <strong>0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}

                // These are parameters to format the way the subtotal is presented on the page
                decimalScale={2}    //2 decimal places to the left in the subtotal
                value={getBasketTotal[basket]} // adding the products in the cart, ROUND OR SQUARE BRACKET
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>

        </div>
    );
}

export default Subtotal