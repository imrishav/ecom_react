import React from "react";
import { withRouter } from "react-router-dom";

import "./cartDropDown.scss";

import CartItem from "../cart-item/cartItem";
import Button from "../button/button";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelector";
import { cartToggle } from "../../redux/cart/action";

const CartDropDown = ({ cartItems, history, dispatch, cart }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Cart is Emptty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push("/checkout");
          dispatch(cartToggle(!cart));
        }}
      >
        Checkout
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.show,
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
