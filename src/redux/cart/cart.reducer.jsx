import { cartActionTypes } from './cart.types'
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
    showCartDropdown: false,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.SHOW_DROP_DOWN:
            return {
                ...state,
                showCartDropdown: !state.showCartDropdown
            }
        case cartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;