import { createSelector } from "reselect";

const selectProduct = (state) => state.product;

export const selectProductOnly = createSelector(
  [selectProduct],
  (product) => product.product
);
