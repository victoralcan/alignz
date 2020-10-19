import React from 'react';
import '../../styles/footer.scss';
import { Row, Col, CardDeck, Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function Footer() {
    const cardClassName = 'mb-3 mt-3 ml-1 mr-1 border-0';
    const cardHeaderClassName = 'border-0 font-weight-bold';
    const backgroundColor = '#FBF8F5';
    const textDecoration = 'none';
    const linkColor = '#000';
    return (
        <Row>
            <Col lg={12} md={12} sm={12}>
                <CardDeck className="m-1" style={{ backgroundColor: '#FBF8F5' }}>
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName} style={{ backgroundColor }}>
                            Alignz
                        </CardHeader>
                        <CardBody style={{ backgroundColor }}>
                            <Link to="/aparelho-invisivel" style={{ textDecoration, color: linkColor }}>
                                Aparelho Invisivel
                            </Link>
                            <br />
                            <Link to="/clareamento" style={{ textDecoration, color: linkColor }}>
                                Clareamento
                            </Link>
                            <br />
                            <Link to="/preco" style={{ textDecoration, color: linkColor }}>
                                Saiba o Preço
                            </Link>
                            <br />
                            <Link to="/avaliacao" style={{ textDecoration, color: linkColor }}>
                                Agendar pré avaliação
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName} style={{ backgroundColor }}>
                            Informações
                        </CardHeader>
                        <CardBody style={{ backgroundColor }}>
                            <Link to="/depoimentos" style={{ textDecoration, color: linkColor }}>
                                Depoimentos
                            </Link>
                            <br />
                            <Link to="/duvidas" style={{ textDecoration, color: linkColor }}>
                                Dúvidas?
                            </Link>
                            <br />
                            <Link to="/onde-estamos" style={{ textDecoration, color: linkColor }}>
                                Onde estamos
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName} style={{ backgroundColor }}>
                            Casos
                        </CardHeader>
                        <CardBody style={{ backgroundColor }}>
                            <Link to="/duvidas" style={{ textDecoration, color: linkColor }}>
                                Apinhamento
                            </Link>
                            <br />
                            <Link to="/duvidas" style={{ textDecoration, color: linkColor }}>
                                Diastema
                            </Link>
                            <br />
                            <Link to="/duvidas" style={{ textDecoration, color: linkColor }}>
                                Sobremordida
                            </Link>
                            <br />
                            <Link to="/duvidas" style={{ textDecoration, color: linkColor }}>
                                Mordida Cruzada
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName} style={{ backgroundColor }}>
                            <br />
                        </CardHeader>
                        <CardBody style={{ backgroundColor }}>
                            <Link to="/duvidas" style={{ textDecoration, color: linkColor }}>
                                Mordida Aberta
                            </Link>
                            <br />
                            <Link to="/duvidas" style={{ textDecoration, color: linkColor }}>
                                Progmatismo
                            </Link>
                            <br />
                            <Link to="/duvidas" style={{ textDecoration, color: linkColor }}>
                                Overjet
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName} style={{ backgroundColor }}>
                            <CardTitle>Contatos</CardTitle>
                        </CardHeader>
                        <CardBody style={{ backgroundColor }}>
                            <span>Aparelho Invisivel</span>
                            <br />
                            <span>Aparelho Invisivel</span>
                            <br />
                            <span>Aparelho Invisivel</span>
                            <br />
                            <span>Aparelho Invisivel</span>
                            <br />
                        </CardBody>
                    </Card>
                    <Card className={cardClassName}>
                        <CardHeader className={cardHeaderClassName} style={{ backgroundColor }}>
                            <CardTitle>Social</CardTitle>
                        </CardHeader>
                        <CardBody style={{ backgroundColor }}>
                            <span>Aparelho Invisivel</span>
                            <br />
                            <span>Aparelho Invisivel</span>
                            <br />
                            <span>Aparelho Invisivel</span>
                            <br />
                            <span>Aparelho Invisivel</span>
                            <br />
                        </CardBody>
                    </Card>
                </CardDeck>
            </Col>
        </Row>
    );
}

export default Footer;
