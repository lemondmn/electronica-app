import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
        <Heading>Gobierno de México</Heading>
        </Row>
        <hr />
        <Row>
          <Column>
            <Heading>Coordinador del Posgrado</Heading>
            <Heading>Dr. Enrique Reyes Archundia</Heading>
          </Column>
          <Column>
            <Heading>Correo Electrónico</Heading>
            <Heading>pelectron@itmorelia.edu.mx</Heading>
          </Column>
        </Row>
        <hr />
        <Row>
          <Heading>Avenida Tecnológico #1500 Col Lomas de Santiaguito Morelia, Mich</Heading>
          <Heading>Teléfono +52(443)312-1570 con 10 líneas</Heading>
          <Heading>www.itmorelia.edu.mx</Heading>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;