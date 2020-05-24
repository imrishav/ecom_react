import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchCategoriesAsync } from "../../redux/directory/actions";

import {
  selectDirectorySections,
  selectCatFromDB,
} from "../../redux/directory/directory-selector";
import "./directory.scss";
import { useEffect } from "react";

import { fetchCategoriesStart } from "../../redux/directory/actions";

const Directory = ({ directory, fetchCategoriesStart, category }) => {
  useEffect(() => {
    fetchCategoriesStart();
  }, []);

  return (
    <div className="directory-menu">
      {category.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const mapState = createStructuredSelector({
  directory: selectDirectorySections,
  category: selectCatFromDB,
});

const mapDispatch = (dispatch) => ({
  fetchCategoriesStart: () => dispatch(fetchCategoriesStart()),
});

export default connect(mapState, mapDispatch)(Directory);
