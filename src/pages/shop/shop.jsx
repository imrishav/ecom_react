import React, { Component } from "react";
import { Route } from "react-router-dom";

import Collection from "../collection/collection";
import CollectionOveriew from "../../components/collectionOverview/collectionOverview";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOveriew} />
      <Route path={`${match.path}/:collectionId/`} component={Collection} />
    </div>
  );
};

export default Shop;
