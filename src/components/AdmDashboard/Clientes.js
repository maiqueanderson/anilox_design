import AdmDashboard from "../AdmDashboard/UserCreate";
import {  Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { app, db } from "../../database/firebaseconfig"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query } from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faCoins} from '@fortawesome/free-solid-svg-icons'

import "../Dashboard/Dashboard.css";
import Btn from "../Btn";

const Clientes = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //Configurações do Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //para pegar o historico dos clientes
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && user.uid === "alZxv5w95fNAxRBeDoKUjT3nUjp1") {
        setUser(user);

        try {
          const collectionRef = collection(db, "users");
          const querySnapshot = await getDocs(
            query(
              collectionRef
            )
          );

          const historicoData = [];
          querySnapshot.forEach((doc) => {
            historicoData.push(doc.data());
          });

          setHistorico(historicoData);
        } catch (error) {
          console.error("Erro ao buscar histórico no Firestore:", error);
        }
      } else {
        navigate("/AdmLogin");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return <div>Verificando a autenticação...</div>;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} lg={3}>
          <div className="div1 mb-5">
            <Row>Bem vindo</Row>
            <Row className="clientName">Anilox Design</Row>
            <Row>
              <Btn texto="Dashboard" onClick={() => navigate('/Admin')} />
            </Row>
            <Row>
              <Btn texto="Clientes" isActive={true} onClick={() => navigate('/Clientes')} />
            </Row>
            <Row>
              <Btn texto="Criar Usuario" onClick={handleShow} />
            </Row>
          </div>
        </Col>

        <Col xs={12} lg={9}>
          <Row>
            <div className="searchDiv mb-3">
              <Form>
                <Form.Group controlId="Search">
                  <Form.Control type="text" placeholder="Buscar clientes" />
                </Form.Group>
              </Form>
            </div>
          </Row>

          <Row className="div1 mb-5">
            <div>
              <Row>
                <Col xs={6} lg={8} className="boldFont">
                  <span className="color">Clientes ativos</span>
                </Col>

                <Row className="py-3">
                  <hr></hr>
                </Row>

                <Row className="smallFont">
                  <Col xs={3} lg={4}>
                    Nome do cliente
                  </Col>
                  <Col xs={3} lg={4}>
                    Créditos
                  </Col>
                </Row>

                <Row className="py-3">
                  <hr></hr>
                </Row>

                {historico.map((item, index) => (
                  <div key={index}>
                    <Row className="smallFont py-2">
                      <Col xs={4} lg={4}>
                        {item?.name}
                      </Col>
                      <Col xs={4} lg={4}>
                        {item?.credit}
                      </Col>
                      <Col xs={2} lg={2}>
                      <Link onClick={''}>
                      <FontAwesomeIcon icon={faTrash} size="2xl" style={{color: "#e5141e",}} />
                      </Link>
                      </Col>
                      <Col xs={2} lg={2}>
                       <Link>

                      <FontAwesomeIcon icon={faCoins} size="2xl" style={{color: "#189e2a",}} />
                       </Link>


                      </Col>
                    </Row>
                  </div>
                ))}
              </Row>
            </div>
          </Row>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criar Usuario novo usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdmDashboard />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Clientes;
