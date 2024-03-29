import {React,  useState} from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import imageClient from "../../assets/client_happy.jpg";
import Btn from "../Btn/Btn";
import ContactForm from "../Contact/ContactForm";
import "./Client.css";

const Client = () => {

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
      <Row>
        <Col xs={12} lg={6}>
          <Image className="client_image" src={imageClient} />
        </Col>

        <Col xs={12} lg={6}>
          <div>
            <h2 className="client_text">Seu cliente mais feliz,</h2>
            <h2 className="client_text_under">sua empresa com</h2>
            <h2 className="client_text_under mb-3">mais resultados.</h2>

            <p>
              Na Anilox Design, acreditamos firmemente que a felicidade do seu
              cliente é a chave para o sucesso de sua empresa. Quando seu
              cliente está satisfeito, sua empresa colhe os frutos em forma de
              resultados positivos. Trabalhamos incansavelmente para criar
              designs de embalagens que não apenas encantam, mas também
              impulsionam o crescimento do seu negócio. Sua felicidade e sucesso
              são nossa prioridade.
            </p>

            <Btn texto='Vamos Conversar?' onClick={handleShow}/>
           
          </div>
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

export default Client;
