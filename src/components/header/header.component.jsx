import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdwon/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectShowCartDropdown } from '../../redux/cart/cart.selectors';

import { HeaderContainer, LogoContainer, OptionContainer, OptionsContainer } from './header.styles';

const Header = ({ currentUser, showCartDropdown }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionContainer to='/shop'>SHOP</OptionContainer>
            <OptionContainer to='/contact'>CONTACT</OptionContainer>
            {
                currentUser ?
                <OptionContainer as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionContainer>
                :
                <Link to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </OptionsContainer>
            {
             !showCartDropdown ? null
             : <CartDropdown />
            }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    showCartDropdown: selectShowCartDropdown
});

export default connect(mapStateToProps)(Header);