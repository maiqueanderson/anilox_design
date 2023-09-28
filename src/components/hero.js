import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import vetorDesktop from "../assets/vetor.png";
import "./hero.css";

const Hero = () => {
  return (
    <Container>
      <h1 hidden>Anilox Design flexográfico</h1>
      <Row className="mx-0 my-5">
        <Col>
          <Row className="hero_text">Primeira Empresa</Row>
          <Row className="hero_text">especializada em</Row>
          <Row className="hero_text__under">DESIGN FLEXOGRÁFICO</Row>
          <Row className="mx-0 my-5">
            <p className="paragrafo">
              Somos a primeira empresa especializada em design flexográfico do
              Brasil, com quase uma década de experiência no mercado. Na Anilox
              Design, nos dedicamos a criar artes incríveis que não só encantam
              seus clientes, mas também se adaptam perfeitamente às
              complexidades do processo de impressão flexográfica.
            </p>
          </Row>
          <Row>
            <Button variant="dark" className="hero_button">
              Entre em Contato
            </Button>
          </Row>
        </Col>
        <Col>
          <Image className="heroImage my-5 my-lg-0" src={vetorDesktop} />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
