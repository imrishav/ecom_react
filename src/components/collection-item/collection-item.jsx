import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/action";

import { Link, Route } from "react-router-dom";

import Icon from "../moonIcon/icons";
import Button from "../button/button";
import "./collection-item.scss";

const CollectionItem = ({ item, addItem }) => {
  const { title, price, imageUrl, id } = item;
  const url = encodeURIComponent(title);
  console.log("items", item);
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{title}</span>
        <span className="price">{price}</span>
      </div>
      <div className="ppp">
        <span className="opt">
          <Icon icon="heart" size={20} color="black" />
        </span>
        <span className="opt">
          <Icon icon="plus" size={20} color="black" />
        </span>
        <Link
          to={{
            pathname: `/product/${id}`,
            details: item,
          }}
          className="logo-container"
        >
          <Icon
            icon="forward"
            size={20}
            color="black"
            onClick={() => console.log("clicked")}
          />
        </Link>
      </div>
      <Button invert onClick={() => addItem(item)}>
        ADD TO CART
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
