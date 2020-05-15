import React, { useEffect, Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  covertCollectionSnapshotToMpa,
} from "../../firebase/firebase";

import { updateCollections } from "../../redux/shop/actions";

import Collection from "../collection/collection";
import CollectionOveriew from "../../components/collectionOverview/collectionOverview";

class Shop extends Component {
  unsubs = null;

  componentDidMount() {
    const { updateCollection } = this.props;

    const collectionRef = firestore.collection("collections");

    this.unsubs = collectionRef.onSnapshot(async (snap) => {
      const collection = covertCollectionSnapshotToMpa(snap);
      updateCollection(collection);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOveriew} />
        <Route path={`${match.path}/:collectionId/`} component={Collection} />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  updateCollection: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatch)(Shop);
