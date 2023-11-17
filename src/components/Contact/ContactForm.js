import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "react-bootstrap";
import './ContactForm.css'

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_599p9c1",
        "template_uh8y81c",
        form.current,
        "T6wN_Q7EYunAVH4vG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
    <form ref={form} onSubmit={sendEmail}>
        <label>Nome: </label>
        <input className="textInput" type="text" name="user_name" />


            <label>E-mail: </label>

            <input className="textInput" type="email" name="user_email" />


          <label>Mensagem:</label>

          <textarea className="textInput textArea" name="message"/>

         <input className="button" type="submit" value="Enviar" />

          
       
      
      </form>
    </Container>
  );
};

export default ContactForm;
