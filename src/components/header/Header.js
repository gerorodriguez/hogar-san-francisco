import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Container fluid
    className="d-flex justify-content-center">
      <Row>
        <Col>
          <img
            className="img-fluid"
            src="images/header-hogar.jpg"
            alt="Header"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;