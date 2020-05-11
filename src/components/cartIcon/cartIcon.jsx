import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";
import { cartToggle } from "../../redux/cart/action";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";
import "./cartIcon.scss";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={() => props.cartToggle(!props.cart)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{props.cartSize}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.show,
  cartSize: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  cartToggle: (val) => dispatch(cartToggle(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
