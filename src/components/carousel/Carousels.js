import Carousel from "react-bootstrap/Carousel";

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          alt="."
          class="img-fluid"
          src="https://acdn.mitiendanube.com/stores/219/431/themes/rio/1-slide-1693522291682-6746997536-4707a8e1093671d2aaf12e6833440e421693522310-1920-1920.webp?1032368351"
        />
        <Carousel.Caption>
          <h3>Winter Sale</h3>
          <p>Promos con todas las tarjetas</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          alt="."
          class="img-fluid"
          src="https://acdn.mitiendanube.com/stores/219/431/themes/rio/1-slide-1695741399440-2889794928-7fc9dd715d4c764e08e65783d0c8538d1695741420-1920-1920.webp?1560854256"
        />
        <Carousel.Caption>
          <h3>Winter Sale</h3>
          <p>Promos con todas las tarjetas</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
