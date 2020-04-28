import { cartActionTypes } from './cart.types';

export const toggleCartDropdown  = () => ({
    type: cartActionTypes.SHOW_DROP_DOWN
});

export const addCartItem = item => ({
    type: cartActionTypes.ADD_CART_ITEM,
    payload: item
});

export const removeCartItem = item => ({
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: item
});

export const reduceCartItem = item => ({
    type: cartActionTypes.REDUCE_CART_ITEM,
    payload: item
});

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
});