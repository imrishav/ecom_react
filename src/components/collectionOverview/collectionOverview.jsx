import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collectionOverview.scss";

import PreviewCollection from "../../components/preview-collection/preview-collection";
import {
  selectShopItems,
  selectCollectionForPre,
} from "../../redux/shop/shop-selector";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...other }) => {
        return <PreviewCollection key={id} {...other} />;
      })}
    </div>
  );
};

const mapState = createStructuredSelector({
  collections: selectCollectionForPre,
});

export default connect(mapState, null)(CollectionOverview);
