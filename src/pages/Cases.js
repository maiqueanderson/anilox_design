import { Col, Row, Image, Container } from "react-bootstrap";

import image1 from "../assets/portfolio/1-pãozinho_delicia.jpg";
import image2 from "../assets/portfolio/2- salgados q delicia.jpg";
import image3 from "../assets/portfolio/3-raizes-do-campo.jpg";
import image4 from "../assets/portfolio/4-delicious-licor.jpg";
import image5 from "../assets/portfolio/5-imperio-das-cestas.jpg";
import image6 from "../assets/portfolio/6-marias-pizza.jpg";
import image7 from "../assets/portfolio/7-leid-art.jpg";
import image8 from "../assets/portfolio/8-dricake.jpg";
import image9 from "../assets/portfolio/9-pão-dourado.jpg";
import image10 from "../assets/portfolio/10-laço-gaucho.jpg";
import image11 from "../assets/portfolio/11-pizzaria-marguerita.jpg";
import image12 from "../assets/portfolio/12-biotrade.jpg";
import image13 from "../assets/portfolio/13-sheiks-esfihas.jpg";
import image14 from "../assets/portfolio/14-biscoitos-caseiros-do-frade.jpg";
import image15 from "../assets/portfolio/15-croc-buds.jpg";
import image16 from "../assets/portfolio/16-ponto-chic.jpg";
import image17 from "../assets/portfolio/17-bene-limoncello.jpg";
import image18 from "../assets/portfolio/18-speciale.jpg";
import image19 from "../assets/portfolio/19-natural-mudas.jpg";
import image20 from "../assets/portfolio/20-bella-donna.jpg";
import image21 from "../assets/portfolio/21-celebrar.jpg";
import image22 from "../assets/portfolio/22-t-shirt-club.jpg";
import image23 from "../assets/portfolio/23-toutz-tim.jpg";
import image24 from "../assets/portfolio/24-mamelukos-beach.jpg";
import image25 from "../assets/portfolio/25-no-pontto.jpg";
import image26 from "../assets/portfolio/26-pizzaria-slice.jpg";
import image27 from "../assets/portfolio/27-balcony-brasil.jpg";
import image28 from "../assets/portfolio/28-pizzaria-delicia-aos-pedaços.jpg";

import "./Cases.css";

const Cases = () => {
  return (
    <div className="my-5">
      <h1 hidden>Anilox Design flexográfico Portfólio</h1>
      <Container>
        <Row>
          <h2 className="d-flex justify-content-center my-5 caseText">
            VEJA NOSSAS ULTIMAS ARTES
          </h2>
        </Row>
        <Row>
          <p className="d-flex justify-content-center caseP">
            Nossa galeria de trabalhos anteriores é a prova do nosso compromisso
            com a excelência.
          </p>
        </Row>
        <Row>
          <Col xs={12} lg={3}>
            <Image
              className="img-thumbnail fluid caseImage my-3"
              src={image1}
            />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image2} />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image3} />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image4} />
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={3}>
            <Image
              className="img-thumbnail fluid caseImage my-3"
              src={image5}
            />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image6} />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image7} />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image8} />
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={3}>
            <Image
              className="img-thumbnail fluid caseImage my-3"
              src={image9}
            />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image10} />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image11} />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image12} />
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={3}>
            <Image
              className="img-thumbnail fluid caseImage my-3"
              src={image13}
            />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image14} />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image15} />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image16} />
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={3}>
            <Image
              className="img-thumbnail fluid caseImage my-3"
              src={image17}
            />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image18} />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image19} />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image20} />
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={3}>
            <Image
              className="img-thumbnail fluid caseImage my-3"
              src={image21}
            />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image22} />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image23} />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image24} />
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={3}>
            <Image
              className="img-thumbnail fluid caseImage my-3"
              src={image25}
            />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image26} />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image27} />
          </Col>

          <Col xs={12} lg={3}>
            <Image className="img-thumbnail caseImage my-3" src={image28} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Cases;
