import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const CarouselWords = () => {
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
  return (
    <Carousel>
      <Carousel.Item>
        <img
          alt="."
          className={`w-100 ${isDesktop ? "" : ""}`}
          src="images/reading.jpeg"
          style={{ maxHeight: "895px" }}
        />
        <Carousel.Caption className=""></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="."
          className={`w-100 ${isDesktop ? "" : ""}`}
          src="images/dddd.jpg"
          style={{ maxHeight: "895px" }}
        />
        <Carousel.Caption className=""></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="."
          className={`w-100 ${isDesktop ? "" : ""}`}
          src="images/granja.jpg"
          style={{ maxHeight: "895px" }}
        />
        <Carousel.Caption className=""></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselWords;
