import React from "react";
import { Button, Container } from "react-bootstrap";

const ContentBody = () => {
  return (
    <Container>
      <h1 className="d-flex flex-column align-items-center mt-5 text-center">
        Residencia de Adultos Mayores San Francisco
      </h1>
      <h3 className="content d-flex flex-column align-items-center text-center mb-5 ">Excelencia y compromiso</h3>
      <div className="content d-flex justify-content-between">
        <div className="text-center">
          <img
            alt="."
            className="w-30 h-30"
            src="images/24-hourss.png"
            style={{ width: "80px" }}
          />
          <p>Atención las 24 hs. del día</p>
        </div>
        <div className="text-center">
          <img
            alt="."
            className="w-30 h-30"
            src="images/clipboard-heart.png"
            style={{ width: "80px" }}
          />
          <p>Los mejores cuidados a cada necesidad</p>
        </div>
        <div className="text-center">
          <img
            alt="."
            className="w-30 h-30"
            src="images/thermometer.png"
            style={{ width: "80px" }}
          />
          <p>Promovemos la calidad de vida</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <Button variant="secondary" size="lg" className="mt-5">
          Conocé más sobre nosotros
        </Button>
      </div>
    </Container>
  );
};

export default ContentBody;
