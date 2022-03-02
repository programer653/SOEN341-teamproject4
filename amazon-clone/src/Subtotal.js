import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

function Subtotal() {
    return <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        {/* This is the part being rendered onto the screen, what we see */}
                        <p>
                            Subtotal(0 items):
                            <strong>0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}

                // These are parameters to format the way the subtotal is presented on the page
                decimalScale={2}    //2 decimal places to the left in the subtotal
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>

        </div>
}

export default Subtotal