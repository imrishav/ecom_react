import React, { useEffect, Component } from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { fetchCollectionStart } from "../../redux/shop/actions";

import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop-selector";

import WithSpinner from "../../components/withSpinner/withSpinner";

import Collection from "../collection/collection";
import CollectionOveriew from "../../components/collectionOverview/collectionOverview";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOveriew);
const CollectionSpinner = WithSpinner(Collection);

class Shop extends Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  render() {
    const { match, isCollectionFetching, isCollLoaded } = this.props;
    console.log("ddasdasdasdadadadas", this.props);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId/`}
          render={(props) => (
            <CollectionSpinner isLoading={!isCollLoaded} {...props} />
          )}
          component={Collection}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollLoaded: selectIsCollectionsLoaded,
});
const mapDispatch = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(mapStateToProps, mapDispatch)(Shop);
