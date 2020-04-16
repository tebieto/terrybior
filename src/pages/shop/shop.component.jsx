import React from 'react';
import { Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart()
    }

    render() {
        const { match } = this.props;

        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    component={CollectionOverviewContainer} />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer} />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isFetchingCollections: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
