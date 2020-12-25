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
    <Row style={{ backgroundColor: ColorPallet.pinkLight }}>
      <Col lg={4} md={4} sm={4}>
        <ul>
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
          <li>
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
      <Col lg={3} md={3} sm={3}>
        <ul>
          <li>
            <h2>
              SOBRE
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
      <Col lg={3} md={3} sm={3}>
        <ul>
          <li>
            <h2>ATENDIMENTO</h2>
            <br />
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
