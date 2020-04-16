import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectShopPreviewCollections = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(keys =>(
        collections[keys]
    )): []
);

export const selectUrlCollection = collectionUrlParam =>
createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionUrlParam] : null
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
<<<<<<< HEAD
);
=======
)
>>>>>>> d125a45db9f354ee2f18ed0c016fae3a0692bbaf
