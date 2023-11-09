import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { app, db } from "../../database/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import "./AdmDashboard.css";

const DetalhesArte = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  //Configurações do Modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);

   //Configurações do Modal de upload de arquivo
  const [showUpload, setShowUpload] = useState(false);
  const handleCloseUpload = () => {
    setShowUpload(false);
    window.location.reload();
  };
  const handleShowUpload = () => setShowUpload(true);

  //para fazer upload do arquivo final
  const [arquivo, setArquivo] = useState(null);
  const storage = getStorage(app);
  const [message, setMessage] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setArquivo(file);
      console.log("Arquivo selecionado:", file);
    } else {
      console.log("Nenhum arquivo selecionado.");
    }
  };

  const { nomeArte } = useParams();
  const [arte, setArte] = useState(null);

  const handleStatusAndamento = async () => {
    try {
      const collectionRef = collection(db, "artes");
      const querySnapshot = await getDocs(
        query(collectionRef, where("nomeArte", "==", nomeArte))
      );

      querySnapshot.forEach(async (doc) => {
        const documentRef = doc.ref;
        await updateDoc(documentRef, {
          status: "Em andamento",
        });
      });

      console.log("Arte iniciada com sucesso com sucesso");
      handleShow();
    } catch (error) {
      console.log("Erro ao iniciar arte:", error);
    }
  };

  const handleUploadFirebase = async () => {
    try {
      const collectionRef = collection(db, "artes");
      const querySnapshot = await getDocs(
        query(collectionRef, where("nomeArte", "==", nomeArte))
      );

       // Para fazer o upload do arquivo para o Firebase Storage
       const uid = user.uid;
       const storageRef = ref(storage, `uploads/${uid}/${arquivo.name}`);
       await uploadBytes(storageRef, arquivo);

       //URL do arquivo após o upload
       const fileUrl = await getDownloadURL(storageRef);

      querySnapshot.forEach(async (doc) => {
        const documentRef = doc.ref;
        await updateDoc(documentRef, {
          arquivoFinalUrl: fileUrl,
          status: "Finalizado",
        });
      });

      console.log("Arte iniciada com sucesso com sucesso");
      setMessage('Arquivo enviado com sucesso!')
    } catch (error) {
      console.log("Erro ao iniciar arte:", error);
    }
  };


  useEffect(() => {
    //aqui é para verificar se o ADM está logado
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && user.uid === "alZxv5w95fNAxRBeDoKUjT3nUjp1") {
        setUser(user);

        console.log(nomeArte);
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
      } else {
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
    <Container className="py-5">
      <div className="arte">
        <Row>
          <Col lg={10} xs={6}>
            <h2>{arte[0].cliente}</h2>
            <p>Status: {arte[0].status}</p>
          </Col>

          <Col lg={1} xs={3}>
            <Button variant="success" onClick={handleStatusAndamento}>
              Iniciar
            </Button>
          </Col>
          <Col lg={1} xs={3}>
            <Button onClick={handleShowUpload}>
              Enviar
            </Button>
          </Col>
        </Row>

        <hr />

        <div className="briefing">
          <h2>Briefing</h2>
          <p className="nameArte">Arte: {arte[0].nomeArte}</p>
          <p className="py-3">{arte[0].briefing}</p>
          <a
            href={arte[0].arquivoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Anexo do cliente
          </a>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Arte Iniciada com sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Você acabou de dar inicio a confecção da arte {arte[0].nomeArte},
            assim que terminar insira o anexo da arte final para ser enviado ao
            cliente: {arte[0].cliente}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpload} onHide={handleCloseUpload}>
        <Modal.Header closeButton>
          <Modal.Title>Arte Iniciada com sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Insira o arquivo finalizado da arte: {arte[0].nomeArte} para ser enviado ao cliente: {arte[0].cliente}
          </p>
          <hr/>
          <Form.Control type="file" size="sm" onChange={handleFileUpload} />
          {message}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpload}>
            Cancelar
          </Button>
          <Button onClick={handleUploadFirebase}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
};

export default DetalhesArte;
