import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

import './portfolio.css'
import cheiro from '../assets/cheiro-de-pizza-100.jpg';
import raizes from '../assets/raizes-do-campo-100.jpg';
import mariaPizza from '../assets/marias-pizza-100.jpg';
import tortareli from '../assets/tortarelli-100.jpg';
import nalaje from '../assets/nalaje-100.jpg';
import lenoxx from '../assets/lenoxx-100.jpg';
import meninasBolo from '../assets/bolo-das-meninas-100.jpg';
import vivoPizza from '../assets/caixa-de-pizza-vivo-100.jpg';


const Portfolio = () =>{
    return(
        <section className="portfolio_countent">
           
                <Row className="mx-0" >
                    <Col>
                    <Image className="d-lg-none my-5 port_image_m" src={cheiro} />
                    <Image className="d-none d-lg-inline-block port_image" src={cheiro} />
                    </Col>

                    <Col>
                    <Image className="d-lg-none my-5 port_image_m" src={raizes} />
                    <Image className="d-none d-lg-inline-block port_image" src={raizes} />
                    </Col>

                    <Col>
                    <Image className="d-lg-none my- port_image_m" src={mariaPizza} />
                    <Image className="d-none d-lg-inline-block port_image" src={mariaPizza} />
                    </Col>

                    <Col>
                    <Image className="d-lg-none my-5 port_image_m" src={tortareli} />
                    <Image className="d-none d-lg-inline-block port_image" src={tortareli} />
                    </Col>
                </Row>

                <Row className="mx-0">
                    <Col>
                    <Image className="d-lg-none my-5 port_image_m" src={nalaje} />
                    <Image className="d-none d-lg-inline-block port_image" src={nalaje} />
                    </Col>

                    <Col>
                    <Image className="d-lg-none my-5 port_image_m" src={lenoxx} />
                    <Image className="d-none d-lg-inline-block port_image" src={lenoxx} />
                    </Col>

                    <Col>
                    <Image className="d-lg-none my-5 port_image port_image_m" src={meninasBolo} />
                    <Image className="d-none d-lg-inline-block port_image" src={meninasBolo} />
                    </Col>
                    
                    <Col>
                    <Image className="d-lg-none my-5 port_image_m" src={vivoPizza} />
                    <Image className="d-none d-lg-inline-block port_image" src={vivoPizza} />
                    </Col>
                </Row>
           
        </section>
    )
}

export default Portfolio;