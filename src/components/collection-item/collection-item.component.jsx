import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component'
import { addCartItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, ImageContainer, NameContainer, CollectionFooterContainer } from './collection-item.styles';

const CollectionItem = ({ item, addCartItem }) => {
    const { name, price, imageUrl} = item;
    return(
        <CollectionItemContainer>
        <ImageContainer imageUrl={imageUrl} />
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <span className='price'>{price}</span>
        </CollectionFooterContainer>
        <CustomButton inverted onClick={() => addCartItem(item)}>Add to cart</CustomButton>
    </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);