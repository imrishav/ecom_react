import React, { useEffect } from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item";

import {
  selectCollection,
  selectCollection2,
} from "../../redux/shop/shop-selector";
import "./collection.scss";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  console.log("old Values", collection);

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {collection.category.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapSta = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  collection2: selectCollection2(ownProps.match.params.collectionId)(state),
  abc: state.directory,
});

// export default Collection;

export default connect(mapSta)(Collection);
//
