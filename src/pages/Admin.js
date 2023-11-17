
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { app, db } from "../database/firebaseconfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";



import "../components/Dashboard/Dashboard.css";
import Btn from "../components/Btn/Btn";

const Admin = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  //para buscar pelo nome do cliente
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


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
             
              where("status", "in", ["Solicitado", "Alteração"])
            )
          );

          const historicoData = [];
          querySnapshot.forEach((doc) => {
            historicoData.push(doc.data());
          });

          const filteredResults = historicoData.filter((item) =>
            item.nomeArte.toLowerCase().includes(searchTerm.toLowerCase())
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
              <Btn texto="Dashboard" isActive={true} />
            </Row>
            <Row>
              <Btn texto="Clientes" onClick={() => navigate('/Clientes')} />
            </Row>
            <Row>
              <Btn texto="Artes Finalizadas" onClick={() => navigate('/ArteFinalizada')} />
            </Row>
          </div>
        </Col>

        <Col xs={12} lg={9}>
          <Row>
            <div className="searchDiv mb-3">
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
                  <span className="color">Artes Solicitadas</span>
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

                {searchResults.map((item, index) => (
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

export default Admin;
