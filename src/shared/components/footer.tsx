import React from 'react';
import '../../styles/footer.scss';
import { Card, CardBody, CardDeck, CardHeader, CardText, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

function Footer() {
    const cardClassName = 'mb-3 mt-3 ml-1 mr-1 border-0';
    const cardHeaderClassName = 'border-0 font-weight-bold';
    const textDecoration = 'none';
    return (
        <Row>
            <Col lg={12} md={12} sm={12}>
                <CardDeck className="m-1">
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName}>Alignz</CardHeader>
                        <CardBody>
                            <CardText>
                                <Link to="/aparelho-invisivel" style={{ textDecoration }}>
                                    Aparelho Invisivel
                                </Link>
                            </CardText>
                            <div className="clear" />
                            <CardText>
                                <Link to="/clareamento" style={{ textDecoration }}>
                                    Clareamento
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
                        <CardHeader className={cardHeaderClassName}>Informações</CardHeader>
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
                        <CardHeader className={cardHeaderClassName}>Casos</CardHeader>
                        <CardBody>
                            <CardText>
                                <Link to="/apinhamento" style={{ textDecoration }}>
                                    Apinhamento
                                </Link>
                            </CardText>
                            <div className="clear" />
                            <CardText>
                                <Link to="/diastema" style={{ textDecoration }}>
                                    Diastema
                                </Link>
                            </CardText>
                            <div className="clear" />
                            <CardText>
                                <Link to="/sobremordida" style={{ textDecoration }}>
                                    Sobremordida
                                </Link>
                            </CardText>
                            <div className="clear" />
                            <CardText>
                                <Link to="/mordida-cruzada" style={{ textDecoration }}>
                                    Mordida Cruzada
                                </Link>
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName}>
                            <br />
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                <Link to="/mordida-aberta" style={{ textDecoration }}>
                                    Mordida Aberta
                                </Link>
                            </CardText>
                            <div className="clear" />
                            <CardText>
                                <Link to="/progmatismo" style={{ textDecoration }}>
                                    Progmatismo
                                </Link>
                            </CardText>
                            <div className="clear" />
                            <CardText>
                                <Link to="/overjet" style={{ textDecoration }}>
                                    Overjet
                                </Link>
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName}>Contatos</CardHeader>
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
                        <CardHeader className={cardHeaderClassName}>Social</CardHeader>
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