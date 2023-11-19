import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { app, db } from "../../database/firebaseconfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, deleteDoc, doc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "../Dashboard/Dashboard.css";
import Btn from "../Btn/Btn";
import Uid from "../auth/Uid";

const Clientes = () => {
  const [user, setUser] = useState(null);
  const [cliente, setCliente] = useState(null);
  const navigate = useNavigate();

  //para buscar pelo nome do cliente
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    window.location.reload();
  };
  const handleShow = () => {
    setShow(true);
  };

  //Para deletar um cliente
  const handleDeleteClient = async (clientId, clienteName) => {
    try {
      const clientRef = doc(db, "users", clientId);
      await deleteDoc(clientRef);
      setCliente(clienteName);
      handleShow();
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
    }
  };

  useEffect(() => {
    const auth = getAuth(app);
     //pega UID do usuario do arquivo UID.js dentro de Auth
     const admUid = Uid();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && user.uid === admUid) {
        setUser(user);

        try {
          const collectionRef = collection(db, "users");
          const querySnapshot = await getDocs(query(collectionRef));

          const historicoData = [];
          querySnapshot.forEach((doc) => {
            historicoData.push(doc.data());
          });

          //para filtrar com base na busca
          const filteredResults = historicoData.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          );

          setSearchResults(filteredResults);

          // Limpa os resultados ao limpar o termo de busca
          if (!searchTerm) {
            setSearchResults(historicoData);
          }
        } catch (error) {
          console.error("Erro ao buscar histórico no Firestore:", error);
        }
      } else {
        navigate("/AdmLogin");
      }
    });

    return () => unsubscribe();
  }, [navigate, searchTerm]);

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
              <Btn texto="Dashboard" onClick={() => navigate("/Admin")} />
            </Row>
            <Row>
              <Btn
                texto="Clientes"
                isActive={true}
                onClick={() => navigate("/Clientes")}
              />
            </Row>
            <Row>
              <Btn
                texto="Artes Finalizadas"
                onClick={() => navigate("/ArteFinalizada")}
              />
            </Row>
          </div>
        </Col>

        <Col xs={12} lg={9}>
          <Row>
            <div className="searchDiv mb-3">
            {/* input de de busca */}
              <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group controlId="Search">
                  <Form.Control
                    type="text"
                    placeholder="Buscar clientes"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
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

                {/* renderiza em tela a busca do usuario */}
                {searchResults.map((item, index) => (
                  <div key={index}>
                    <Row className="smallFont py-2">
                      <Col xs={4} lg={4}>
                        {item?.name}
                      </Col>
                      <Col xs={4} lg={4}>
                        {item?.credit}
                      </Col>
                      <Col xs={2} lg={2}>
                        <Link
                          onClick={() =>
                            handleDeleteClient(item.uid, item.name)
                          }
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            size="2xl"
                            style={{ color: "#e5141e" }}
                          />
                        </Link>
                      </Col>
                      <Col xs={2} lg={2}>
                        <Button
                          onClick={() =>
                            navigate(`/cliente-detalhe/${item.name}`)
                          }
                        >
                          Ver
                        </Button>
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
          <Modal.Title>Usuario Deletado com sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>O usuario {cliente} foi deletado com sucesso!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Clientes;
