import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app, db } from "../../database/firebaseconfig";
import {
  doc,
  getDoc,
  collection,
  addDoc,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { Button, Col, Container, Form, Row } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";

import Btn from "../../components/Btn";

import "./Dashboard.css";

const Dashboard = () => {
  //Para selecionar o usuario
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  //para pegar o historico das artes solicitadas
  const [historico, setHistorico] = useState([]);

  //Para trabalhar com o upload do arquivo
  const storage = getStorage(app);
  const [message, setMessage] = useState(null);

  //Dados do Formulario de criação de arte
  const [nomeArte, setNomeArte] = useState(null);
  const [briefing, setBriefing] = useState(null);
  const [arquivo, setArquivo] = useState(null);

  const navigate = useNavigate();

  //Configurações do Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Para inserir informações digitadas pelo usuario
  const handleNomeArte = (event) => {
    const { value } = event.target;
    setNomeArte(value);
  };

  const handleBriefing = (event) => {
    const { value } = event.target;
    setBriefing(value);
  };


  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setArquivo(file);
      console.log("Arquivo selecionado:", file);
    } else {
      console.log("Nenhum arquivo selecionado.");
    }
  };

  const handleCreditUpdate = () => {
    const credit = parseInt(userData?.credit, 10);
    const menosCredit = credit - 1;

    const documentRef = doc(db, "users", user.uid);

    const novoCredit = menosCredit.toString(); 

    try {
      
      updateDoc(documentRef, {
        credit: novoCredit, 
      });

      console.log("Créditos atualizados com sucesso");
    } catch (error) {
      console.log("Erro ao atualizar créditos:", error);
    }
  };

  // Para salvar no firebase
  const handleSaveToFirebase = async () => {
    const userCredits = parseInt(userData?.credit, 10);

    if (userCredits < 1) {
      console.log("Usuario sem créditos");
      setMessage(
        "Você esta sem créditos por favor solicite novos créditos para continuar"
      );
    } else {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        const userName = userData?.name;

        if (!user) {
          console.error("Nenhum usuário logado");
          return;
        }

        const uid = user.uid;
        
        

        // Para fazer o upload do arquivo para o Firebase Storage
        const storageRef = ref(storage, `uploads/${uid}/${arquivo.name}`);
        await uploadBytes(storageRef, arquivo);

        //URL do arquivo após o upload
        const fileUrl = await getDownloadURL(storageRef);

        const collectionRef = collection(db, "artes");
        await addDoc(collectionRef, {
          uid,
          nomeArte: nomeArte,
          briefing: briefing,
          arquivoUrl: fileUrl,
          date: new Date(),
          status: "Solicitado",
          cliente: userName,
        });

        console.log("Valor salvo com sucesso no Firestore!");
        setMessage("Arte Solicitada com sucesso!");
        handleCreditUpdate();
        window.location.reload();
      } catch (error) {
        console.error("Erro ao salvar no Firestore:", error);
        setMessage(
          "Erro ao solicitar arte, por favor entre em contato com o suporte"
        );
      }
    }
  };

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        const userDocRef = doc(db, "users", user.uid);

        try {
          const collectionRef = collection(db, "artes");
          const querySnapshot = await getDocs(
            query(collectionRef, where("uid", "==", user.uid))
          );

          const historicoData = [];
          querySnapshot.forEach((doc) => {
            historicoData.push(doc.data());
          });

          setHistorico(historicoData);
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
    // eslint-disable-next-line
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
              <Btn texto="Dashboard" isActive={true} />
            </Row>
            <Row>
              <Btn texto="Artes Finalizadas" />
            </Row>
            <Row>
              <Btn texto="Solicitar Arte" onClick={handleShow} />
            </Row>
            <Row>
              <Button className="creditButton" variant="success" size="sm">
                Solicitar Créditos
              </Button>
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
                  <span className="color">Status da arte</span>
                </Col>

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

                {historico.map((item, index) => (
                  <div key={index}>
                    <Row className="smallFont py-2">
                      <Col xs={6} lg={8}>
                        {item?.nomeArte}
                      </Col>
                      <Col xs={3} lg={2}>
                        <span>{item?.date.toDate().toLocaleString()}</span>
                      </Col>
                      <Col xs={3} lg={2}>
                        {item?.status}
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
          <Modal.Title>Solicitar nova Arte</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {" "}
            Prencha os campos abaixo e anexe os arquivos corretos para solicitar
            sua nova arte
          </p>

          <Form>
            <Form.Group controlId="NewArt">
              <Form.Label>Nome do Cliente</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome da arte"
                onChange={handleNomeArte} 
              />
              <Form.Label>Briefing</Form.Label>
              <Form.Control as="textarea" rows={5} onChange={handleBriefing} />
              <Form.Label>Anexar arquivos</Form.Label>
              <Form.Control type="file" size="sm" onChange={handleFileUpload} />
            </Form.Group>
          </Form>
          <p className="py-3 ">{message}</p>
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
