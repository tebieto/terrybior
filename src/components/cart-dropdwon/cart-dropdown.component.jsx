import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(({ name }, index) =>(
                <div key={index}>{name}</div>
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);