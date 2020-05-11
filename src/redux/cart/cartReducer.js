import { addItemToCart } from "../../components/cart/cartUtils";

const intitalState = {
  show: false,
  cartItems: [],
};

const cartReducer = (state = intitalState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        show: action.payload,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
