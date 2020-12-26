import React from 'react';
import '../../styles/footer.scss';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { ColorPallet } from '../model/enum/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { Brand } from './header/header-components';

function Footer() {
  return (
    <Row style={{ backgroundColor: ColorPallet.pinkLight }} className="p-5">
      <Col lg={5} md={5} sm={5} className="d-flex align-items-center justify-content-center">
        <ul className="d-flex flex-column">
          <li>
            <Brand />
          </li>
          <li>
            <br />
            <br />
            <br />
            <br />
          </li>
          <li>
            <h6>Fique ligado nas nossas mídias</h6>
          </li>
          <li className="m-auto">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            &nbsp;&nbsp;
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            &nbsp;&nbsp;
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            &nbsp;&nbsp;
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </li>
        </ul>
      </Col>
      <Col lg={3} md={3} sm={3} className="d-flex align-items-center justify-content-center">
        <ul>
          <li>
            <h2>
              SOBRE
              <br />
              <br />
            </h2>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/como-funciona">Como funciona</Link>
          </li>
          <li>
            <Link to="/valores">Valores</Link>
          </li>
          <li>
            <Link to="/chatbot">Pré-avaliação</Link>
          </li>
          <li>
            <Link to="/duvidas">Dúvidas</Link>
          </li>
        </ul>
      </Col>
      <Col lg={3} md={3} sm={3} className="d-flex align-items-center justify-content-center">
        <ul>
          <li>
            <h2>
              ATENDIMENTO
              <br />
              <br />
            </h2>
          </li>
          <li>+55 (61) 98443-6135</li>
          <li>@alignerz</li>
          <li>Segunda a sexta</li>
          <li>8h30 às 18h</li>
        </ul>
      </Col>
    </Row>
  );
}

export default Footer;
