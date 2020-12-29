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
    <Row style={{ backgroundColor: ColorPallet.pinkLight }} className="p-3">
      <Col md={4} xs={12} className="d-flex align-items-center justify-content-center pb-4 pb-md-0">
        <ul className="d-flex flex-column">
          <li className="m-auto">
            <Brand />
          </li>
          <li>
            <br />
            <br />
          </li>
          <li>
            <h6 className="text-center">Fique ligado nas nossas mídias</h6>
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
      <Col md={4} xs={12} className="d-flex align-items-center justify-content-center pb-4 pb-md-0">
        <ul>
          <li>
            <h3>SOBRE</h3>
            <br />
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
            <Link to="/agenda">Pré-avaliação</Link>
          </li>
        </ul>
      </Col>
      <Col md={4} xs={12} className="d-flex align-items-center justify-content-center pb-4 pb-md-0">
        <ul>
          <li>
            <h3>ATENDIMENTO</h3>
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
