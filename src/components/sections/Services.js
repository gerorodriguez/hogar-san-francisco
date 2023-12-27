import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsCheck } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";

const Services = () => {
  const serviceList1 = [
    "Lavandería",
    "Actividades recreativas",
    "Programa de Cuidados Paliativos",
    "Dietas especializadas",
    "Habitaciones amplias y luminosas",
    "Espacios de esparcimiento",
    "Peluquería y Manicuría",
  ];

  const serviceList2 = [
    "Atención medica integral las 24hs.",
    "Enfermería profesional las 24hs.",
    "Seguimiento médico diario",
    "Atención psicosocial permanente",
    "Acompañamiento Terapéutico",
    "Kinesiología y Rehabilitación",
  ];

  const renderServiceList = (list) => {
    return (
      <ul>
        {list.map((service, index) => (
          <li key={index}>
            <BsCheckCircle />
            <span> {service}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Container className="cold">
      <Row>
        <Col className="servic ">
          <h1>Servicios Integrales</h1>
        </Col>
      </Row>
      <Row className="list">
        <Col md={6}>{renderServiceList(serviceList1)}</Col>
        <Col md={6}>{renderServiceList(serviceList2)}</Col>
      </Row>
    </Container>
  );
};

export default Services;
