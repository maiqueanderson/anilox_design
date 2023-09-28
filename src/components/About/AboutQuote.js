import { Col, Container, Row, Accordion } from "react-bootstrap";

import "./AboutQuote.css";

const AboutQuote = () => {
  return (
    <>
      <section className="quote_image">
        <Container>
          <Row className="mx-0 my-5 py-5">
            <Col className="my-5 ">
              <div>
                <h2 className="abouteQuote_text text-light abouteQuote_text_top">
                  Transformamos
                </h2>
                <h2 className="abouteQuote_text text-light">ideias em</h2>
                <h2 className="abouteQuote_text abouteQuote_text_under text-light">
                  REALIDADE
                </h2>
              </div>
            </Col>

            <Col className="mx-3 my-5 text-light ">
              <p className="abouteQuote_text_top">
                A Anilox Design é uma empresa líder em criação de artes para
                embalagens industriais. Com anos de experiência e um compromisso
                inabalável com a qualidade, ajudamos empresas de todos os
                tamanhos a transmitirem sua mensagem por meio de embalagens
                impressionantes. Nossa experiência se estende a todos os
                aspectos do design, incluindo a gestão de cores, variações,
                dilatações e muito mais, garantindo que sua embalagem não apenas
                impressione visualmente, mas também seja reproduzida com
                precisão no processo de impressão.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="my-5">
            <Col xs={12} lg={6}>
              <div className="my-5 ">
                <h2 className="aboutQuote_text_help ">Ajudamos</h2>
                <h2 className="aboutQuote_text_help">empresas</h2>
                <h2 className="aboutQuote_text_help aboutQuote_text_help_under">
                  a gerar
                </h2>
                <h2 className="aboutQuote_text_help aboutQuote_text_help_under">
                  resultados
                </h2>
              </div>
            </Col>

            <Col xs={12} lg={6}>
              <Accordion defaultActiveKey="0" className="my-5 faq">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Sua empresa com artes mais elaboradas
                  </Accordion.Header>
                  <Accordion.Body>
                    Na Anilox Design, estamos comprometidos em elevar o padrão
                    de suas embalagens. Trabalhamos incansavelmente para
                    proporcionar à sua empresa artes mais elaboradas e
                    impressionantes. Nossa equipe criativa e experiente está
                    pronta para transformar suas ideias em designs excepcionais
                    que destacarão seus produtos no mercado. Eleve sua marca com
                    embalagens que contam uma história única e deixam uma
                    impressão duradoura.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Sua empresa com arquivos na nuvem
                  </Accordion.Header>
                  <Accordion.Body>
                    Na Anilox Design, estamos comprometidos em simplificar sua
                    jornada de design de embalagens. Oferecemos a conveniência
                    de armazenar todos os seus arquivos na nuvem, proporcionando
                    à sua empresa acesso rápido e seguro a todos os recursos de
                    design. Dessa forma, você pode colaborar facilmente,
                    acompanhar as revisões e garantir que suas artes estejam
                    sempre à sua disposição, onde quer que você esteja.
                    Aproveite a agilidade e a eficiência que os arquivos na
                    nuvem podem proporcionar à sua empresa.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Seus clientes com artes mais criativas
                  </Accordion.Header>
                  <Accordion.Body>
                    Potencialize o impacto da sua marca oferecendo aos seus
                    clientes artes mais criativas. Na Anilox Design, nossa
                    equipe de designers talentosos está pronta para elevar o
                    nível das suas embalagens, transformando-as em verdadeiras
                    obras de arte. Surpreenda seus clientes com designs
                    inovadores que contam histórias, cativam e destacam seus
                    produtos no mercado. Juntos, podemos criar experiências
                    visuais memoráveis que deixarão uma impressão duradoura.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Tenha mais aprovações com a ajuda do Mockup 3D
                  </Accordion.Header>
                  <Accordion.Body>
                    Potencialize suas aprovações de projeto com a poderosa
                    ferramenta de Mockup 3D da Anilox Design. Com nossa
                    tecnologia avançada, você pode visualizar suas embalagens em
                    3D antes da produção, proporcionando uma experiência de
                    revisão mais detalhada e realista. Isso significa menos
                    retrabalho e mais aprovações bem-sucedidas. Simplifique o
                    processo de aprovação e eleve a qualidade das suas
                    embalagens com nossos Mockups 3D de última geração.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutQuote;
