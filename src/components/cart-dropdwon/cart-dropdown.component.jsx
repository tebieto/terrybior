import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import { connect } from 'react-redux'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;