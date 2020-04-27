import React from 'react';
import { connect } from 'react-redux';

import { removeCartItem, addCartItem, reduceCartItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckOutItem = ( { cartItem, removeCartItem, addCartItem, reduceCartItem } ) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => reduceCartItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addCartItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={() => removeCartItem(cartItem)}>&#10005;</span>
        </div>
    );
};


const dispatchStateToProps = dispatch => ({
    removeCartItem: item => dispatch(removeCartItem(item)),
    addCartItem: item => dispatch(addCartItem(item)),
    reduceCartItem: item => dispatch(reduceCartItem(item))
});

export default connect(null, dispatchStateToProps)(CheckOutItem);