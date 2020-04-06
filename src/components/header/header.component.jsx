import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdwon/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, showCartDropdown }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
            {
             !showCartDropdown ? null
             : <CartDropdown />
            }
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { showCartDropdown } }) => ({
    currentUser,
    showCartDropdown
});

export default connect(mapStateToProps)(Header);