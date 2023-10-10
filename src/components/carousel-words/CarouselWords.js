import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselWords = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img alt="." className="img-fluid w-100" src="images/residencia.png" />
        <Carousel.Caption className="d-flex justify-content-center"></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img alt="." class="img-fluid" src="images/residencia.png" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselWords;
