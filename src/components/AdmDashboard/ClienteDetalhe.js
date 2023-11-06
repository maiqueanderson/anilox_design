import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { app, db } from "../../database/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import "./AdmDashboard.css";

const ClienteDetalhe = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [newCredit, setNewCredit] = useState(null);

  //Configurações do Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Para inserir informações digitadas pelo ADM
  const handleNewCredit = (event) => {
    const { value } = event.target;
    setNewCredit(value);
  };

  const { nomeCliente } = useParams();
  const [cliente, setCliente] = useState(null);

  const handleCreditUpdate = async () => {
    try {
      const collectionRef = collection(db, "users");
      const querySnapshot = await getDocs(
        query(collectionRef, where("name", "==", nomeCliente))
      );

      const doc = querySnapshot.docs[0];

      if (doc) {
        const actualCredit = parseInt(doc.data().credit, 10);
        const creditUpdate = parseInt(newCredit, 10);
        const somaCredit = actualCredit + creditUpdate;

        await updateDoc(doc.ref, { credit: somaCredit });

        console.log("Créditos atualizados com sucesso");
        setCliente([{ ...cliente[0], credit: somaCredit }]);
        handleClose();
      } else {
        console.log("Cliente não encontrado");
      }
    } catch (error) {
      console.log("Erro ao atualizar créditos:", error);
    }
  };

  useEffect(() => {
    //aqui é para verificar se o ADM está logado
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && user.uid === "alZxv5w95fNAxRBeDoKUjT3nUjp1") {
        setUser(user);

        console.log(nomeCliente);
        try {
          const collectionRef = collection(db, "users");
          const querySnapshot = await getDocs(
            query(collectionRef, where("name", "==", nomeCliente))
          );

          const historicoData = [];
          querySnapshot.forEach((doc) => {
            console.log("Dados do cliente obtidos:", historicoData);
            historicoData.push(doc.data());
            setCliente(historicoData);
          });
        } catch (error) {
          console.error("Erro ao buscar histórico no Firestore:", error);
        }
      } else {
        navigate("/AdmLogin");
      }
    });

    return () => unsubscribe();
  }, [nomeCliente, navigate]);

  if (!cliente) {
    return <div>Carregando detalhes da arte...</div>;
  }

  if (!user) {
    return <div>Verificando a autenticação...</div>;
  }
  return (
    <Container className="py-5">
      <div className="arte">
        <Row>
          <Col lg={10} xs={6}>
            <h2>{cliente[0].name}</h2>
          </Col>
        </Row>

        <hr />

        <div className="briefing">
          <h2 className="nameArte">Créditos do cliente: {cliente[0].credit}</h2>
          <p>E-mail: {cliente[0].email} </p>
          <Button onClick={handleShow}>Adicionar Créditos</Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Créditos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="NewCredit">
              <Form.Label>Quantidade de Créditos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o número de creditos"
                onChange={handleNewCredit}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleCreditUpdate}>
            Adicionar Créditos
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ClienteDetalhe;
