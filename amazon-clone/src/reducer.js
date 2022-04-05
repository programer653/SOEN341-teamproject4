export const initialState = {
    basket: [],
};

//maps into the basket, iterate in the basket and tally up in the total
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.itemPrice + amount, 0);  

    
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
        case "REMOVE_FROM_BASKET":
            
            // we want to make sure that all of the items from same id doesnt get removed
            //remove the first match
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

             //this is the new basket
             let newBasket = [...state.basket];

            if (index >= 0){
                //find item in the basket
                //this is going to be creating a new basket
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product(id: ${action.id}) as its not in basket!`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        
        default:
            return state;
    }
};

export default reducer;