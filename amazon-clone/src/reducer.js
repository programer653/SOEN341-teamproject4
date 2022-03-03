export const initialState = {
    basket: [],
};

//maps into the basket, iterate in the basket and tally up in the total
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);  

    
// state: the state of the application
// action: what we are trying to do, ex.: add to cart, remove from cart, etc.
const reducer = (state, action) => {
    // dispatch the action
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state, //Return original state of the cart
                // push the item into the basket
                basket: [...state.basket, action.item], //Current state of basket, the action that is going to be done
            };
        default:
            return state;
    }
};

export default reducer;