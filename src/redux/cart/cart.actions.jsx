import { cartActionTypes } from './cart.types';

export const toggleCartDropdown  = () => ({
    type: cartActionTypes.SHOW_DROP_DOWN
});

export const addCartItem = item => ({
    type: cartActionTypes.ADD_CART_ITEM,
    payload: item
})