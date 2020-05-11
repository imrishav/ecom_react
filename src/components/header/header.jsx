import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { authentication } from "../../firebase/firebase";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cartIcon/cartIcon";
import CartDropDown from "../cart/cartDropDown";
import "./header.scss";

const Header = ({ currentUser, cartShow }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => authentication.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link to="/signin" className="option">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {cartShow ? <CartDropDown /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cartShow: state.cart.show,
});

export default connect(mapStateToProps)(Header);
