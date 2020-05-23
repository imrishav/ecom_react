import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { authentication } from "../../firebase/firebase";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cartIcon/cartIcon";
import CartDropDown from "../cart/cartDropDown";
import "./header.scss";

import { signOutStart } from "../../redux/user/actions";

const Header = ({ currentUser, cartShow, signOutStart }) => {
  const handleSignOut = (e) => {
    e.preventDefault();

    console.log("clicked", currentUser);
    firebase.auth().signOut();
  };
  return (
    <>
      <div className="header">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        {/* <Link to="/shop" className="option">
          CONTACT
        </Link> */}

        <form action="#" className="search">
          <input
            type="text"
            className="search_input"
            placeholder="Search Here"
          />
          <button className="search__button">
            <svg className="search__icon">
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
            <div className="option" onClick={signOutStart}>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cartShow: state.cart.show,
});

const mapDispatch = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatch)(Header);
