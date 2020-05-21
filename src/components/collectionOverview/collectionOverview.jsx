import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collectionOverview.scss";

import PreviewCollection from "../../components/preview-collection/preview-collection";
import {
  selectShopItems,
  selectCollectionForPre,
  selectCollectionForPre2,
} from "../../redux/shop/shop-selector";

const CollectionOverview = ({ collections, coll2 }) => {
  console.log("yeh this", collections);
  console.log("yeh this 2", coll2);
  return (
    <div className="collections-overview">
      {/* {collections.map(({ id, ...other }) => {
        return <PreviewCollection key={id} {...other} />;
      })} */}
      {coll2.map(({ _id, ...other }) => {
        return <PreviewCollection key={_id} {...other} />;
      })}
    </div>
  );
};

const mapState = createStructuredSelector({
  collections: selectCollectionForPre,
  coll2: selectCollectionForPre2,
});

export default connect(mapState, null)(CollectionOverview);
