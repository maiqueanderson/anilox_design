import { Button, Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-5">
          <Col xs={12} lg={4}>
            <div className="footer_text">
              <h2>Vamos</h2>
              <h2>Conversar?</h2>
              <p>
                Aqui na Anilox Design você encontra a solução perfeita para sua
                empresa.
              </p>
            </div>
          </Col>

          <Col xs={12} lg={4}>
          <div className="footer_text">
            <h3>Links Úteis</h3>
            <Link className="footer" to='./'><h4>Home</h4></Link>
            <Link className="footer" to='./About'><h4>Sobre Nós</h4></Link>
            <Link className="footer" to='./Cases'><h4>Portfólio</h4></Link>
            <Link className="footer" to='./ServicesPage'><h4>Serviços</h4></Link>
            
          </div>
          </Col>

          <Col xs={12} lg={4}>
          <div className="footer_text">

          <h3>Contatos</h3>
          <h4>+55 71 99728-4970</h4>
          <h4>contato@aniloxdesign.com.br</h4>
          <Button variant="light">Faça um Orçamento</Button>
          </div>
          </Col>
        </Row>
        <Row>
            <div className="d-flex justify-content-center text-light footer_text">

            <h6>© 2023 Anilox Design. Todos os direitos reservados.</h6>
            </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
