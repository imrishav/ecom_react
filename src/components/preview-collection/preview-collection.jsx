import React from "react";

import CollectionItem from "../collection-item/collection-item";
import "./preview-collection.scss";

const PreviewCollection = ({ title, category }) => {
  console.log("categories", title);
  return (
    <>
      {category.length > 1 ? (
        <div className="collection-preview">
          <h1 className="title">{title.toUpperCase()}</h1>
          <div className="preview">
            {category
              .filter((item, idx) => idx < 4)
              .map((item) => {
                return <CollectionItem key={item.id} item={item} />;
              })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PreviewCollection;
