import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item";

import { selectCollection } from "../../redux/shop/shop-selector";
import "./collection.scss";

const Collection = ({ match, collection }) => {
  console.log("dasd", collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapSta = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

// export default Collection;

export default connect(mapSta)(Collection);
//