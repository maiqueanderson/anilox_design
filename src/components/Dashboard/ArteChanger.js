import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { app, db } from '../../database/firebaseconfig';
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";

import '../AdmDashboard/AdmDashboard.css';

const ArteChanger = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const { nomeArte } = useParams();
  const [arte, setArte] = useState(null);

  //textArea do briefing de alteração
  const [briefing, setBriefing] = useState(null);
  const handleBriefing = (event) => {
    const { value } = event.target;
    setBriefing(value);
  };

   //Configurações do Modal
   const [show, setShow] = useState(false);
   const handleClose = () => {
    setShow(false);
    navigate("/ClientArea");
   }
   const handleShow = () => setShow(true);
  

  const handleAlteracao = async () =>{
    try {
      const collectionRef = collection(db, "artes");
      const querySnapshot = await getDocs(
        query(collectionRef, where("nomeArte", "==", nomeArte))
      );
  
      querySnapshot.forEach(async (doc) => {
        const documentRef = doc.ref;
        await updateDoc(documentRef, {
          status: 'Alteração',
          briefing: briefing,
        });
      });
  
      console.log("Status atualizado com sucesso");
      handleShow();
    } catch (error) {
      console.log("Erro ao atualizar status:", error);
    }
  }

  useEffect(() => {
    
    //aqui é para verificar se o ADM está logado
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

  
          console.log(nomeArte)
          try {
            const collectionRef = collection(db, "artes");
            const querySnapshot = await getDocs(
              query(collectionRef, where("nomeArte", "==", nomeArte))
            );
  
            const historicoData = [];
            querySnapshot.forEach((doc) => {
              console.log("Dados da arte obtidos:", historicoData);
              historicoData.push(doc.data());
              setArte(historicoData);
            });
  
            
          } catch (error) {
            console.error("Erro ao buscar histórico no Firestore:", error);
          }
    

      
      }else{
        navigate("/AdmLogin");
      }
    });


    return () => unsubscribe();
  }, [nomeArte, navigate]);

  if (!arte) {
    return <div>Carregando detalhes da arte...</div>;
  }
  
  if (!user) {
    return <div>Verificando a autenticação...</div>;
  }
  return (
    <Container className='py-5'>

    <div className='arte'>
    <Row>
      <Col lg={10} xs={6}>
      <h2>{arte[0].nomeArte}</h2>
      <p>Status: {arte[0].status}</p>
      </Col>
    </Row>
     
      <hr/>
   
      <div className='briefing'>
        <h2>Alteração</h2>
        <p>Digite abaixo quais alterações gostaria de fazer na arte</p>
        <Form>
            <Form.Group controlId="ArteChange">
            
              <Form.Control as="textarea" rows={5} onChange={handleBriefing} />
              
              <Button className='mt-3' variant="warning" onClick={handleAlteracao}>
            Solicitar alteração
          </Button>
            </Form.Group>
           
          </Form>
      </div>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alteração solicitada com sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {" "}
            Em até 48h úteis nós estaremos realizando a sua alteração, agradecemos pela preferência.
          </p>
        </Modal.Body>
      
      </Modal>

    </Container>
  );
};

export default ArteChanger;
