import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { authentication } from "../../firebase/firebase";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cartIcon/cartIcon";
import CartDropDown from "../cart/cartDropDown";
import Carosel from "../carosel/carosel";
import "./header.scss";

const Header = ({ currentUser, cartShow }) => {
  return (
    <>
      <div className="header">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <form action="#" class="search">
          <input type="text" class="search_input" placeholder="Hotels Here" />
          <button class="search__button">
            <svg class="search__icon">
              {/* <use xlink:href="img/sprites.svg#icon-magnifying-glass"></use> */}
            </svg>
          </button>
        </form>
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
      <div className="selectCat">
        <ul className="selectCat__title">
          <li className="selectCat__options">Electronics</li>
          <li className="selectCat__options">Men</li>
          <li className="selectCat__options">Women</li>
          <li className="selectCat__options">Footwear</li>
        </ul>
      </div>
      <Carosel />
    </>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cartShow: state.cart.show
});

export default connect(mapStateToProps)(Header);
