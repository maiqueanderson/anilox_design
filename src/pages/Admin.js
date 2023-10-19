import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { app, db } from "../database/firebaseconfig";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const Admin = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [credit, setCredit] = useState(0);

  const handleSubmit = async () => {
    const auth = getAuth(app);
    try {
      const dataUser = await createUserWithEmailAndPassword(auth, email, password)
      if (dataUser) {
        try {
          const usersRef = collection(db, "users")
          await setDoc(doc(usersRef, auth.currentUser.uid), {
            name,
            email,
            credit
          })
        } catch (err) {
          console.log('errDoc: ', err);
        }
      }
    } catch (err) {
      console.log('errUser: ', err)
    }
  };


  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user && user.uid === "lIlXJPnAucMdAvNBX1PUM3wbRn63") {
        setUser(user);
        console.log(user)
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
    <div>
      <h1>Criar Novo Usuario</h1>
      <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>E-mail</Form.Label>
      <Form.Control type="email" placeholder="E-mail do cliente" onChange={e => setEmail(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Senha</Form.Label>
      <Form.Control type="password" placeholder="Senha do Cliente" onChange={e => setPassword(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Nome do Cliente</Form.Label>
      <Form.Control type="text" placeholder="Nome do Cliente" onChange={e => setName(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Quantidade de creditos</Form.Label>
      <Form.Control type="text" placeholder="Creditos do cliente" onChange={e => setCredit(e.target.value)} />
    </Form.Group>

    <Button className="mb-3" variant="primary" type="button" onClick={handleSubmit}>
      Criar Usuario
    </Button>
  </Form>

    </div>
  );
};

export default Admin;
