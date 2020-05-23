import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <div
              style={{ width: 500, height: 500, backgroundColor: "red" }}
            ></div>
          </Slide>
          <Slide index={1}>
            <div
              style={{ width: 500, height: 500, backgroundColor: "green" }}
            ></div>
            e second Slide.
          </Slide>
          <Slide index={2}>
            <div
              style={{ width: 500, height: 500, backgroundColor: "blue" }}
            ></div>
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}
