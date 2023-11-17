import { Col, Container, Row, Image } from "react-bootstrap";
import imageServices from "../assets/anilox-design-serviços-hero.png";

import "./ServicesPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faBoxesStacked,
  faCopyright,
  faFileExport,
  faGem,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import Faq from "../components/Faq/Faq";

const ServicesPage = () => {
  return (
    <>
      <h1 hidden>Anilox Design flexográfico Serviços</h1>
      <Container>
        <Row className="mx-0 my-5">
          <Col xs={12} lg={6}>
            <div>
              <h2 className="services_hero_text">Aqui sua empresa</h2>
              <h2 className="services_hero_text services_hero_text_under">
                está em boas mãos
              </h2>
              <p className="services_paragrafo">
                Na Anilox Design, acreditamos que o design de embalagens não é
                apenas uma tarefa, é uma arte. Nossa dedicação à qualidade,
                criatividade e atendimento ao cliente é o que nos diferencia.
                Oferecemos uma ampla gama de serviços de design de embalagens
                para atender às necessidades da sua empresa. Desde caixas de
                pizza personalizadas até sacolas e sacos inovadores, estamos
                aqui para tornar suas embalagens verdadeiramente memoráveis.
              </p>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <Image className="servicesPage_image my-5" src={imageServices} />
          </Col>
        </Row>
      </Container>

      <section className="my-5">
        <div className="services_copy">
          <Container>
            <Row>
              <h2 className="d-flex justify-content-center services_copy_text my-5">
                Uma ampla gama de serviços que se complementam
              </h2>
            </Row>
            <Row className="text-light">
              <Col xs={12} lg={4}>
                <div className="service_section">
                  <FontAwesomeIcon className="my-3" icon={faGem} size="3x" />
                  <h3 className="mb-3">Branding</h3>
                  <p>
                    O serviço de branding é a chave para construir e fortalecer
                    a identidade da sua marca. Na Anilox Design, oferecemos
                    soluções de branding que ajudam a sua empresa a se destacar,
                    atraindo e fidelizando clientes. Deixe-nos contar a história
                    da sua marca e criar conexões duradouras com o seu
                    público-alvo.
                  </p>
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <div className="service_section">
                  <FontAwesomeIcon className="my-3" icon={faPenNib} size="3x" />
                  <h3 className="mb-3">Arte flexográfica</h3>
                  <p>
                    Somos especialistas na criação de artes para embalagens que
                    se destacam. Transformamos suas ideias em designs
                    memoráveis, ajudando a sua marca a comunicar sua identidade
                    e cativar os clientes. Deixe-nos criar a arte perfeita para
                    suas embalagens, elevando a sua presença no mercado.
                  </p>
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <div className="service_section">
                  <FontAwesomeIcon
                    className="my-3"
                    icon={faBoxesStacked}
                    size="3x"
                  />
                  <h3 className="mb-3">Mockup 3D</h3>
                  <p>
                    Com nossos serviços de criação de mockup 3D, proporcionamos
                    uma visualização realista de suas embalagens. Na Anilox
                    Design, transformamos conceitos em experiências visuais,
                    permitindo que você veja suas embalagens em detalhes antes
                    da produção. Simplifique revisões, economize tempo e eleve a
                    qualidade do seu design com nossos mockups 3D de alta
                    qualidade.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="text-light">
              <Col xs={12} lg={4}>
                <div className="service_section">
                  <FontAwesomeIcon
                    className="my-3"
                    icon={faFileExport}
                    size="3x"
                  />
                  <h3 className="mb-3">Envio de arquivos</h3>
                  <p>
                    Nosso serviço de fechamento de arquivos garante que seus
                    designs estejam prontos para produção. Na Anilox Design,
                    cuidamos de todos os detalhes técnicos, garantindo que seus
                    arquivos estejam perfeitamente preparados para gráficas e
                    clicherias. Poupe tempo, evite erros e assegure uma produção
                    suave com nossa expertise em fechamento de arquivos.
                  </p>
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <div className="service_section">
                  <FontAwesomeIcon
                    className="my-3"
                    icon={faBookOpen}
                    size="3x"
                  />
                  <h3 className="mb-3">Produção Gráfica</h3>
                  <p>
                    Na Anilox Design, nossa paixão é criar artes que
                    impressionam. Oferecemos serviços de criação de artes para
                    impressões gráficas, como panfletos, cartões de visita,
                    banners e muito mais. Deixe-nos transformar suas ideias em
                    designs impactantes que comunicam a essência da sua marca e
                    se destacam em qualquer material impresso.
                  </p>
                </div>
              </Col>

              <Col xs={12} lg={4} className="mb-5">
                <div className="service_section">
                  <FontAwesomeIcon
                    className="my-3"
                    icon={faCopyright}
                    size="3x"
                  />
                  <h3 className="mb-3">Identidade Visual</h3>
                  <p>
                    Na Anilox Design, moldamos a identidade visual da sua marca.
                    Com criatividade e expertise, desenvolvemos elementos
                    visuais que definem a personalidade da sua empresa. De
                    logotipos a paletas de cores e tipografia, criamos uma
                    identidade visual única que deixa uma impressão duradoura
                    nos seus clientes.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default ServicesPage;
