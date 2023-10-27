import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebaseconfig';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  collection,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Container } from 'react-bootstrap';

import './AdmDashboard.css';

const DetalhesArte = () => {
  const { nomeArte } = useParams();
  const [arte, setArte] = useState(null);

  // const [status, setStatus] = useState(null);

  const handleStatusAprovado = async () => {
    try {
      const collectionRef = collection(db, "artes");
      const querySnapshot = await getDocs(
        query(collectionRef, where("nomeArte", "==", nomeArte))
      );
  
      querySnapshot.forEach(async (doc) => {
        const documentRef = doc(db, "artes", doc.id);
        await updateDoc(documentRef, {
          status: 'Aprovado',
        });
      });
  
      console.log("Status atualizado com sucesso");
    } catch (error) {
      console.log("Erro ao atualizar status:", error);
    }
  }
  
  // const handleStatusAndamento = () =>{
  //   setStatus('Em andamento')
  // }
  // const handleStatusFinalizado = () =>{
  //   setStatus('Arte Finalizada')
  // }

  useEffect(() => {
    const fetchArteDetails = async () => {
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
    };

    fetchArteDetails();
  }, [nomeArte]);

  if (!arte) {
    return <div>Carregando detalhes da arte...</div>;
  }

  return (
    <Container className='py-5'>

    <div className='arte'>
      <h2>Cliente: {arte[0].cliente}</h2>
      <hr/>
      {/* Adicione mais detalhes da arte aqui */}
      <div className='briefing'>
        <h2>Briefing</h2>
        <p className='nameArte'>Arte: {arte[0].nomeArte}</p>
        <p className='py-3'>{arte[0].briefing}</p>
        <a href={arte[0].arquivoUrl} target="_blank" rel="noopener noreferrer">Anexo do cliente</a>
      </div>
    </div>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Mudar Status
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleStatusAprovado}>Em andamento</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-2">Finalizado</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">Aprovado</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </Container>
  );
};

export default DetalhesArte;
