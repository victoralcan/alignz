import React from 'react';
import '../../styles/footer.scss';
import { Card, CardBody, CardDeck, CardHeader, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

function Footer() {
    const cardClassName = 'mb-3 mt-3 ml-1 mr-1 border-0';
    const cardHeaderClassName = 'border-0 font-weight-bold';
    const textDecoration = 'none';
    return (
        <Row>
            <Col lg={12} md={12} sm={12}>
                <CardDeck className="m-1" style={{ backgroundColor: '#FBF8F5' }}>
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName}>Alignz</CardHeader>
                        <CardBody>
                            <Link to="/aparelho-invisivel" style={{ textDecoration }}>
                                Aparelho Invisivel
                            </Link>
                            <br />
                            <Link to="/clareamento" style={{ textDecoration }}>
                                Clareamento
                            </Link>
                            <br />
                            <Link to="/preco" style={{ textDecoration }}>
                                Saiba o Preço
                            </Link>
                            <br />
                            <Link to="/avaliacao" style={{ textDecoration }}>
                                Agendar pré avaliação
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName}>Informações</CardHeader>
                        <CardBody>
                            <Link to="/depoimentos" style={{ textDecoration }}>
                                Depoimentos
                            </Link>
                            <br />
                            <Link to="/duvidas" style={{ textDecoration }}>
                                Dúvidas?
                            </Link>
                            <br />
                            <Link to="/onde-estamos" style={{ textDecoration }}>
                                Onde estamos
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName}>Casos</CardHeader>
                        <CardBody>
                            <Link to="/duvidas" style={{ textDecoration }}>
                                Apinhamento
                            </Link>
                            <br />
                            <Link to="/duvidas" style={{ textDecoration }}>
                                Diastema
                            </Link>
                            <br />
                            <Link to="/duvidas" style={{ textDecoration }}>
                                Sobremordida
                            </Link>
                            <br />
                            <Link to="/duvidas" style={{ textDecoration }}>
                                Mordida Cruzada
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName}>
                            <br />
                        </CardHeader>
                        <CardBody>
                            <Link to="/duvidas" style={{ textDecoration }}>
                                Mordida Aberta
                            </Link>
                            <br />
                            <Link to="/duvidas" style={{ textDecoration }}>
                                Progmatismo
                            </Link>
                            <br />
                            <Link to="/duvidas" style={{ textDecoration }}>
                                Overjet
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName}>Contatos</CardHeader>
                        <CardBody>
                            <span>Telefone</span>
                            <br />
                            <small>horarios</small>
                            <br />
                            <span>Whatsapp</span>
                            <br />
                            <small>horarios</small>
                            <br />
                        </CardBody>
                    </Card>
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName}>Social</CardHeader>
                        <CardBody>
                            <span>Facebook</span>
                            <br />
                            <span>Instagram</span>
                            <br />
                            <span>Youtube</span>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Col>
        </Row>
    );
}

export default Footer;
