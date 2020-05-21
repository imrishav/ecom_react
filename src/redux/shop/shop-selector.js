import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopItems2 = createSelector(
  [selectShop],
  (shop) => shop.newColl
);

export const selectCollectionForPre2 = createSelector(
  [selectShopItems2],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollectionForPre = createSelector(
  [selectShopItems],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopItems], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectCollection2 = (collectionUrlParam) =>
  createSelector([selectShopItems2], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
