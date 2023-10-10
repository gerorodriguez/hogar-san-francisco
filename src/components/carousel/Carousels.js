import Carousel from "react-bootstrap/Carousel";

function Carousels() {
  return (
    <Carousel className="d-flex ">
      <Carousel.Item>
        <img alt="." className="img-fluid w-100" src="images/residencia.png" />
        <Carousel.Caption className="d-flex justify-content-bottom"></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img alt="." class="img-fluid" src="images/hogar-diego.jpeg" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="." class="img-fluid" src="images/hogar-diego1.jpeg" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="." class="img-fluid" src="images/hogar-diego2.jpeg" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="." class="img-fluid" src="images/hogar-diego3.jpeg" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="." class="img-fluid" src="images/frente.jpg" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="." class="img-fluid" src="images/hogar-beso.jpg" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
