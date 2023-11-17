import React from "react";
import { Container, Accordion } from "react-bootstrap";

import "./Faq.css";

const Faq = () => {
  return (
    <Container>
      <h2 className="d-flex justify-content-center faq_text">
        Perguntas Frequentes
      </h2>
      <Accordion defaultActiveKey="0" className="my-5 faq">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Qual o valor do serviço?</Accordion.Header>
          <Accordion.Body>
            O preço dos nossos serviços é calculado com base na média da
            quantidade de artes que a sua empresa necessita, seja por dia ou por
            semana. No entanto, queremos tranquilizar você: na Anilox Design,
            oferecemos a melhor relação custo-benefício do mercado. Garantimos
            que nem a sua empresa nem os seus clientes terão que desembolsar
            valores exorbitantes por artes de alta qualidade. Estamos
            comprometidos em tornar o design de embalagens acessível e eficaz
            para todos.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Como é feito o pagamento?</Accordion.Header>
          <Accordion.Body>
            Na Anilox Design, acreditamos na transparência e na confiança em
            nossa parceria. Você só efetuará o pagamento pelo nosso serviço
            quando enviarmos a arte para a clicheria. Antes disso, nem a sua
            empresa nem o seu cliente precisam se preocupar com pagamentos
            antecipados. Isso mesmo, não é necessário adiantar nenhum valor por
            uma arte que talvez nem seja aprovada. Esse modelo de cobrança é
            possível graças ao nosso compromisso inabalável em fornecer artes
            incríveis que têm uma alta taxa de aprovação por parte dos nossos
            clientes. Sua satisfação e confiança são nossa prioridade, e estamos
            aqui para tornar o processo tão simples e tranquilo quanto possível.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Qual o prazo de entrega das artes?
          </Accordion.Header>
          <Accordion.Body>
            Na Anilox Design, garantimos que todas as artes, independentemente
            de serem fornecidas em formato de arquivo aberto ou não, serão
            entregues dentro de um prazo máximo de 48 horas úteis. Contamos com
            uma equipe altamente capacitada, comprometida em ser eficiente e
            ágil na criação de artes incríveis para você. Nossa prioridade é
            atender às suas necessidades de forma rápida e eficaz.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Quais tipos de arquivos vocês trabalham?
          </Accordion.Header>
          <Accordion.Body>
            Na Anilox Design, valorizamos a versatilidade e a comodidade.
            Aceitamos uma ampla variedade de formatos de arquivo para atender às
            necessidades de arte das embalagens do seu cliente. Além disso,
            oferecemos o serviço de vetorização de logotipos, permitindo que seu
            cliente envie uma variedade maior de formatos, eliminando restrições
            a apenas PDF ou Corel. Isso significa que estamos prontos para
            receber arquivos em formatos como .JPEG, .PNG, .Ai, .SVG, .CDR e
            muito mais. Nossa flexibilidade visa simplificar a aquisição de
            novos clientes para a sua empresa, tornando o processo de criação de
            artes de embalagens o mais conveniente possível.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Vocês enviam o arquivo para a clicheria?
          </Accordion.Header>
          <Accordion.Body>
            Após a aprovação da arte pelo seu cliente e o recebimento do
            pagamento, estaremos prontos para fornecer os arquivos finais para a
            clicheria de sua escolha. Esses arquivos estarão prontos para serem
            gravados, agilizando significativamente o processo de criação do
            clichê para o seu cliente. Nosso objetivo é simplificar e acelerar a
            etapa de produção do clichê, garantindo eficiência em todos os
            aspectos.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Faq;
