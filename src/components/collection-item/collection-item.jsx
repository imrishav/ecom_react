import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/action";

import Button from "../button/button";
import "./collection-item.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button invert onClick={() => addItem(item)}>
        ADD TO CART
      </Button>
    </div>
  );
  // const { name, price, image } = item;
  // return (
  //   <div className="collection-item">
  //     <div className="image" style={{ backgroundImage: `url(${image})` }} />
  //     <div className="collection-footer">
  //       <span className="name">{name}</span>
  //       <span className="price">{price}</span>
  //     </div>
  //     <Button invert onClick={() => addItem(item)}>
  //       ADD TO CART
  //     </Button>
  //   </div>
  // );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
