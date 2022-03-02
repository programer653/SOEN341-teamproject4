export const initialState = {
    basket: [],
};

// state: the state of the application
// action: what we are trying to do, ex.: add to cart, remove from cart, etc.
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state, //Return original state of the cart
                basket: [...state.basket, action.item], //Current state of basket, the action that is going to be done
            };
        default:
            return state;
    }
};

export default reducer;