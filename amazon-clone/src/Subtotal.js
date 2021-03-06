import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";
import {useHistory} from "react-router-dom";
import AnimationPage from "./AnimationPage";
import Admin from "./Admin";
import {db} from "./firebase";

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();

    return (<div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        {/* This is the part being rendered onto the screen, what we see */}
                        <p>
                            Subtotal({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />Send as a gift
                        </small>
                    </>
                )}

                // These are parameters to format the way the subtotal is presented on the page
                decimalScale={2}    //2 decimal places to the left in the subtotal
                value={getBasketTotal(basket)} // adding the products in the cart, ROUND OR SQUARE BRACKET
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            
            <AnimationPage>
                <button onClick={e => history.push('./payment')}>Proceed to Checkout</button>
            </AnimationPage>

        </div>
    );
}

export default Subtotal