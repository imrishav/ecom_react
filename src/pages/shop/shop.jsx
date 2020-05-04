import React, { Component } from "react";
import SHOPDATA from "./shop-data";

import PreviewCollection from "../../components/preview-collection/preview-collection";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOPDATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...other }) => {
          return <PreviewCollection key={id} {...other} />;
        })}
      </div>
    );
  }
}
