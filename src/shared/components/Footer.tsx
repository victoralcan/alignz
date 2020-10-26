import React from 'react';
import '../../styles/footer.scss';
import { Card, CardBody, CardDeck, CardHeader, CardText, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ColorPallet } from '../model/enum/colors';

function Footer() {
  const cardClassName = 'mb-3 mt-3 ml-1 mr-1';
  const cardHeaderClassName = 'border-0 font-weight-bold';
  const textDecoration = 'none';
  const backgroundColor = ColorPallet.whiteDirty;
  return (
    <Row>
      <Col lg={12} md={12} sm={12}>
        <CardDeck className="m-1">
          <Card className={cardClassName}>
            <CardHeader className={cardHeaderClassName} style={{ backgroundColor }}>
              AlignerZ
            </CardHeader>
            <CardBody>
              <CardText>
                <Link to="/como-funciona" style={{ textDecoration }}>
                  Como funciona
                </Link>
              </CardText>
              <div className="clear" />
              <CardText>
                <Link to="/preco" style={{ textDecoration }}>
                  Saiba o Preço
                </Link>
              </CardText>
              <div className="clear" />
              <CardText>
                <Link to="/agenda" style={{ textDecoration }}>
                  Agendar pré avaliação
                </Link>
              </CardText>
            </CardBody>
          </Card>
          <Card className={cardClassName}>
            <CardHeader className={cardHeaderClassName} style={{ backgroundColor }}>
              Informações
            </CardHeader>
            <CardBody>
              <CardText>
                <Link to="/depoimentos" style={{ textDecoration }}>
                  Depoimentos
                </Link>
              </CardText>
              <div className="clear" />
              <CardText>
                <Link to="/duvidas" style={{ textDecoration }}>
                  Dúvidas?
                </Link>
              </CardText>
              <div className="clear" />
              <CardText>
                <Link to="/onde-estamos" style={{ textDecoration }}>
                  Onde estamos
                </Link>
              </CardText>
            </CardBody>
          </Card>
          <Card className={cardClassName}>
            <CardHeader className={cardHeaderClassName} style={{ backgroundColor }}>
              Contatos
            </CardHeader>
            <CardBody>
              <span>Telefone</span>
              <div className="clear" />
              <small>horarios</small>
              <div className="clear" />
              <span>Whatsapp</span>
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
              <span>Facebook</span>
              <div className="clear" />
              <span>Instagram</span>
              <div className="clear" />
              <span>Youtube</span>
            </CardBody>
          </Card>
        </CardDeck>
      </Col>
    </Row>
  );
}

export default Footer;
