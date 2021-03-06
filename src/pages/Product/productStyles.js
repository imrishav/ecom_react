import styled from "styled-components";

export const ProductHero = styled.div`
  display: flex;
  flex-direction: coloumn;
  flex: 0 0 80%;

  .imageClass {
    // background-color: grey;
    padding: 20px;
    flex: 0 0 50%;
  }
`;

export const ProductSummary = styled.div`
  background-color: white;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 28px;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .smallSummary {
    font-size: 25px;
    padding-bottom: 13px;
  }
`;

export const PriceComponent = styled.div`
  display: flex;
  padding-bottom: 10px;

  .disountedPrice {
    font-size: 22px;
    margin-right: 24px;
    font-weight: bold;
  }

  .percent {
    align-self: center;
    margin-left: 21px;
    font-size: 16px;
  }

  .orginalPrice {
    font-size: 19px;
    font-weight: 100;
    align-self: center;

    text-decoration: line-through;
  }
`;

export const RatingComponent = styled.div`
  background-color: green;
  width: 78px;
  display: flex;
  border-radius: 10%;
  justify-content: space-evenly;
  padding: 3px;

  & svg {
    align-self: center;
  }
`;

export const BrandInfo = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 20px;

  .imageBrand {
    flex: 0 0 20%;
    width: 20px;
  }
`;

export const Services = styled.div`
  display: flex;

  .delivery {
    display: flex;
    flex-direction: column;
    flex: 0 0 50%;

    .delivery__text1 {
      font-size: 22px;
      font-weight: 600;
    }
  }
`;
