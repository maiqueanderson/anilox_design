import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebaseconfig';
import {

  collection,

  getDocs,
  query,
  where,
} from "firebase/firestore";

const DetalhesArte = () => {
  const { nomeArte } = useParams();
  const [arte, setArte] = useState(null);

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
    <div>
      <h2>Detalhes da Arte: {arte[0].nomeArte}</h2>
      <p>Cliente: {arte[0].cliente}</p>
      {/* Adicione mais detalhes da arte aqui */}
    </div>
  );
};

export default DetalhesArte;
