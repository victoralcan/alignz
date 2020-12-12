import React from 'react';
import '../../styles/footer.scss';
import { Card, CardBody, CardDeck, CardHeader, CardText, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ColorPallet } from '../model/enum/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import Logo from '../../content/images/logo-alignz-removebg.png';

function Footer() {
  const cardClassName = 'mb-3 mt-3 ml-1 mr-1';
  const cardHeaderClassName = 'border-0 font-weight-bold';
  const textDecoration = 'none';
  const backgroundColor = ColorPallet.pastel2;
  return (
    <Row>
      <Col lg={12} md={12} sm={12}>
        <CardDeck className="m-1">
          <Card className={cardClassName}>
            <CardHeader className="border-0 font-weight-bold d-flex flex-column" style={{ backgroundColor }}>
              <div className="m-auto" style={{ width: 'auto', display: 'inline-block' }}>
                <img src={Logo} alt="AlignerZ" />
              </div>
              <h4 className="text-center">Alguma frase impacto</h4>
            </CardHeader>
          </Card>
          <Card className={cardClassName}>
            <CardHeader className={cardHeaderClassName} style={{ backgroundColor }}>
              Informações
            </CardHeader>
            <CardBody>
              <CardText>
                <Link to="/como-funciona" style={{ textDecoration }}>
                  Como funciona
                </Link>
              </CardText>
              <div className="clear" />
              <CardText>
                <Link to="/valores" style={{ textDecoration }}>
                  Valores
                </Link>
              </CardText>
              <div className="clear" />
              <CardText>
                <Link to="/agenda" style={{ textDecoration }}>
                  Agendar pré avaliação
                </Link>
              </CardText>
              <div className="clear" />
              <CardText>
                <Link to="/duvidas" style={{ textDecoration }}>
                  Dúvidas?
                </Link>
              </CardText>
            </CardBody>
          </Card>
          <Card className={cardClassName}>
            <CardHeader className={cardHeaderClassName} style={{ backgroundColor }}>
              Contatos
            </CardHeader>
            <CardBody>
              <span>
                <FontAwesomeIcon icon="phone" />
                &nbsp;&nbsp;Telefone
              </span>
              <div className="clear" />
              <small>horarios</small>
              <div className="clear" />
              <span>
                <FontAwesomeIcon icon={faWhatsapp} />
                &nbsp;&nbsp;Whatsapp
              </span>
              <div className="clear" />
              <small>horarios</small>
              <div className="clear" />
            </CardBody>
          </Card>
          <Card className={cardClassName}>
            <CardHeader className={cardHeaderClassName} style={{ backgroundColor }}>
              Social
            </CardHeader>
            <CardBody>
              <span>
                <FontAwesomeIcon icon={faFacebook} />
                &nbsp;&nbsp;Facebook
              </span>
              <div className="clear" />
              <span>
                <FontAwesomeIcon icon={faInstagram} />
                &nbsp;&nbsp;Instagram
              </span>
              <div className="clear" />
              <span>
                <FontAwesomeIcon icon={faYoutube} />
                &nbsp;&nbsp;Youtube
              </span>
            </CardBody>
          </Card>
        </CardDeck>
      </Col>
    </Row>
  );
}

export default Footer;
