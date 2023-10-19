import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


import { app } from "../../database/firebaseconfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const auth = getAuth(app);
      const data = await signInWithEmailAndPassword(auth, email, password);
      console.log(data)
      // Redireciona o usuário para a página de dashboard após o login bem-sucedido
     
      navigate("/Dashboard");
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>E-mail</Form.Label>
      <Form.Control type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
      <Form.Text className="text-muted">
        Insira o E-mail da sua empresa
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Senha</Form.Label>
      <Form.Control type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
    </Form.Group>
    <Button variant="primary" type="button" onClick={handleSubmit}>
      Entrar
    </Button>
  </Form>
  );
};

export default Login;