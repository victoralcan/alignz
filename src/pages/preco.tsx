import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Input, Row } from 'reactstrap';
import FittedImage from 'react-fitted-image';
import Preco1 from 'content/images/preco1.jpg';
import '../styles/preco.css';

function Preco() {
  const backgroundColor = '#fee0cc';
  return (
    <>
      <Row className="infoContainer">
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
    </>
  );
}

export default Preco;
