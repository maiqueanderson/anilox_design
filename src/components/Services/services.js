import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Btn from "../Btn";
import { faArrowsRotate, faBox, faCalendarAlt, faCloud, faFileExport, faLightbulb, faObjectUngroup, faPenRuler, faTachographDigital } from '@fortawesome/free-solid-svg-icons'
import './services.css';

const Services = () => {
  return (
    <Container>
      <Row>
        <Col className="my-5 py-5">
          <Row className="services_text">Com a Anilox Design</Row>

          <Row className="services_text">sua empresa tem</Row>

          <Row className="services_text_under">MUITO MAIS VANTAGENS</Row>

          <Row className="mx-sm-0 mx-3">
          <Btn texto='Faça um Orçamento'/>
          </Row>
        </Col>
        
        <Col>
          <Row className="linha">
            <Col xs={12} lg={4} className="">
                <div className="services_space mx-5 mx-lg-0">
                <span className="m-3"><FontAwesomeIcon icon={faCalendarAlt} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span className="p-3">Artes entregues em até 48h</span>
                </div>
            </Col>

            <Col xs={12} lg={4}>
            <div className="services_space mx-5 mx-lg-0">
                    <span className="m-3"><FontAwesomeIcon icon={faArrowsRotate} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span className="p-3">Alterações ilimitadas</span>
                </div>
            </Col>

            <Col xs={12} lg={4}>
            <div className="services_space mx-5 mx-lg-0">
                    <span className="m-3"><FontAwesomeIcon icon={faPenRuler} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span className="p-3">Arte técnica para flexográfia</span>
                </div>
            </Col>
          </Row>

          <Row className="linha ">
            <Col xs={12} lg={4}>
            <div className="services_space mx-5 mx-lg-0">
                    <span className="m-3"><FontAwesomeIcon icon={faLightbulb} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span className="p-3">Ideias criativas</span>
                </div>
            </Col >

            <Col xs={12} lg={4}>
            <div className="services_space mx-5 mx-lg-0">
                    <span className="m-3"><FontAwesomeIcon icon={faBox} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span className="p-3">Mockup em 3D para seus clientes</span>
                </div>
            </Col>

            <Col xs={12} lg={4}>
            <div className="services_space mx-5 mx-lg-0">
                    <span className="m-3"><FontAwesomeIcon icon={faTachographDigital} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span className="p-3">Ficha de impressão digital</span>
                </div>
            </Col>

          </Row>
          <Row className="linha mb-5">
            <Col xs={12} lg={4}>
            <div className="services_space mx-5 mx-lg-0">
                    <span className="m-3"><FontAwesomeIcon icon={faObjectUngroup} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span className="p-3">Fechamento de arquivos</span>
                </div>
            </Col>

            <Col xs={12} lg={4}>
            <div className="services_space mx-5 mx-lg-0">
                    <span className="m-3"><FontAwesomeIcon icon={faFileExport} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span className="p-3">Envio de artes para a clicheria</span>
                </div>
            </Col>

            <Col xs={12} lg={4}>
            <div className="services_space mx-5 mx-lg-0 mb-5 mb-lg-0">
                    <span className="m-3"><FontAwesomeIcon icon={faCloud} size="2xl" style={{color: "#b080b0",}} /></span>
                    <span className="p-3">Todos os arquivos na nuvem</span>
                </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
