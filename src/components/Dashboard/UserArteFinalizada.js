import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { app, db } from "../../database/firebaseconfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";

import "../Dashboard/Dashboard.css";
import Btn from "../Btn/Btn";

const UserArteFinalizada = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  //para buscar pelo nome do cliente
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDocRef = doc(db, "users", user.uid);

        try {
          const collectionRef = collection(db, "artes");

          const querySnapshot = await getDocs(
            query(
              collectionRef,
              where("status", "in", ["Aprovado", "Finalizado"]),
              where("uid", "==", user.uid)
            )
          );

          const historicoData = [];
          querySnapshot.forEach((doc) => {
            historicoData.push(doc.data());
          });

          //para filtrar com base na busca
          const filteredResults = historicoData.filter((userData) =>
          userData.nomeArte.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResults(filteredResults);

        // Limpa os resultados ao limpar o termo de busca
        if (!searchTerm) {
         setSearchResults(historicoData);
       }

        } catch (error) {
          console.error("Erro ao buscar histórico no Firestore:", error);
        }

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
            <Row className="clientName">{userData?.name}</Row>
            <Row className="credits">{userData?.credit}</Row>
            <Row>Créditos</Row>
            <Row>
              <Btn texto="Dashboard" onClick={() => navigate("/ClientArea")} />
            </Row>
            <Row>
              <Btn texto="Artes Finalizadas" isActive={true} />
            </Row>
            {/* <Row>
              <Btn texto="Solicitar Arte" onClick={handleShow} />
            </Row> */}
            <Row className="ButtonCredit">
              <a
                href="https://api.whatsapp.com/send?phone=5571997284970&text=Ol%C3%A1%20eu%20gostaria%20de%20solicitar%20cr%C3%A9ditos%20para%20a%20minha%20empresa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Créditos
              </a>
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
                        <span>{item?.date.toDate().toLocaleString()}</span>
                      </Col>
                      <Col xs={3} lg={2}>
                        <Button
                          variant="warning"
                          onClick={() =>
                            navigate(`/alterar-arte/${item.nomeArte}`)
                          }
                        >
                          Alterar
                        </Button>
                      </Col>
                      <Col xs={3} lg={2} className="anexo">
                        <a
                          href={item?.arquivoFinalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Anexo
                        </a>
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

export default UserArteFinalizada;
