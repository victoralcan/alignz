import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Input, Row } from 'reactstrap';
import FittedImage from 'react-fitted-image';
import Preco1 from 'content/images/pages/preco/preco1.jpg';
import Preco2 from 'content/images/pages/preco/preco2.png';
import '../styles/pages/preco.css';

function Preco() {
  const backgroundColor = '#fee0cc';
  return (
    <>
      <section className="infoContainer">
        <Row className="h-100">
          <Col md={6} className="h-100">
            <FittedImage fit="cover" src={Preco1} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center" md={6} style={{ backgroundColor }}>
            <Card style={{ backgroundColor, margin: '0px 100px 0px 100px' }}>
              <CardHeader className="text-center border-0" style={{ backgroundColor, color: '#77C1CD' }}>
                <h1 className="font-weight-bold">Receba o preço do nosso aparelho invisível ;)</h1>
              </CardHeader>
              <CardBody style={{ backgroundColor }}>
                <Input placeholder="Insira seu email" className="mb-3" />
                <div className="d-flex justify-content-center">
                  <Button className="general-button">Solicitar o Preço</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </section>
      <section className="infoContainer">
        <Row className="h-100">
          <Col md={6} className="h-100">
            <div id="left-side-box" className="h-100">
              <ul>
                <li>Exames da avaliação</li>
                <li>Exames da avaliação</li>
                <li>Exames da avaliação</li>
                <li>Exames da avaliação</li>
                <li>Exames da avaliação</li>
                <li>Exames da avaliação</li>
              </ul>
            </div>
          </Col>
          <Col className="d-flex h-100" md={6}>
            <div id="right-side-box" className="h-100 w-25" />
            <div className="w-100 h-50 position-absolute" id="preco2-photo">
              <FittedImage fit="cover" src={Preco2} />
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Preco;
