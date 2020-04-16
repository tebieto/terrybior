import React from 'react';
import { Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const CollectionpageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync()
    }

     render() {
        const { match, isFetchingCollections } = this.props;

        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props) => 
                        <CollectionOverviewWithSpinner isLoading={isFetchingCollections} {...props} />} />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => 
                        <CollectionpageWithSpinner isLoading={isFetchingCollections} {...props} />} />
            </div>
        );
    }
    
}

const mapStateToProps = createStructuredSelector({
    isFetchingCollections: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
