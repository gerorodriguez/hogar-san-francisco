import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselWords = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img alt="." className="img-fluid w-100" src="images/residencia.png" />
        <Carousel.Caption className="d-flex justify-content-center">
          <h3>Hola</h3>
          <h3>Hola</h3>
          <h3>Hola</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          alt="."
          class="img-fluid"
          src="https://acdn.mitiendanube.com/stores/219/431/themes/rio/1-slide-1695741399440-2889794928-7fc9dd715d4c764e08e65783d0c8538d1695741420-1920-1920.webp?1560854256"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselWords;
