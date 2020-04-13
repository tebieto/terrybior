import React from 'react';
import { Route} from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { AddShopCollections } from '../../redux/shop/shop.actions';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const CollectionpageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount () {
        
        const { AddShopCollections } = this.props;

        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapShot => {
            const newCollections = convertCollectionsSnapshotToMap(snapShot);

            AddShopCollections(newCollections);
            this.setState({ loading: false });
        });
    }

    componentWillUnmount(){
        this.unsubscribeFromSnapshot();
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props) => 
                        <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => 
                        <CollectionpageWithSpinner isLoading={loading} {...props} />} />
            </div>
        );
    }
    
}

const mapDispatchToProps = dispatch => ({
    AddShopCollections: collections => dispatch(AddShopCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);