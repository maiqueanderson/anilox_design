import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app, db } from "../../database/firebaseconfig";
import { doc, getDoc, collection, addDoc  } from "firebase/firestore";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

import Btn from "../../components/Btn";


import './Dashboard.css'

const Dashboard = () => {

  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const [nomeArte, setNomeArte] = useState(null);
  const [briefing, setBriefing] = useState(null);
  const [arquivo, setArquivo] = useState(null);

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNomeArte = (text) =>{
    setNomeArte(text)
  } 

  const handleBriefing = (text) =>{
    setBriefing(text)
  } 

  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Pega o primeiro arquivo selecionado
  
    if (file) {
      // Aqui você pode processar o arquivo, enviá-lo para o servidor, etc.
      setArquivo(file)
      console.log("Arquivo selecionado:", file);
    } else {
      console.log("Nenhum arquivo selecionado.");
    }
  };


  const handleSaveToFirebase = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.error("Nenhum usuário logado");
        return;
      }

      const uid = user.uid;

      const collectionRef = collection(db, "artes"); // Coleção onde os documentos serão criados
      await addDoc(collectionRef, {
        uid,
        nomeArte: nomeArte,
        briefing: briefing,
        arquivo: arquivo,
        date: new Date(),
      });
    
      console.log("Valor salvo com sucesso no Firestore!");
    } catch (error) {
      console.error("Erro ao salvar no Firestore:", error);
    }
  };

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        console.log(user);
        const userDocRef = doc(db, "users", user.uid);

        try {
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            setUserData(userDocSnapshot.data());
          } else {
            console.log("Documento de usuário não encontrado no Firestore.");
            console.log(userDocSnapshot);
          }
        } catch (error) {
          console.error("Erro ao buscar dados de usuário no Firestore:", error);
        }
      } else {
        navigate("/Login");
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
            <Row className="clientName">{userData?.name}</Row>
            <Row className="credits">{userData?.credit}</Row>
            <Row>Créditos</Row>
            <Row>
              <Btn texto="Dashboard" isActive={true}/>
            </Row>
            <Row>
              <Btn texto="Artes Finalizadas" />
            </Row>
            <Row>
            <Btn texto="Solicitar Arte" onClick={handleShow} />
            </Row>
            <Row>
              <Button className="creditButton" variant="success" size="sm" >Solicitar Créditos</Button>
            </Row>
            </div>
           
        
        </Col>

        <Col xs={12} lg={9}>
          <Row>
            <div className="searchDiv mb-3">
              <Form>
                <Form.Group  controlId="Search">
                 
                  <Form.Control
                    type="text"
                    placeholder="Buscar artes"
                  
                  />
                </Form.Group>
              </Form>
            </div>
          </Row>

          <Row className="div1 mb-5">
            <div>
              <Row>

                <Col xs={6} lg={8} className="boldFont">
                  <span className="color">Status da arte</span>
                </Col>
                <Col xs={3} lg={2}>
                  <span className="boldFont">94</span>
                </Col>
                <Col xs={3} lg={2}>
                  <span className="boldFont">23</span>
                </Col>
            <Row className="smallFont">

                <Col xs={6} lg={8}>
                  <span>117</span><span> no total</span>
                </Col>
                <Col xs={3} lg={2}>
                  <span>Finalizadas</span>
                </Col>
                <Col xs={3} lg={2}>
                  <span>Aprovadas</span>
                </Col>
            </Row>

            <Row className="py-3">
              <hr></hr>
            </Row>

            <Row className="smallFont">
            <Col xs={6} lg={8}>
                  Nome da Arte
                </Col>
                <Col xs={3} lg={2}>
                  Data
                </Col>
                <Col xs={3} lg={2}>
                  Status
                </Col>
            </Row>

            <Row className="py-3">
              <hr></hr>
            </Row>

            <Row className="smallFont">
            <Col xs={6} lg={8}>
                  Exempplo de uma arte
                </Col>
                <Col xs={3} lg={2}>
                  <span>30/11/2023</span>
                </Col>
                <Col xs={3} lg={2}>
                  Iniciado
                </Col>
            </Row>

              </Row>
            </div>
          </Row>
        
        </Col>

      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Solicitar nova Arte</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <p> Prencha os campos abaixo e anexe os arquivos corretos para solicitar sua nova arte</p>

        <Form>
                <Form.Group  controlId="NewArt">
                <Form.Label>Nome do Cliente</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o nome do cliente"
                    
                    onChange={handleNomeArte}
                  
                  />
                  <Form.Label>Briefing</Form.Label>
                  <Form.Control as="textarea" rows={5}  onChange={handleBriefing}/>
                  <Form.Label>Anexar arquivos</Form.Label>
                  <Form.Control type="file" size="sm"  onChange={handleFileUpload} />

                </Form.Group>
              </Form>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveToFirebase}>
            Solicitar
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
};

export default Dashboard;
