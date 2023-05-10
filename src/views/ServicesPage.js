import { Col, Container, Row, Image } from "react-bootstrap";
import imageServices from "../assets/anilox-design-serviços-hero.png";

import "./ServicesPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faBoxesStacked, faCopyright, faFileExport, faGem, faPenNib } from "@fortawesome/free-solid-svg-icons";
import Faq from "../components/Faq";

const ServicesPage = () => {
  return (
    <>
    <h1 hidden>Anilox Design flexográfico Serviços</h1>
      <Container>
        <Row className="mx-0 my-5">
          <Col  xs={12} lg={6}>
            <div >
              <h2 className="services_hero_text">Aqui sua empresa</h2>
              <h2 className="services_hero_text services_hero_text_under">
                está em boas mãos
              </h2>
              <p className="services_paragrafo">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
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
                  <FontAwesomeIcon className="my-3" icon={faGem} size="3x"/>
                  <h3 className="mb-3">Branding</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo conse
                  </p>
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <div className="service_section">
                  <FontAwesomeIcon className="my-3" icon={faPenNib} size="3x"/>
                  <h3 className="mb-3">Design de embalagens</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo conse
                  </p>
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <div className="service_section">
                  <FontAwesomeIcon className="my-3" icon={faBoxesStacked} size="3x"/>
                  <h3 className="mb-3">Design de flexográfico</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo conse
                  </p>
                </div>
              </Col>

            </Row>

            <Row className="text-light">
              <Col xs={12} lg={4}>
                <div className="service_section">
                  <FontAwesomeIcon className="my-3" icon={faFileExport} size="3x"/>
                  <h3 className="mb-3">Fechamento de arquivos</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo conse
                  </p>
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <div className="service_section">
                  <FontAwesomeIcon className="my-3" icon={faBookOpen} size="3x"/>
                  <h3 className="mb-3">Produção Gráfica</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo conse
                  </p>
                </div>
              </Col>

              <Col xs={12} lg={4} className="mb-5">
                <div className="service_section">
                  <FontAwesomeIcon className="my-3" icon={faCopyright} size="3x"/>
                  <h3 className="mb-3">Identidade Visual</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo conse
                  </p>
                </div>
              </Col>

            </Row>
          </Container>
        </div>
      </section>
      <Faq/>
    </>
  );
};

export default ServicesPage;
