import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import about_image from '../assets/sobre_anilox_design_empresa.png';

import './AboutHero.css';

const AboutHero = () =>{
    return(
     <>
         <Container>
          <Row className="mx-0 my-5">
            <Col>
              <Row className="about_hero_text">Uma tragetória de</Row>
              <Row className="about_hero_text about_hero_text_under">sucesso!</Row>
              <Row className="mx-0 my-5">
                <p className="about_paragrafo">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea
                </p>
              </Row>
             
            </Col>
            <Col>
            <Image className="about_image my-5" src={about_image} />
                   
            </Col>
          </Row>
        </Container>
     </>
    )
}

export default AboutHero;