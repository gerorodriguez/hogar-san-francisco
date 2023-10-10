import React from "react";
import { Button, Container } from "react-bootstrap";

const Services = () => {
  return (
    <Container>
      <div>
        <h1>Servicios Integrales</h1>
      </div>
      <div>
        <ul>
          <li>Atención médica integral las 24 hs.</li>
          <li>Enfermería profesional las 24 hs.</li>
          <li>Seguimiento médico diario</li>
          <li>Atención psicosocial permanente</li>
          <li>Acompañamiento Terapéutico</li>
          <li>Kinesiología y Rehabilitación</li>
          <li>Estimulación del movimiento</li>
          <li>Programa de Prevención de Caídas y Movilidad</li>
          <li>Servicio de Fonoaudiología y Neuropsicología</li>
          <li>Terapia Ocupacional</li>
          <li>Propuestas y actividades socio-recreativas</li>
          <li>Programa de Cuidados Paliativos</li>
          <li>Psicogeriatría</li>
          <li>Unidad de Cuidados Especiales</li>
          <li>Odontología</li>
          <li>Dietas especializadas y Alimentación Kosher</li>
          <li>Peluquería y Manicuría</li>
          <li>Lavandería</li>
          <li>Habitaciones amplias y luminosas</li>
          <li>Espacios de esparcimiento: Jardín y Biblioteca</li>
        </ul>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <Button variant="secondary" size="lg" className="mt-5">
          Conocé más sobre nosotros
        </Button>
      </div>
    </Container>
  );
};

export default Services;
