import ShopActionTypes from './shop.types';

export const AddShopCollections = collections => ({
    type: ShopActionTypes.UPDATE_COLLECTION,
    payload: collections
});