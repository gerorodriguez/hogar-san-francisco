import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";

function Carousels() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
    <Carousel slide={true} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img alt="." className={`w-100 ${isDesktop ? "" : ""}`} src="images/frente3.jpg" style={{ maxHeight: "895px" }}  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="." className={`w-100 ${isDesktop ? "" : ""}`} src="images/handdd2.jpg" style={{ maxHeight: "895px" }} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="." className={`w-100 ${isDesktop ? "" : ""}`} src="images/nueva2.jpg" style={{ maxHeight: "895px" }} />
        <Carousel.Caption className="d-flex justify-content-bottom"></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="." className={`w-100 ${isDesktop ? "" : ""}`} src="images/back2.jpg" style={{ maxHeight: "895px" }} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="." className={`w-100 ${isDesktop ? "" : ""}`} src="images/nueva3.jpg" style={{ maxHeight: "895px" }} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
