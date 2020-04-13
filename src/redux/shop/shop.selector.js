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