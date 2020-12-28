import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import ReadySetSmileImgRight from '../../content/images/readySetSmileRight.png';
import ReadySetSmileImgLeft from '../../content/images/readySetSmileLeft.png';
import FittedImage from 'react-fitted-image';
import { Link } from 'react-router-dom';
import '../../styles/components/readySetSmile.scss';

interface IReadySetSmileProps {
  right: boolean;
}

function Content() {
  return (
    <div id="contentDiv">
      <h1 className="display-4 font-weight-bold">Preparar. Apontar. Sorria!</h1>
      <ul>
        <li>
          <h3>Faça nosso teste online e veja se você é um candidato(a) a utilizar os alinhadores transparentes</h3>
          <div className="clear" />
        </li>
      </ul>
      <div className="d-flex">
        <Button tag={Link} to="/chatbot" className="general-button m-auto">
          Sou um candidato?
        </Button>
      </div>
    </div>
  );
}

function ReadySetSmile(props: IReadySetSmileProps) {
  return (
    <section className="infoContainer">
      <div id="readySetSmileImg" style={{}}>
        <FittedImage src={props.right ? ReadySetSmileImgRight : ReadySetSmileImgLeft} fit="cover" />
      </div>
      <div id="readySetSmileText">
        <Row className="h-100">
          <Col md={6} lg={6} sm={4} xs={4} className="center-elements">
            {!props.right && Content()}
          </Col>
          <Col md={6} lg={6} sm={4} xs={4} className="center-elements">
            {props.right && Content()}
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ReadySetSmile;
