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

const Directory = ({ directory, getAllCat, categ }) => {
  console.log("directory....", categ);

  useEffect(() => {
    getAllCat();
  }, []);

  return (
    <div className="directory-menu">
      {categ.map(({ _id, ...otherSectionProps }) => {
        return <MenuItem key={_id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const mapState = createStructuredSelector({
  directory: selectDirectorySections,
  categ: selectCatFromDB,
});

const mapDispatch = (dispatch) => ({
  getAllCat: () => dispatch(fetchCategoriesAsync()),
});

export default connect(mapState, mapDispatch)(Directory);
