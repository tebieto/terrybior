import { cartActionTypes } from './cart.types'
import { addItemToCart, reduceItemInCart } from './cart.utils'

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
        case cartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case cartActionTypes.REDUCE_CART_ITEM:
            return {
                ...state,
                cartItems: reduceItemInCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;