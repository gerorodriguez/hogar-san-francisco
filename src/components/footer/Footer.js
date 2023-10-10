import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-secondary text-grey py-4">
      <Container md="4">
        <Row className="align-items-center">
          <Col
            md="4"
            className="d-flex align-items-center justify-content-center"
          >
            <img
              src="images/header-sanfr.png"
              alt="Logo"
              className="img-fluid"
              style={{ width: "185px" }}
            />
          </Col>
          <Col md="4" className="text-center d-flex justify-content-center">
            <div>
              <h5>DÓNDE ESTAMOS</h5>
              <p>
                José Zilli 11 CP:2617
                <br />
                Diego de Alvear, Santa Fe
                <br />
                República Argentina
                <br />
                Email: hogarsanfrancisco.dda@hotmail.com
                <br />
                Teléfono: +54 (3462) 677137
              </p>
            </div>
          </Col>
          <Col
            md="4"
            className="d-flex align-items-center justify-content-center text-center"
          >
            <div>
              <h5>SEGUINOS EN</h5>
              <a
                href="https://www.instagram.com/franciscoresidenciasan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/brand-instagram.png"
                  alt="Instagram"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100064813655438"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/brand-facebook.png"
                  alt="Facebook"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
