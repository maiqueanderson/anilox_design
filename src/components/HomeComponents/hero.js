import {React,  useState} from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import vetorDesktop from "../../assets/vetor.png";
import Btn from "../Btn/Btn";
import "./hero.css";
import ContactForm from "../Contact/ContactForm";


const Hero = () => {

  //configurações para o modal de contato
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <Container>
      <h1 hidden>Anilox Design flexográfico</h1>
      
      <Row className="mx-0 my-5">
        <Col>
        <h2 hidden>Primeira empresa especializada em design flexográfico</h2>
          <Row className="hero_text">Primeira Empresa</Row>
          <Row className="hero_text">especializada em</Row>
          <Row className="hero_text__under">DESIGN FLEXOGRÁFICO</Row>
          <Row className="mx-0 my-5">
            <div className="paragrafo">
              <p>
                Somos a primeira empresa especializada em design flexográfico do
                Brasil, com quase uma década de experiência no mercado. Na
                Anilox Design, nos dedicamos a criar artes incríveis que não só
                encantam seus clientes, mas também se adaptam perfeitamente às
                complexidades do processo de impressão flexográfica.
              </p>
            </div>
          </Row>
          <Row>
            <Btn texto="Entre em Contato" onClick={handleShow} />
          </Row>
        </Col>
        <Col>
          <Image
            className="heroImage my-5 my-lg-0"
            src={vetorDesktop}
            alt="Anilox Design Flexográfico"
          />
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Seu futuro começa agora!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm/>
        </Modal.Body>
       
      </Modal>

    </Container>
  );
};

export default Hero;
