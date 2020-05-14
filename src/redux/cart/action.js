export const cartToggle = (val) => ({
  type: "TOGGLE",
  payload: val,
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});

export const clearItem = (item) => ({
  type: "CLEAR_ITEM_FROM_CART",
  payload: item,
});
