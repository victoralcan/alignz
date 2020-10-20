import React from 'react';
import { Row, Button, Col } from 'reactstrap';
import FittedImage from 'react-fitted-image';

import ClareamentoBanner from 'content/images/clareamento.jpg';

import 'styles/pages/clareamento.scss';

function Clareamento() {
  return (
    <>
      <section id="banner-section" className="infoContainer">
        <Row className="h-100">
          <Col md={6} className="h-100">
            <FittedImage fit="contain" src={ClareamentoBanner} />
          </Col>
          <Col md={6} className="h-100 content-col">
            <div className="info">
              <h1>
                combo smile: <br />
                alinhamento + clareamento
              </h1>
              <h3>
                clareie seus dentes durante <br />o tratamento de aparelho invisível!
              </h3>
              <Button className="general-button">agendar pré-avaliação</Button>
            </div>
          </Col>
        </Row>
      </section>
      <section className="info-container tratamento-section"></section>
    </>
  );
}

export default Clareamento;
