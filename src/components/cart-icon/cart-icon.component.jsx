import React from 'react';
import { connect } from 'react-redux'

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import { toggleCartDropdown } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartDropdown, cartItemLength }) => (
    <div className='cart-icon' onClick={() => toggleCartDropdown()}>
        <ShoppingIcon className='shopping-icon' />
<span className='item-count'>{cartItemLength}</span>
    </div>
);

const mapStateToProps = ({cart: { cartItems }}) => ({
    cartItemLength: cartItems.length
});

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);