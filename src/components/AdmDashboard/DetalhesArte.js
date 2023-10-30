import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { app, db } from '../../database/firebaseconfig';
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Col, Container, Row } from 'react-bootstrap';

import './AdmDashboard.css';

const DetalhesArte = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const { nomeArte } = useParams();
  const [arte, setArte] = useState(null);

  const handleStatusAprovado = async () => {
    try {
      const collectionRef = collection(db, "artes");
      const querySnapshot = await getDocs(
        query(collectionRef, where("nomeArte", "==", nomeArte))
      );
  
      querySnapshot.forEach(async (doc) => {
        const documentRef = doc.ref;
        await updateDoc(documentRef, {
          status: 'Aprovado',
        });
      });
  
      console.log("Status atualizado com sucesso");
    } catch (error) {
      console.log("Erro ao atualizar status:", error);
    }
  }
  
  
  const handleStatusAndamento = async () =>{
    try {
      const collectionRef = collection(db, "artes");
      const querySnapshot = await getDocs(
        query(collectionRef, where("nomeArte", "==", nomeArte))
      );
  
      querySnapshot.forEach(async (doc) => {
        const documentRef = doc.ref;
        await updateDoc(documentRef, {
          status: 'Em andamento',
        });
      });
  
      console.log("Status atualizado com sucesso");
    } catch (error) {
      console.log("Erro ao atualizar status:", error);
    }
  }
  const handleStatusFinalizado = async () =>{
    try {
      const collectionRef = collection(db, "artes");
      const querySnapshot = await getDocs(
        query(collectionRef, where("nomeArte", "==", nomeArte))
      );
  
      querySnapshot.forEach(async (doc) => {
        const documentRef = doc.ref;
        await updateDoc(documentRef, {
          status: 'Finalizado',
        });
      });
  
      console.log("Status atualizado com sucesso");
    } catch (error) {
      console.log("Erro ao atualizar status:", error);
    }
  }

  useEffect(() => {
    
    //aqui é para verificar se o ADM está logado
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && user.uid === "alZxv5w95fNAxRBeDoKUjT3nUjp1") {
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
      <h2>{arte[0].cliente}</h2>
      </Col>

      <Col lg={2} xs={6}>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Mudar Status
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleStatusAndamento}>Em andamento</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleStatusFinalizado}>Finalizado</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleStatusAprovado}>Aprovado</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Col>
    </Row>
     
      <hr/>
   
      <div className='briefing'>
        <h2>Briefing</h2>
        <p className='nameArte'>Arte: {arte[0].nomeArte}</p>
        <p className='py-3'>{arte[0].briefing}</p>
        <a href={arte[0].arquivoUrl} target="_blank" rel="noopener noreferrer">Anexo do cliente</a>
      </div>
    </div>

    </Container>
  );
};

export default DetalhesArte;
