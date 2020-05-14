import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-selector";
import "./directory.scss";

const Directory = ({ directory }) => {
  console.log(directory);
  return (
    <div className="directory-menu">
      {directory.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const mapState = createStructuredSelector({
  directory: selectDirectorySections,
});
export default connect(mapState, null)(Directory);
