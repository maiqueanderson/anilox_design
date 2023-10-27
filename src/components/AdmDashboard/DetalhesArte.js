import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebaseconfig';
import { doc, getDoc } from "firebase/firestore";

const DetalhesArte = () => {
  const { nomeArte } = useParams();
  const [arte, setArte] = useState(null);

  useEffect(() => {
    const fetchArteDetails = async () => {
        console.log(nomeArte)
      try {
        // Cria uma referência direta ao documento da arte com base no nomeArte
        const arteRef = doc(db, "artes", nomeArte);
        const arteDoc = await getDoc(arteRef);

        if (arteDoc.exists()) {
          // Extrai os detalhes da arte do documento
          const detalhesArte = arteDoc.data();
          setArte(detalhesArte);
        } else {
          console.error('Arte não encontrada');
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes da arte:', error);
      }
    };

    fetchArteDetails();
  }, [nomeArte]);

  if (!arte) {
    return <div>Carregando detalhes da arte...</div>;
  }

  return (
    <div>
      <h2>Detalhes da Arte: {arte?.nomeArte}</h2>
      <p>Cliente: {arte?.cliente}</p>
      {/* Adicione mais detalhes da arte aqui */}
    </div>
  );
};

export default DetalhesArte;
