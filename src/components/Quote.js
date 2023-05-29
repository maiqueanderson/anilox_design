import React from "react";
import "./quote.css";
import { Col, Container, Row } from "react-bootstrap";

const Quote = () => {
  return (
    <section className="quote_image">
      <div className="my-5">
        <Container>
          <Row className="mx-0 my-5">
            <Col className="my-5">
              <Row className="quote_text textos">Assista ao video</Row>
              <Row className="quote_text ">e conheça o</Row>
              <Row className="quote_text__under">NOSSO TRABALHO</Row>
            </Col>

            <Col className="mx-3 p-2">
              <iframe
                className="video d-none d-lg-inline-block"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Y_7JoWYBdSI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <iframe
                className="d-lg-none my-5 "
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Y_7JoWYBdSI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Quote;
