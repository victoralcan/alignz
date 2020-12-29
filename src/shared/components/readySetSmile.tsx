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
      <h1 className="font-weight-bold">Preparar. Apontar. Sorria!</h1>
      <ul>
        <li>
          <h5>Faça nosso teste online e veja se você é um candidato(a) a utilizar os alinhadores transparentes</h5>
          <div className="clear" />
        </li>
      </ul>
      <Button tag={Link} to="/chatbot" className="general-button">
        Sou um candidato?
      </Button>
    </div>
  );
}

function ReadySetSmile(props: IReadySetSmileProps) {
  return (
    <section className="infoContainer">
      <div id="readySetSmileImg">
        <FittedImage src={props.right ? ReadySetSmileImgRight : ReadySetSmileImgLeft} fit="cover" />
      </div>
      <div id="readySetSmileText">
        <Row className="h-100">
          <Col xs={12} md={6} className="center-elements">
            {!props.right && Content()}
          </Col>
          <Col xs={12} md={6} className="center-elements">
            {props.right && Content()}
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ReadySetSmile;
