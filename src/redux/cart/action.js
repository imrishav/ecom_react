export const cartToggle = (val) => ({
  type: "TOGGLE",
  payload: val,
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});
