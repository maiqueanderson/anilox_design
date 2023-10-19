import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { app, db } from "../database/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


import Btn from "../components/Btn";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

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
            console.log(userDocSnapshot)
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

    <div>
      <h1>Bem vindo {userData?.name}</h1>
      
        <div>
          <p>Créditos: {userData?.credit}</p>
         
        </div>
     
    </div>

    <Row className="mb-5 py-5 px-5">
      <Col className="mb-3">
      <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title>Solicitar Arte</Card.Title>
        <Card.Text>
          Solicite a criação de uma nova arte para {userData?.name}, 
          cada arte equivale a 1 crédito
        </Card.Text>
        <Btn texto="Solicitar"/>

      </Card.Body>
    </Card>
      </Col>

      <Col className="mb-3">
      <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Status de Arte</Card.Title>
        <Card.Text>
          Acompanhe o andamento de todas as artes solicitadas da {userData?.name}
        
        </Card.Text>
        <Btn texto="Acompanhar"/>

      </Card.Body>
    </Card>
      </Col>

      <Col className="mb-3">
      <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Artes aprovadas</Card.Title>
        <Card.Text>
          Veja quantas artes de seus clientes foram aprovadas neste mês
        
        </Card.Text>
        <Btn texto="Visualizar"/>

      </Card.Body>
    </Card>
      </Col>

    </Row>

    </Container>
  );
};

export default Dashboard;
