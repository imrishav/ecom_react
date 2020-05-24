import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { productFetchStart } from "../../redux/product/actions";
import { createStructuredSelector } from "reselect";

import { selectProductOnly } from "../../redux/product/productSelector";
import Button from "../../components/button/button";

import Icon from "../../components/moonIcon/icons";

import {
  ProductHero,
  ProductSummary,
  PriceComponent,
  RatingComponent,
  BrandInfo,
} from "./productStyles";

const Product = ({ productFetchStart, match, currentProduct }) => {
  console.log("braock", match.params.id);
  const { imageUrl, price, title } = currentProduct;

  useEffect(() => {
    productFetchStart(match.params.id);
  }, []);

  console.log("currentProduct", currentProduct);

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
            <div className="offers">
              <ul>
                <li>Bank Offer 1</li>
                <li>Bank Offer 1</li>
                <li>Bank Offer 1</li>
              </ul>
            </div>
            <BrandInfo>
              <div className="imageBrand">
                <img src={imageUrl} alt={title} width={"50%"} />
              </div>
              <span>
                This is a genuine product of ASICS India Pvt. Ltd. The product
                comes with a standard brand warranty of 90 days.
              </span>
            </BrandInfo>
            <div className="services">
              <div className="delviery">
                <span>Delivery To</span>
                <span>Drop Down Goes Here </span>
                <span>Estimate dummy</span>
              </div>
              <div className="warranty">
                <ul>
                  <li>Product Genuity</li>
                  <li>Return Policy</li>
                  <li>Cash On Delivery available</li>
                </ul>
              </div>
            </div>
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
