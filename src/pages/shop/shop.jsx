import React, { useEffect, Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  covertCollectionSnapshotToMpa,
} from "../../firebase/firebase";

import { updateCollections } from "../../redux/shop/actions";

import WithSpinner from "../../components/withSpinner/withSpinner";

import Collection from "../collection/collection";
import CollectionOveriew from "../../components/collectionOverview/collectionOverview";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOveriew);
const CollectionSpinner = WithSpinner(Collection);

class Shop extends Component {
  state = {
    loading: true,
  };
  unsubs = null;

  componentDidMount() {
    const { updateCollection } = this.props;

    const collectionRef = firestore.collection("collections");

    this.unsubs = collectionRef.get().then((snap) => {
      const collection = covertCollectionSnapshotToMpa(snap);
      updateCollection(collection);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    console.log("state", loading);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId/`}
          render={(props) => (
            <CollectionSpinner isLoading={loading} {...props} />
          )}
          component={Collection}
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  updateCollection: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatch)(Shop);
