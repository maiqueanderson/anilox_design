import React, {  useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { app, db } from "../../database/firebaseconfig"
import { Container, Form } from "react-bootstrap";
import Btn from "../Btn/Btn";

const UserCreate = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");



  const handleSubmit = async () => {
    const auth = getAuth(app);
    try {
      const dataUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (dataUser) {
        try {
          const usersRef = collection(db, "users");
          await setDoc(doc(usersRef, auth.currentUser.uid), {
            name,
            email,
            credit: 0,
            uid: auth.currentUser.uid,
          });
          navigate("/ClientArea");
        } catch (err) {
          console.log("errDoc: ", err);
        }
      }
    } catch (err) {
      console.log("errUser: ", err);
    }
  };



  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-mail do cliente"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Senha do Cliente"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome da Empresa</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome do Cliente"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <p>Ao clicar em Cadastre-se, você concorda com nossos <Link to={'/UserTerms'}>Termos de uso</Link></p>
        <Btn texto="Cadastra-se" onClick={handleSubmit} />
      </Form>
    </Container>
  );
};

export default UserCreate;
