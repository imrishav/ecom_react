import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { productFetchStart } from "../../redux/product/actions";
import { createStructuredSelector } from "reselect";

import { selectProductOnly } from "../../redux/product/productSelector";
import Button from "../../components/button/button";

import Icon from "../../components/moonIcon/icons";

import Select from "react-select";

import {
  ProductHero,
  ProductSummary,
  PriceComponent,
  RatingComponent,
  BrandInfo,
  Services,
} from "./productStyles";

const colourOptions = [
  {
    value: "ocean",
    label: "Address 1",
    details: "gali no.3",
    color: "#00B8D9",
    isFixed: true,
  },
];

const flavourOptions = [
  {
    value: "vanilla",
    label:
      "Address 2 dasdasdasdasdf4wr 394ug8retgeim8tmm4  t58ut58u 8t4i548ut5 58 u",
    details: "gali no.3",
    rating: "safe",
  },
];

const groupedOptions = [
  {
    label: "Colours",
    options: colourOptions,
  },
  {
    label: "Flavours",
    options: flavourOptions,
  },
];

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const Product = ({ productFetchStart, match, currentProduct }) => {
  console.log("braock", match.params.id);
  const { imageUrl, price, title } = currentProduct;

  useEffect(() => {
    productFetchStart(match.params.id);
  }, []);

  return (
    <div>
      {currentProduct ? (
        <ProductHero>
          <div className="imageClass">
            <img src={imageUrl} alt={title} width={"70%"} />
            <Button invert>ADD TO CART</Button>
          </div>
          <ProductSummary>
            <span className="title">{title}</span>
            <span className="smallSummary">A bit of Product Summary</span>
            <PriceComponent>
              &#x20B9; <span className="disountedPrice"> {price}</span>
              <span className="orginalPrice">&#x20B9; {price - 300}</span>
              <span className="percent">38% OFF</span>
            </PriceComponent>
            <RatingComponent>
              <Icon icon="heart" size={12} color="black" />
              <span>Rating</span>
            </RatingComponent>

            <BrandInfo>
              <div className="imageBrand">
                <img src={imageUrl} alt={title} width={"50%"} />
              </div>
              <span>
                This is a genuine product of ASICS India Pvt. Ltd. The product
                comes with a standard brand warranty of 90 days.
              </span>
            </BrandInfo>
            <Services className="services">
              <div className="delivery">
                <span className="delivery__text1">Delivery To</span>
                <Select
                  defaultValue={colourOptions[1]}
                  options={groupedOptions}
                  formatGroupLabel={formatGroupLabel}
                />
                <span>Estimate dummy</span>
              </div>
              <div className="warranty">
                <ul>
                  <li>Product Genuity</li>
                  <li>Return Policy</li>
                  <li>Cash On Delivery available</li>
                </ul>
              </div>
            </Services>
            <div className="productOptions">
              {/* different for different Items */}
              <span>Size</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>12</span>
            </div>
          </ProductSummary>
        </ProductHero>
      ) : null}
    </div>
  );
};

const mapState = createStructuredSelector({
  currentProduct: selectProductOnly,
});

const mapDispatch = (dispatch) => ({
  productFetchStart: (id) => dispatch(productFetchStart(id)),
});

export default connect(mapState, mapDispatch)(Product);
