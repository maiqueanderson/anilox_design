import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";

import imageClient from '../assets/client_happy.jpg';
import './Client.css';

const Client = () =>{
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te
              </p>

              <Button variant="dark" className="client_button">Vamos Conversar?</Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default Client;