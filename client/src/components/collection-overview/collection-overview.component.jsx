import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectShopPreviewCollections } from '../../redux/shop/shop.selector';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {
            collections.map(({ id, ...otherProps }) => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }
     </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopPreviewCollections
})

export default connect(mapStateToProps)(CollectionOverview);