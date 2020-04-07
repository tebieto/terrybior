import React from 'react';

import './checkout-item.styles.scss';

const CheckOutItem = ( { cartItem: { name, imageUrl, quantity, price} } ) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt={name} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <span className='removeButton'>&#10005;</span>
    </div>
);

export default CheckOutItem