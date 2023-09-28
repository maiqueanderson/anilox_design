import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import about_image from "../../assets/sobre_anilox_design_empresa.png";

import "./AboutHero.css";

const AboutHero = () => {
  return (
    <>
      <h1 hidden>Anilox Design flexográfico Sobre</h1>
      <Container>
        <Row className="mx-0 my-5">
          <Col>
            <Row className="about_hero_text">Uma tragetória de</Row>
            <Row className="about_hero_text about_hero_text_under">
              sucesso!
            </Row>
            <Row className="mx-0 my-5">
              <p className="about_paragrafo">
                Na vanguarda da indústria flexográfica, estamos aqui para elevar
                o design de suas embalagens a um novo patamar. Junte-se a nós na
                jornada de transformar sua visão em realidade.
              </p>
            </Row>
          </Col>
          <Col>
            <Image className="about_image my-5" src={about_image} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutHero;
