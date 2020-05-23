import { addItemToCart, removeToCart } from "../../components/cart/cartUtils";
import CartActionTypes from "./actionsTypes";

const intitalState = {
  show: false,
  cartItems: [],
};
// const intitalState = {
//   show: false,
//   cartItems: [
//     {
//       id: 2,
//       imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
//       name: "Blue Beanie",
//       price: 10,
//       quantity: 2,
//     },
//   ],
// };

const cartReducer = (state = intitalState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        show: action.payload,
      };
    case "REMOVE_ITEM":
      console.log(action.payload);
      return {
        ...state,
        cartItems: removeToCart(state.cartItems, action.payload),
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
