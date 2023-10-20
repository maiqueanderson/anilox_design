import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Btn from "../Btn";
import { app } from "../../database/firebaseconfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    try {
      const auth = getAuth(app);
      const data = await signInWithEmailAndPassword(auth, email, password);
      console.log(data);
      // Redireciona o usuário para a página de dashboard após o login bem-sucedido

      navigate("/ClientArea");
    } catch (error) {
      console.log("err", error);
      handleShow();
    }
  };

  return (
    <>
    <Container>

    <Row >
      <Col className="mb-3 px-5 col-md-5 mx-auto">

        <h1>Área do cliente</h1>
      </Col>
   
    </Row>

      <Form>
        <Form.Group className="mb-3 px-5 col-md-5 mx-auto" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
         
        </Form.Group>

        <Form.Group className="mb-3 px-5 col-md-5 mx-auto" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Col lg='4' xs='9' className="mb-5 col-md-5 mx-auto">
          <Row >
          <Btn texto='Entrar' onClick={handleSubmit}>
         
        </Btn>
          </Row>
        </Col>

        

      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Erro ao entrar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          E-mail ou senha incorreta, por favor tente novamente
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </>
  );
};

export default Login;
