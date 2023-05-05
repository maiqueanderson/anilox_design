import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

import "./Brands.css";
import fabrica from "../assets/brands/fabricaDeCaixa.png";
import nevada from "../assets/brands/nevada.png";
import delinear from "../assets/brands/delinear.png";
import ekobom from "../assets/brands/ekobom.png";
import pastel from "../assets/brands/maispasteis.png";
import induslab from "../assets/brands/induslab.png";
import cheiro from "../assets/brands/cheiroDePizza.png";
import flexo from "../assets/brands/flexoPremium.png";

const Brands = () => {
  return (
    <div className="brands_content">
      <Container>
        <Row className="mx-5">
          <h3 className="mt-5 pt-5 mb-0 text-light brand_title">Clientes</h3>
          <h2 className="text-light brand_title_under">Parceria com grandes marcas</h2>
        </Row>

        <Row className="my-5 text-light mx-5" >
          <Col xs={12} lg={3} className="px-5 px-lg-0 mb-5 mb-lg-0 ">
            <div className="marca">
              <Image src={fabrica} />
              <p className="brand_text">
                Criação de todas as artes dos clientes da Fábrica de Caixa desde
                2015
              </p>
            </div>
          </Col>

          <Col xs={12} lg={3} className="px-5 px-lg-0 mb-5 mb-lg-0 ">
            <div className="marca">
              <Image src={nevada} />
              <p className="brand_text">
              Criação de todas as artes
dos clientes do Grupo Nevada
de 2016 até 2018
              </p>
            </div>
          </Col>

          <Col xs={12} lg={3} className="px-5 px-lg-0 mb-5 mb-lg-0">
            <div className="marca">
              <Image src={delinear} />
              <p className="brand_text">
              Criação das artes e fechamento
de arquivos da Delinear Bahia
em 2018
              </p>
            </div>
          </Col>

          <Col xs={12} lg={3} className="px-5 px-lg-0 mb-5 mb-lg-0">
            <div className="marca">
              <Image src={ekobom} />
              <p className="brand_text">
              Criação da arte das embalagens de
papelão da marca Ekobom do
grupo Atakarejo
              </p>
            </div>
          </Col>
        </Row>

        <Row className="my-5 text-light mx-5 pb-5" >
          <Col xs={12} lg={3} className="px-5 px-lg-0 mb-5 mb-lg-0">
            <div className="marca">
              <Image src={pastel} />
              <p className="brand_text">
              Criação de todas as artes das
embalagens de papelão
da Mais Pastel
              </p>
            </div>
          </Col>

          <Col xs={12} lg={3} className="px-5 px-lg-0 mb-5">
            <div className="marca">
              <Image src={induslab} />
              <p className="brand_text">
              Criação de todas as artes das
embalagens de papelão
da Induslab
              </p>
            </div>
          </Col>

          <Col xs={12} lg={3} className="px-5 px-lg-0 mb-5">
            <div className="marca">
              <Image src={cheiro} />
              <p className="brand_text">
              Criação de todas as artes das
embalagens de papelão
da Cheiro de Pizza
              </p>
            </div>
          </Col>

          <Col xs={12} lg={3} className="px-5 px-lg-0 mb-5">
            <div className="marca">
              <Image src={flexo} />
              <p className="brand_text">
              Colaboração no fechamento
de arquivos para clichês
da Flexo Premium
              </p>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Brands;
