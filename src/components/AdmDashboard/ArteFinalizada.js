
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { app, db } from "../../database/firebaseconfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";



import "../Dashboard/Dashboard.css";
import Btn from "../Btn";

const ArteFinalizada = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //para pegar o historico das artes solicitadas
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && user.uid === "alZxv5w95fNAxRBeDoKUjT3nUjp1") {
        setUser(user);

        try {
          const collectionRef = collection(db, "artes");
          const querySnapshot = await getDocs(
            query(
              collectionRef,
              where("status", "==", "Aprovado" || "Finalizado")
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
              <Btn texto="Dashboard" onClick={() => navigate('/Admin')}  />
            </Row>
            <Row>
              <Btn texto="Clientes" onClick={() => navigate('/Clientes')} />
            </Row>
            <Row>
              <Btn texto="Artes Finalizadas" isActive={true}/>
            </Row>
          </div>
        </Col>

        <Col xs={12} lg={9}>
          <Row>
            <div className="searchDiv mb-3">
              <Form>
                <Form.Group controlId="Search">
                  <Form.Control type="text" placeholder="Buscar artes" />
                </Form.Group>
              </Form>
            </div>
          </Row>

          <Row className="div1 mb-5">
            <div>
              <Row>
                <Col xs={6} lg={8} className="boldFont">
                  <span className="color">Artes Finalizadas</span>
                </Col>

                <Row className="py-3">
                  <hr></hr>
                </Row>

                <Row className="smallFont">
                  <Col xs={3} lg={4}>
                    Nome da Arte
                  </Col>
                  <Col xs={3} lg={4}>
                    Cliente
                  </Col>
                  <Col xs={3} lg={4}>
                    Data
                  </Col>
                </Row>

                <Row className="py-3">
                  <hr></hr>
                </Row>

                {historico.map((item, index) => (
                  <div key={index}>
                    <Row className="smallFont py-2">
                      <Col xs={3} lg={4}>
                        {item?.nomeArte}
                      </Col>
                      <Col xs={3} lg={4}>
                        {item?.cliente}
                      </Col>
                      <Col xs={3} lg={2}>
                        <span>{item?.date.toDate().toLocaleString()}</span>
                      </Col>
                      <Col xs={3} lg={2}>
                       
                      <Button onClick={() => navigate(`/pagina-detalhes/${item.nomeArte}`)}>Ver</Button>


                      </Col>
                    </Row>
                  </div>
                ))}
              </Row>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ArteFinalizada;
