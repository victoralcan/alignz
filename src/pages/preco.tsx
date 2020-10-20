import React from 'react';
import { Col, Row } from 'reactstrap';
import FittedImage from 'react-fitted-image';
import Preco1 from 'content/images/preco1.jpg';

function Preco() {
  return (
    <>
      <Row className="infoContainer">
        <Col md={6} className="h-100">
          <FittedImage fit="cover" src={Preco1} />
        </Col>
        <Col md={6}>Email</Col>
      </Row>
    </>
  );
}

export default Preco;
