import React from "react";
import { Button, Container, Link } from "react-bootstrap";

const ContentBody = () => {
  return (
    <Container>
      <h1 className="d-flex flex-column align-items-center mt-5 text-center servic">
        Residencia de Adultos Mayores San Francisco
      </h1>
      <h3 className="content d-flex flex-column align-items-center text-center mb-5 ">
        Excelencia y compromiso
      </h3>
      <div className="content d-flex justify-content-between">
        <div className="text-center">
          <img
            alt="."
            className="w-30 h-30"
            src="images/24-hourss.png"
            style={{ width: "80px" }}
          />
          <p className="servic">Atención las 24 hs. del día</p>
        </div>
        <div className="text-center">
          <img
            alt="."
            className="w-30 h-30"
            src="images/clipboard-heart.png"
            style={{ width: "80px" }}
          />
          <p className="servic">Los mejores cuidados a cada necesidad</p>
        </div>
        <div className="text-center">
          <img
            alt="."
            className="w-30 h-30"
            src="images/thermometer.png"
            style={{ width: "80px" }}
          />
          <p className="servic">Promovemos la calidad de vida</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <Button
          href="https://docs.google.com/forms/d/1iiXehcG8QMIhszSkeS_KKRKS4oO45WkSU8b5aGnbmEo/viewform?edit_requested=true"
          size="lg"
          className="btn-custom mt-5"
          target="_blank" // Añade el atributo target="_blank"
        >
          Conocé más sobre nosotros
        </Button>
      </div>
      <div></div>
    </Container>
  );
};

export default ContentBody;
