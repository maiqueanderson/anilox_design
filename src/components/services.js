import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import './services.css';

const Services = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Row className="services_text">Com a Anilox Design</Row>

          <Row className="services_text">sua empresa tem</Row>

          <Row className="services_text_under">MUITO MAIS VANTAGENS</Row>

          <Row>
            <Button variant="dark" className="services_button">Faça um Orçamento</Button>
          </Row>
        </Col>
        
        <Col>
          <Row>
            <Col>
                <div className="services_space">
                <span><FontAwesomeIcon icon={faCalendar} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span>Artes entregues em até 24h</span>
                </div>
            </Col>

            <Col>
            <div className="services_space">
                    <span><FontAwesomeIcon icon={faCalendar} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span>Alterações ilimitadas</span>
                </div>
            </Col>

            <Col>
            <div className="services_space">
                    <span><FontAwesomeIcon icon={faCalendar} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span>Arte técnica para flexográfia</span>
                </div>
            </Col>
          </Row>

          <Row>
            <Col>
            <div className="services_space">
                    <span><FontAwesomeIcon icon={faCalendar} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span>Ideias criativas</span>
                </div>
            </Col>

            <Col>
            <div className="services_space">
                    <span><FontAwesomeIcon icon={faCalendar} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span>Mockup em 3D para seus clientes</span>
                </div>
            </Col>

            <Col>
            <div className="services_space">
                    <span><FontAwesomeIcon icon={faCalendar} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span>Arquivos em alta definição</span>
                </div>
            </Col>

          </Row>
          <Row>
            <Col>
            <div className="services_space">
                    <span><FontAwesomeIcon icon={faCalendar} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span>Fechamento de arquivos</span>
                </div>
            </Col>

            <Col>
            <div className="services_space">
                    <span><FontAwesomeIcon icon={faCalendar} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span>Envio de artes prontas para a clicheria</span>
                </div>
            </Col>

            <Col>
            <div className="services_space">
                    <span><FontAwesomeIcon icon={faCalendar} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span>Atendimento por WhatsApp</span>
                </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
